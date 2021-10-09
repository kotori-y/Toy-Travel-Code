<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      transitionName: ""
    }
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.index > from.meta.index
          ? "pageIn"
          : "pageOut"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  height: 100%;
  position: relative;
}

@keyframes pageInAnime {
  0% {
    transform: translateY(100vh);
  }

  25% {
    transform: translateY(75vh);
  }

  50% {
    transform: translateY(50vh);
  }

  75% {
    transform: translateY(25vh);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes pageOutAnime {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(25vh);
  }

  50% {
    transform: translateY(50vh);
  }

  75% {
    transform: translateY(75vh);
  }

  100% {
    transform: translateY(100vh);
  }
}

.pageIn-enter-active {
  animation: pageInAnime 300ms linear;
}


.pageOut-enter-active {
  animation: pageOutAnime 150ms linear;
}

</style>
