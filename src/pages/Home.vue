<template>
  <div class="home">
    <MainTitle/>
    <TravelIndex/>
    <Notice/>
    <Support/>
    <Foot/>
  </div>
</template>

<script>
import MainTitle from "@/components/Title";
import TravelIndex from "@/components/Travel/TravelIndex";
import Notice from "@/components/Notice";
import Support from "@/components/Footer/Support";
import Foot from "@/components/Footer/Foot";
export default {
  name: "Home.vue",
  components: {Foot, Support, Notice, TravelIndex, MainTitle},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:rgb(60, 173, 96);')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background: #e3e1e1;')
  }
}
</script>

<style scoped>


</style>