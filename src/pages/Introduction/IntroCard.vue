<template>
  <div class="card">
    <img :src="imgUrl" alt="">
    <p class="card-num"> {{ num }}</p>
    <p class="card-words"> {{ words }} </p>
  </div>
</template>

<script>
export default {
  name: "IntroCard",
  props: ["imgUrl", "num", "words"]
}
</script>

<style scoped>

.card {
  border-radius: 13px;
  width: 88vw;
  position: relative;
  height: 21vh;
  background: white;
  display: inline-block;
  margin-bottom: 4vh;
  box-shadow: 1px 7px 30px #cbcaca;
}

.card:first-of-type {
  margin-top: 6vh;
}

.card:last-of-type {
  height: 25vh;
}

.card img {
  position: relative;
  display: block;
  left: 5vw;
  top: 2vh;
  height: 4vh !important;
}

.card .card-num {
  top: 1vh;
  font-size: 2.5vh;
  display: block;
  position: relative;
  left: 5vw;
  text-align: left;
}

.card .card-words {
  position: relative;
  text-align: left;
  left: 5vw;
  font-size: 1.3vh;
  top: 0.5vh;
  width: 90%;
}

</style>