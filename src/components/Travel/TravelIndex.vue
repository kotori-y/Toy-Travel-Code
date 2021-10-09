<template>
  <div class="container">
    <TravelBackGround/>
  </div>
</template>

<script>
import TravelBackGround from "@/components/Travel/TravelBackGround";
export default {
  name: "TravelIndex",
  components: {TravelBackGround}
}
</script>

<style scoped>

.container {
  position: absolute;
  top: 15vh;
  width: 100%;
}

</style>