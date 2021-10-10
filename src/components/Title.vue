<template>
  <div class="container">
    <p class="title">
      通信大数据行程卡
    </p>
    <p class="slogan">
      疫情防控，人人有责
    </p>
  </div>
</template>

<script>
export default {
  name: "mainTitle"
}
</script>

<style scoped>

@font-face {
  font-family: lalala;
  src: url("../assets/font/title.TTF");
}

.container {
  position: absolute;
  top: 8vh;
  width: 100%;
}

p {
  color: white;
  margin: 0;
}

.title {
  font-family: "lalala", serif;
  font-size: 4vh;
  line-height: 6vh;
}

.slogan {
  font-size: 2.5vh;
  font-weight: bolder;
}

</style>