<template>
  <div class="visited">
    <p class="visited-title">您于前14天内到达或途径：</p>
    <ul>
      <li v-for="(city, idx) in cities" :key="idx">{{ city }}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "TravelBodyVisited",
  data() {
    return {
      cities: ["北京市"]
    }
  }
}
</script>

<style scoped>

.visited {
  width: 93%;
  position: absolute;
  top: 29vh;
  left: 3vw;
  text-align: left;
}

.visited-title {
  margin: 0;
  font-size: 1.8vh;
  font-weight: 400;
  color: rgb(178,179,184);
  text-align: left;
  display: inline-block;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 1.8vh;
  font-weight: bolder;
  display: inline-block;
}

</style>