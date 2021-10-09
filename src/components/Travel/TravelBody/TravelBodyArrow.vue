<template>
  <div class="arrow">
    <img id="arrow" src="../../../assets/arrow.png" alt="">
  </div>
</template>

<script>
export default {
  name: "TravelBodyArrow"
}
</script>

<style scoped>

.arrow {
  position: absolute;
  width: 100%;
  top: 10vh;
}

#arrow {
  position: relative;
  height: 15vh;
  animation: twinkle 0.8s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.2);
  }
}

</style>