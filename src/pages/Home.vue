<template>
  <div class="home">
    <img @click.prevent="quit" class=more src="../assets/icon/more.svg" alt="">
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
    document.querySelector('body').setAttribute('style', 'background: #3CAD60')
  },
  // beforeDestroy () {
  //   document.querySelector('body').setAttribute('style', 'background: #e3e1e1;')
  // },
  methods: {
    quit() {
      localStorage.removeItem("phoneNum");
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style scoped>

.more {
  position: absolute;
  top: 5vh;
  height: 2.5vh;
  right: 5vw;
}

</style>