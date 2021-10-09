<template>
    <div style="user-select: text">
      <agreement-main-title main-title="隐私政策"/>
      <PolicyBody/>
    </div>
</template>

<script>
import AgreementMainTitle from "@/components/SubpageMainTitle";
import PolicyBody from "@/pages/PrivacyPolicy/PolicyBody";

export default {
  name: "Agreement",
  components: {PolicyBody, AgreementMainTitle},
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