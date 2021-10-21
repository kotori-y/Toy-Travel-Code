<template>
  <div class="home">
    <img @click.prevent="show" class=more src="../assets/icon/more.svg" alt="" id="more">
    <MainTitle/>
    <TravelIndex/>
    <Notice/>
    <Support :caift="caift" :telegram="telegram" :mobile="mobile" :unicom="unicom"/>
    <Foot/>
    <More v-if="showMore" @queryExit="queryExit"/>
    <ExitQuery v-if="showQuery" @closeQuery="closeQuery"/>
  </div>
</template>

<script>
import MainTitle from "@/components/Title";
import TravelIndex from "@/components/Travel/TravelIndex";
import Notice from "@/components/Notice";
import Support from "@/components/Footer/Support";
import Foot from "@/components/Footer/Foot";
import More from "@/components/More";
import ExitQuery from "@/components/ExitQuery";
export default {
  name: "Home.vue",
  components: {ExitQuery, More, Foot, Support, Notice, TravelIndex, MainTitle},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: #3CAD60')
  },
  mounted() {
    this.$bus.$on("quit", this.quit)
    document.addEventListener("click", (event) => {
      if (event.target.id !== "more") {
        this.showMore = false
      }
    })
  },
  data() {
    return {
      showMore: false,
      showQuery: false,
      caift: "caift.png",
      mobile: "mobile.png",
      telegram: "telegram.png",
      unicom: "unicom.png"
    }
  },
  methods: {
    show() {
      this.showMore = !this.showMore
    },
    quit() {
      localStorage.removeItem("phoneNum");
      this.$router.push({name: "login"})
    },
    queryExit() {
      this.showMore = false
      this.showQuery = true
    },
    closeQuery() {
      this.showQuery = false
    },
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