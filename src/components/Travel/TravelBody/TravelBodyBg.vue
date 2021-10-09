<template>
  <div class="travel-body-bg">
    <TravelBodyDetail/>
    <TravelBodyArrow/>
    <hr class="divide">
    <TravelBodyVisited/>
  </div>
</template>

<script>
import TravelBodyDetail from "@/components/Travel/TravelBody/TravelBodyDetail";
import TravelBodyArrow from "@/components/Travel/TravelBody/TravelBodyArrow";
import TravelBodyVisited from "@/components/Travel/TravelBody/TravelBodyVisited";
export default {
  name: "TravelBodyBg",
  components: {TravelBodyVisited, TravelBodyArrow, TravelBodyDetail}
}
</script>

<style scoped>
.travel-body-bg {
  background: white;
  position: absolute;
  width: 100%;
  top: 3.8vh;
  height: 36.2vh;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.divide {
  width: 93%;
  position: absolute;
  top: 27vh;
  background: rgb(230, 236, 239);
  border: none;
  height: 1px;
  left: 3vw;
}
</style>