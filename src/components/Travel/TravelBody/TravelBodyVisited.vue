<template>
  <div class="visited">
    <p class="visited-title">您于前14天内到达或途经：</p>
    <div v-if="isLoading" class="loader"></div>
    <ul v-if="!isLoading">
      <li @click="getPosition()">{{ city }}</li>
    </ul>


  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "TravelBodyVisited",
  data() {
    return {
      city: "点击获取位置",
      isLoading: false
    }
  },
  methods: {
    getPosition() {
      let that = this
      that.isLoading = true

      const onSuccess = function (position) {
        const data = {
          "lat": position.coords.latitude,
          "lon": position.coords.longitude
        }

        axios({
          method: "get",
          url: `https://nominatim.openstreetmap.org/reverse?format=jsonv2`,
          params: data,
        }).then(resp => {
          let _city = resp.data.address["state_district"]
          if (!_city) {
            _city = resp.data.address["state"]
          }

          that.isLoading = false
          that.city = _city
        })
      };

      function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
      }

      const options = {
        enableHighAccuracy: true,  // 是否使用 GPS
        maximumAge: 30000,         // 缓存时间
        timeout: 27000,            // 超时时间
        coorType: 'bd09ll'         // 默认是 gcj02，可填 bd09ll 以获取百度经纬度用于访问百度 API
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }
  },
}
</script>

<style scoped>

.visited {
  width: 93%;
  position: absolute;
  top: 29vh;
  left: 3vw;
  text-align: left;
}

.visited-title {
  margin: 0;
  font-size: 1.8vh;
  font-weight: 400;
  color: rgb(178,179,184);
  text-align: left;
  display: inline-block;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 1.8vh;
  font-weight: bolder;
  display: inline-block;
}

.loader {
  border: 0.5vh solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.5vh solid #3498db;
  width: 1vh;
  height: 1vh;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  display: inline-block;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>