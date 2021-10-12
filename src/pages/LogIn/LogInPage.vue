<template>
  <div class="login">
    <main-title/>
    <LonInAccount/>
  </div>
</template>

<script>
import MainTitle from "@/components/Title";
import LonInAccount from "@/pages/LogIn/LonInAccount";
export default {
  name: "LogInPage",
  components: {LonInAccount, MainTitle}
}
</script>

<style scoped>

/deep/ .title {
  color: rgb(27,64,142) !important;
}

/deep/ .slogan {
  color: rgb(64,110,160);
  font-weight: normal;
}



</style>