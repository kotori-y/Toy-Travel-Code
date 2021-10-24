<template>
  <div class="intro-header">
    <div class="intro-logo">
      <img src="https://xc.caict.ac.cn/imgApp/yd-img_logo.png" alt="">
    </div>
    <p class="title-words"> 通信行程卡 </p>
    <p class="body-words"> "通信行程卡"是由工信部指导，中国信通院、中国电信、中国移动、中国联通共同推出的行程查询服务，可以免费为用户提供本人过往14天内到访过的国家(地区)和国内城市证明。 </p>
    <AppDownloading/>
    <div class="img-phones">
      <img src="https://xc.caict.ac.cn/imgApp/yd-img_phones.png" alt="">
    </div>
  </div>
</template>

<script>
import AppDownloading from "@/pages/Introduction/appDownloading";
export default {
  name: "IntroHeader",
  components: {AppDownloading}
}
</script>

<style scoped>

.intro-header {
  background: rgb(59, 105, 236);
  width: 100vw;
  height: 78vh;
  position: relative;
  top: 10vh;
}

.intro-logo {
  position: absolute;
  top: 4vh;
  left: 5vw;
}

.intro-logo img {
  width: 40vw;
}


.title-words {
  position: absolute;
  left: 5vw;
  font-size: 4vh;
  margin-top: 13vh;
  color: white;
}

.body-words {
  position: absolute;
  font-size: 1.3vh;
  top: 19vh;
  left: 5vw;
  text-align: left;
  width: 87.5vw;
  color: white;
}

.img-phones {
  position: absolute;
  bottom: 2vh;
  /* align-items: center; */
  width: 100%;
}

.img-phones img {
  height: 40vh;
}

/deep/ .app-downloading {
  position: absolute !important;
  top: 28vh !important;
  left: 7vw !important;
}

</style>