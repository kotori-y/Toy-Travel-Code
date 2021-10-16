<template>
  <div>
    <router-link to="/home">
      <img class="back" src="../assets/icons8-back-90.png" alt="back">
    </router-link>

    <div class="sub-main-title">
      <p class="mainTitle">{{ mainTitle }}</p>
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
  height: 11vh;
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
  top: 7.5vh;
  left: 2.3vw;
  height: 2.5vh;
}

.mainTitle {
  top: 5vh;
  position: absolute;
  left: 41.3vw;
}

</style>