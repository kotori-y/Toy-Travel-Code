<template>
  <div style="user-select: text">
    <agreement-main-title main-title="服务条款"/>
    <agreement-body/>
  </div>
</template>

<script>
import AgreementMainTitle from "@/components/SubpageMainTitle";
import AgreementBody from "@/pages/ServiceArgeement/AgreementBody";
export default {
  name: "Agreement",
  components: {AgreementBody, AgreementMainTitle},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: #e3e1e1;')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:rgb(60, 173, 96);')
  }
}
</script>

<style scoped>

</style>