<template>
  <div class="intro-reason">
    <p class="title-words"> 为什么要使用行程卡? </p>
    <div v-for="(url, idx) in urls" :key="idx" class="reason-img">
      <img  :src="url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroReason",
  data() {
    return {
      urls: [
          "https://xc.caict.ac.cn/imgApp/yd-img_crowd.png",
          "https://xc.caict.ac.cn/imgApp/yd-img_privacy.png",
      ]
    }
  }
}
</script>

<style scoped>

.intro-reason .title-words {
  color: black;
  width: 100%;
  left: 0;
  position: relative;
  top: 5vh;
  font-size: 3.5vh;
  margin-top: 3vh;
}

.reason-img {
  position: relative;
  margin-bottom: 1vh;
}

.reason-img img {
  width: 86vw;
}

</style>