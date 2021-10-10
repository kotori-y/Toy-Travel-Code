<template>
  <div class="foot">
    <p>客服热线：10000 / 10086 / 10010</p>
    <p> 点击查看
      <router-link to="agreement">《服务协议》</router-link>
      和
      <router-link to="policy">《隐私政策》</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Foot",
  methods: {
    bar() {
      console.log(456)
    }
  }
}
</script>

<style scoped>

.foot {
  position: absolute;
  width: 100%;
  top: 76vh;
  color: white;
  font-size: 1.6vh;
  font-weight: bolder;
}

a {
  text-decoration: none;
  color: white;
  -webkit-tap-highlight-color: transparent;
}

</style>