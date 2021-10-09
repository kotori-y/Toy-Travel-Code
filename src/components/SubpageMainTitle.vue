<template>
  <div>
    <router-link to="/">
      <img class="back" src="../assets/icons8-back-90.png" alt="back">
    </router-link>

    <div class="sub-main-title">
      <p>{{ mainTitle }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "SubpageMainTitle",
  props: {
    mainTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.sub-main-title {
  height: 6vh;
  background: #e3e1e1;
  width: 100%;
  font-size: 2vh;
  font-weight: bolder;
  position: fixed;
  z-index: 2;
}

.back {
  z-index: 3;
  position: fixed;
  top: 1.9vh;
  left: 2vw;
  height: 2.5vh;
}

</style>