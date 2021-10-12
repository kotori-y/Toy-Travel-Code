<template>
  <div class="account-container">
    <div class="phoneNumber">
      <img class="icon" src="../../assets/icon/mobile.svg" alt="">
      <input type="text" placeholder="手机号">
      <div class="split" ></div>
      <div class="obtain"> 获取验证码 </div>
      <div class="under-line"></div>
    </div>
    <div class="verify">
      <img class="icon" src="../../assets/icon/verify.svg" alt="">
      <input type="text" placeholder="请输入验证码">
      <div class="under-line"></div>
      <img class="icon cancel" src="../../assets/icon/cancel.svg" alt="">
    </div>
    <div class="check-container">
      <div>
        <input class="checkbox" type="checkbox" id="serve1" name="serve1">
        <label class="serve1" for="serve1">同意并授权运营商查询本人在疫情期间14天内到访地信息</label><br>
      </div>
      <div style="position:absolute; top: 2vh">
        <input class="checkbox" type="checkbox" id="serve2" name="serve2">
        <label class="serve2" for="serve2">授权系统获取新冠肺炎确诊用户加密ID</label><br>
      </div>
    </div>
    <button class="submit">登陆</button>
    <a class="intro" href="javascript:void(0);">行程卡使用说明</a>
  </div>
</template>

<script>
export default {
  name: "LonInAccount",
}
</script>

<style scoped>

.account-container {
  background: white;
  height: 32vh;
  position: absolute;
  top: 22vh;
  border-radius: 30px;
  box-shadow: 1px 1px 30px #cbcaca;
  width: 84%;
  left: 8vw;
}

.phoneNumber {
  display: inline-block;
  left: 4vw;
  position: absolute;
  top: 4vh;
}

.verify {
  position: absolute;
  display: inline-block;
  left: 4vw;
  top: 11vh;
}

.icon {
  height: 2vh;
  top: 0;
  position: absolute;
}

.cancel {
  left: 68vw;
}

input {
  height: 2vh;
  font-size: 2vh;
  border: none;
  /* top: 1vh; */
  padding: 0;
  position: absolute;
  left: 6vw;
}

input:focus {
  outline: none;
  caret-color: #3939e3
}

.split {
  float: left;
  width: 1px;
  height: 2vh;
  background: #b6afaf;
  position: absolute;
  left: 52vw;
}

.under-line {
  width: 74vw;
  height: 2px;
  background: #b6afaf;
  position: absolute;
  left: 0;
  top: 3vh;
}

.obtain {
  font-size: 1.8vh;
  left: 53vw;
  position: absolute;
  width: 22vw;
  color: #b6afaf;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b6afaf;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #b6afaf;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #b6afaf;
}

.submit {
  background-color: rgb(119,172,249);
  border: none;
  color: white;
  padding: 1.1vh 34vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 2.1vh;
  left: 3vw;
  top: 21vh;
  position: absolute;
  border-radius: 24px;
}

.check-container {
  position: absolute;
  top: 16vh;
}

.checkbox {
  height: 1vh;
  width: 1vh;
  margin-top: 0.3vh;
}

.serve1, .serve2 {
  left: 6vw;
  position: absolute;
  font-size: 1.2vh;
  color: #b6afaf;
}

.serve1 {
  width: 74vw;
}

.serve2 {
  width: 53vw;
}

a.intro {
  position: absolute;
  bottom: 2vh;
  right: 2vh;
  font-size: 1vh;
}

</style>