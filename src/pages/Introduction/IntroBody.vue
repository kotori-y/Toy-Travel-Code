<template>
  <div class="intro-body">
    <p class="title-words"> 行程卡+蓝牙 </p>
    <div class="blue-tooth">
      <img src="https://xc.caict.ac.cn/imgApp/yd-img_bluetooth%20.png" alt="">
    </div>
    <p class="body-words"> 通信行程卡手机APP版本中加入了蓝牙近距离接触提醒功能，如果和您近距离接触过的陌生人诊断为新冠肺炎确诊/疑似患者，使用我们的服务将更及时地提醒您注意健康观察。 </p>
  </div>
</template>

<script>
export default {
  name: "IntroBody"
}
</script>

<style scoped>
.intro-body {
  position: relative;
}

.intro-body .title-words {
  color: black;
  width: 100%;
  left: 0;
  position: relative;
  top: 5vh;
  font-size: 3.5vh;
  margin-top: 13vh;
}

.blue-tooth {
  position: relative;
  align-items: center;
  width: 100%;
  top: 8vh;
}

.blue-tooth img {
  width: 80vw;
}

.intro-body .body-words {
  color: black;
  left: 9vw;
  width: 82vw;
  font-size: 1.3vh;
  line-height: 3.5vh;
  top: 13vh;
  position: relative;
  text-align: justify;
  margin-bottom: 12vh;
}
</style>