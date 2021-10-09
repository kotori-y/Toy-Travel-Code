<template>
  <div>
    <div class="support">
      <hr class="support-line">
      <p class="support-title">本服务联合提供</p>
      <hr class="support-line">
    </div>
    <Service/>
  </div>
</template>

<script>
import Service from "@/components/Footer/Service";
export default {
  name: "Support",
  components: {Service}
}
</script>

<style scoped>

.support {
  position: absolute;
  top: 63.5vh;
  width: 100%;
  display: flex;
}

.support-line {
  width: 23%;
  position: relative;
  /* top: 27vh; */
  background: white;
  border: none;
  height: 1px;
  /* left: 3vw; */
  margin: auto;
}

.support-title {
  font-size: 1.6vh;
  margin: 0;
  color: #FFFF;;
}

</style>