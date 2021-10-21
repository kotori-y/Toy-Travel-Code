<template>
  <div class="floatWin">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "FloatMention",
  props: {
    msg: {
      type: String,
      default: "短信发送中，注意查收"
    }
  }
}
</script>

<style scoped>

.floatWin {
  text-align: center;
  bottom: -1vh;
  position: absolute;
  left: 20vw;
  width: 44vw;
  height: 5vh;
  font-size: 1.7vh;
  background: rgb(245,245,245);
  vertical-align: middle;
  line-height: 5vh;
  border-radius: 10px;
}

</style>