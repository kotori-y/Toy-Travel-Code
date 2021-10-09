<template>
  <div class="service-container">
    <img class="service" src="../../assets/icon/caift.png" alt="caift">
    <img class="service-" src="../../assets/icon/telegram.png" alt="telegram">
    <img class="service-" src="../../assets/icon/mobile.png" alt="mobile">
    <img class="service-" src="../../assets/icon/unicom.png" alt="unicom">
  </div>
</template>

<script>
export default {
  name: "Service"
}
</script>

<style scoped>

.service-container {
  position: absolute;
  top: 69vh;
  width: 78%;
  display: flex;
  justify-content: space-evenly;
  left: 11vw;
}

.service {
  height: 1.5vh;
}

.service- {
  height: 1.8vh;
}

</style>