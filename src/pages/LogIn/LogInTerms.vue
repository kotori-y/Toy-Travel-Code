<template>
  <div class="check-container">
    <div>
      <input @change="agreeTerms" class="checkbox" type="checkbox" id="serve1" name="serve1" v-model="term1">
      <label class="serve1" for="serve1">同意并授权运营商查询本人在疫情期间14天内到访地信息</label><br>
    </div>
    <div style="position:absolute; top: 5vh">
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
  height: 1.5vh;
  width: 1.5vh;
  margin-top: 0.3vh;
  border-radius: 0;
}

input[type=checkbox] {
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;
  outline: none !important;
  content: none;
}

input[type=checkbox]::before {
  font-family: "FontAwesome",serif;
  content: "\f00c";
  font-size: 1.5vh;
  border-radius: 4px;
  color: transparent !important;
  background: #fff;
  display: block;
  width: 1.5vh;
  height: 1.5vh;
  border: 1px solid #d3d6db;
  /*margin-right: 7px;*/
}

input[type=checkbox]:checked::before {
  background: #3ea8df;
  color: rgba(255,255,255, 0.85) !important;
  border: 1px solid #3ea8df;
  border-radius: 4px;
}

.serve1, .serve2 {
  left: 8.5vw;
  position: absolute;
  font-size: 1.6vh;
  color: #b6afaf;
  text-align: left;
}

.serve1 {
  width: 74vw;
}

.serve2 {
  width: 60vw;
}

input {
  font-size: 1.8vh;
  border: none;
  /* top: 1vh; */
  padding: 0;
  position: absolute;
  left: 3vw;
}

</style>