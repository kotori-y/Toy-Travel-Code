<template>
  <div class="more-container">
    <div class="triangle"/>
    <div class="more">
      <div class="more-icon">
        <img src="../assets/icon/intro.svg" alt="">
        <span>使用说明</span>
      </div>
      <router-link to="/rule" class="more-icon">
        <img src="../assets/icon/rule.svg" alt="">
        <span>色卡规则</span>
      </router-link>
      <div @click="update" class="more-icon">
        <img src="../assets/icon/refresh.svg" alt="">
        <span>刷新状态</span>
      </div>
      <div @click="upload" class="more-icon">
        <img src="../assets/icon/upload.svg" alt="">
        <span>数据上传</span>
      </div>
      <div @click="quit" class="more-icon">
        <img src="../assets/icon/exit.svg" alt="">
        <span>退出登陆</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "More",
  methods: {
    quit() {
      this.$bus.$emit("quit")
    },
    update() {
      this.$bus.$emit("updateTime")
      this.$bus.$emit("updatePosition")
    },
    upload() {
      alert("仅新冠肺炎确诊/疑似患者有权限上传数据")
    }
  }
}
</script>

<style scoped>

.more-container {
  position: absolute;
  right: 3vw;
  top: 6vh;
}

.triangle {
  width: 0;
  height: 0;
  border: 1.7vw solid transparent;
  border-bottom: 1.9vh solid #262525;
  position: relative;
  left: 20vw;
  opacity: 0.9;
  display: block;
  top: 1vh;
}

.more {
  height: 23vh;
  width: 26vw;
  border-radius: 10px / 30px;
  background-color: #262525;
  opacity: 0.9;
  top: 1vh;
  position: relative;
  left: 1vw;
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.more-icon {
  left: 3vw;
  position: relative;
}

.more-icon img {
  height: 2.3vh;
}

.more-icon span {
  color: white;
  font-size: 1.7vh;
  position: absolute;
  width: 15vw;
}

</style>