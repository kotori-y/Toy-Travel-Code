<template>
  <div>
    <div class="query-exit"/>
    <button @click.prevent="quit" id="exit">退出登陆</button>
    <button @click.prevent="cancel" id="cancel">取消</button>
  </div>

</template>

<script>
export default {
  name: "ExitQuery",
  methods: {
    quit() {
      this.$bus.$emit("quit")
    },
    cancel() {
      this.$emit("closeQuery")
    }
  }
}
</script>

<style scoped>

.query-exit {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background: black;
  opacity: 0.4;
}

#exit, #cancel {
  background-color: white;
  border: none;
  padding: 1.1vh 34vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 2.6vh;
  left: 1vw;
  /* top: 25vh; */
  position: absolute;
  border-radius: 12px;
  z-index: 5;
  top: 86vh;
  width: 98%;
}

#exit {
  color: red;
  top: 86vh;
}

#cancel {
  color: black;
  top: 93vh;
}

</style>