<template>
  <div class="background">
    <p class="result">请收下绿色行程卡</p>
    <div class="lr">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <TravelBodyBg/>
  </div>
</template>

<script>
import TravelBodyBg from "@/components/Travel/TravelBody/TravelBodyBg";
export default {
  name: "TravelBackGround",
  components: {TravelBodyBg}
}
</script>

<style scoped>

.background {
  position: relative;
  border-radius: 10px;
  height: 40vh;
  width: 87vw;
  background: rgb(217,236,226);
  display: inline-block;
}

.result {
  position: absolute;
  top: 1vh;
  margin: 0;
  width: 100%;
  font-weight: bolder;
  color: rgb(96,162,116);
  line-height: 2vh;
  font-size: 2vh;
}

.left {
  width: 15vw;
  height: 0;
  border-right: 2vw solid transparent;
  border-bottom: 2vh solid white;
}

.right {
  width: 15vw;
  height: 0;
  border-left: 2vw solid transparent;
  border-bottom: 2vh solid white;
}

.lr {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 2vh;
}

</style>