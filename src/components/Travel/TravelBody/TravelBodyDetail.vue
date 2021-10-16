<template>
  <div class="detail">
    <p class="tel">{{ tel }}的动态行程卡</p>
    <p class="time"> 更新于：{{ getNowTime }}</p>
  </div>
</template>

<script>
export default {
  name: "TravelBodyDetail",
  computed: {
    tel() {
      const num = localStorage.getItem("phoneNum")
      return num.substr(0, 3) + "****" + num.substr(-4, 4)
    },
    getNowTime() {

      const fix = (num) => { return (Array(2).join("0") + num).slice(-2) }

      const now = new Date()

      let [YY, MM, DD] = now.toLocaleDateString().split("/");
      MM = fix(MM)
      DD = fix(DD)

      let [h, m, s] = [now.getHours(), now.getMinutes(), now.getSeconds()];
      m = fix(m)
      s = fix(s)

      return `${YY}.${MM}.${DD} ${h}:${m}:${s}`
    }
  }
}
</script>

<style scoped>

.detail {
  position: absolute;
  top: 1vh;
  width: 100%;
}

.tel {
  font-weight: bolder;
  font-size: 1.8vh;
  margin: 0;
}

.time {
  color: rgb(178,179,184);
  font-size: 1.5vh;
  margin: 0;
  line-height: 4vh;
}

</style>