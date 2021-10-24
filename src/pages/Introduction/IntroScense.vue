<template>
  <div class="intro-scenes">
    <p class="title-words">使用场景</p>
    <p class="body-words">您可以在进入影院、餐馆、地铁、商场、医院、校园等人员密集且人流量较大的场合时主动开启行程卡APP，保护自己也保护他人</p>
    <div v-for="(url, idx) in urls" :key="idx" class="scenes-img">
      <img  :src="url" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "IntroScense",
  data() {
    return {
      urls: [
        "https://xc.caict.ac.cn/imgApp/yd-img_theater.png",
        "https://xc.caict.ac.cn/imgApp/yd-img_dinner.png",
        "https://xc.caict.ac.cn/imgApp/yd-img_subway.png",
        "https://xc.caict.ac.cn/imgApp/yd-img_mall.png",
      ]
    }
  }
}
</script>

<style scoped>

.title-words {
  color: black;
  left: 0;
  /* display: inline-block; */
  position: relative;
  top: 9vh;
  width: 100vw;
  font-size: 3.5vh;
}

.body-words {
  color: black;
  /* left: 9vw; */
  width: 70vw;
  font-size: 1.3vh;
  line-height: 3.5vh;
  top: 7vh;
  position: relative;
  text-align: center;
  display: inline-block;
}

.scenes-img:first-of-type {
  margin-top: 8vh;
}

.scenes-img {
  margin-bottom: 2vh;
}

.scenes-img img {
  width: 78vw;
}

</style>