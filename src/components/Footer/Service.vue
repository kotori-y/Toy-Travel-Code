<template>
  <div class="service-container">
    <img class="service" :src="require(`@/assets/icon/${caift}`)" alt="caift">
    <img class="service-" :src="require(`@/assets/icon/${telegram}`)" alt="telegram">
    <img class="service-" :src="require(`@/assets/icon/${mobile}`)" alt="mobile">
    <img class="service-" :src="require(`@/assets/icon/${unicom}`)" alt="unicom">
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["caift", "telegram", "mobile", "unicom"]
}
</script>

<style scoped>

.service-container {
  position: absolute;
  top: 74vh;
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