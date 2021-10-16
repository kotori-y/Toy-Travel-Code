<template>
  <div class="check-container">
    <div>
      <input @change="agreeTerms" class="checkbox" type="checkbox" id="serve1" name="serve1" v-model="term1">
      <label class="serve1" for="serve1">同意并授权运营商查询本人在疫情期间14天内到访地信息</label><br>
    </div>
    <div style="position:absolute; top: 2vh">
      <input @change="agreeTerms" class="checkbox" type="checkbox" id="serve2" name="serve2" v-model="term2">
      <label class="serve2" for="serve2">授权系统获取新冠肺炎确诊用户加密ID</label><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInTerms",
  data() {
    return {
      term1: false,
      term2: false,
    }
  },
  methods: {
    agreeTerms() {
      this.$emit("isAgree", this.term1 && this.term2)
    }
  }
}
</script>

<style scoped>
.check-container {
  position: absolute;
  top: 16vh;
}

.checkbox {
  height: 1.3vh;
  width: 1.3vh;
  margin-top: 0.3vh;
}

.serve1, .serve2 {
  left: 6vw;
  position: absolute;
  font-size: 1.2vh;
  color: #b6afaf;
}

.serve1 {
  width: 74vw;
}

.serve2 {
  width: 52.5vw;
}

input {
  font-size: 1.8vh;
  border: none;
  /* top: 1vh; */
  padding: 0;
  position: absolute;
  left: 6vw;
}

</style>