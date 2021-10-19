<template>
  <div class="cardrule-container">
    <div class="mask"></div>
    <div class="cardrule-body">
      <p>色卡规则</p>
      <p><strong>查询结果页会使用绿色、黄色、橙色、红色四种颜色进行标记，规则会按实际情况进行实时调整</strong></p>
      <p><strong>最新卡面规则</strong></p>
      <p><strong>红卡：暂无</strong></p>
      <p><strong>橙卡：新冠肺炎确诊或疑似患者的密切接触者</strong></p>
      <p><strong>黄卡：海外国家和地区 </strong></p>
      <p><strong>绿卡：其他地区</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRuleBody",
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: #e3e1e1;')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:rgb(60, 173, 96);')
  }
}
</script>

<style scoped>

.cardrule-container {
  overflow: scroll;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 5vh;
}

.cardrule-body {
  position: absolute;
  top: 7vh;
  font-size: 1vh;
  width: 96%;
  left: 2vw;
}

p {
  text-align: justify;
  font-size: 1.05vh;
  margin: 0.2vh auto;
}

.mask {
  height: 100vh;
  position: absolute;
  width: 100vw;
  top: 0;
  background: white;
  z-index: -1;
  overflow: hidden;
}

</style>