<template>
  <div class="notice">
    <p>
      结果包含您在前14天内到访的国家（地区）与停留4小时以上的国内城市<br>
          色卡仅对到访地作提醒，不关联健康状况
    </p>
  </div>
</template>

<script>
export default {
  name: "Notice"
}
</script>

<style scoped>

.notice {
  position: absolute;
  top: 60.5vh;
  font-size: 2.5vw;
  max-width: 86%;
  text-align: center;
  left: 10vw;
  color: aliceblue;

}

</style>