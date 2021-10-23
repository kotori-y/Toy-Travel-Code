import aioredis
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

app.add_middleware(  # 添加中间件
    CORSMiddleware,  # CORS中间件类
    allow_origins=["*"],  # 允许起源
    allow_credentials=True,  # 允许凭据
    allow_methods=["*"],  # 允许方法
    allow_headers=["*"]  # 允许头部
)


@app.on_event('startup')
async def startup_event():
    app.state.usr = await aioredis.create_redis_pool(('127.0.0.1', 0000), db=0, password="foobar")
    app.state.attemptTime = await aioredis.create_redis_pool(('127.0.0.1', 0000), db=1, password="foobar")
    app.state.risk = await aioredis.create_redis_pool(('127.0.0.1', 0000), db=2, password="foobar")


@app.get("/")
async def root():
    return {"message": "Hello, Redis is running"}


class VerifyItem(BaseModel):
    phone_number: int = Query(...)
    verify_code: int = Query(...)


@app.post("/verify")
async def verify_usr(form: VerifyItem):
    phone_num = str(form.phone_number)
    if await app.state.usr.exists(phone_num):

        code = await app.state.usr.get(str(phone_num), encoding='utf-8')
        if code == "blocked":
            return False

        if code == str(form.verify_code):
            await app.state.attemptTime.delete(phone_num)
            return True

        attempted = await app.state.attemptTime.incr(phone_num)
        if attempted >= 3:
            await app.state.usr.set(phone_num, "blocked")
            await app.state.attemptTime.delete(phone_num)

    return False


@app.get("/risk/")
async def check_risk(city):
    return await app.state.risk.exists("risk") and \
           await app.state.risk.sismember("risk", city)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8001)
