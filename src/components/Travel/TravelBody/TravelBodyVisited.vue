<template>
  <div class="visited">
    <p class="visited-title">您于前14天内到达或途经：</p>
    <div v-if="isLoading" class="loader"></div>
    <span v-else @click="getPosition()">
     {{ city }}
    </span>
  </div>
</template>

<script>
import axios from "axios"
import {getCookie, setCookie} from "../../../../public/scripts/script";

export default {
  name: "TravelBodyVisited",
  data() {
    return {
      city: "点击获取位置",
      isLoading: false
    }
  },
  mounted() {
    const _city = getCookie("currCity")
    if (_city) {
      this.city = _city
      return;
    }
    this.getPosition()
    this.$bus.$on("updatePosition", this.getPosition)
  },
  methods: {
    async coor2city(LAT, LON) {
      let that = this
      const AK = "BUxfI8hTtjSxnEAjvn1hL9GLTr1XpYgX"
      const SHA1 = "D9:CC:18:96:A5:EA:64:48:59:B4:1B:71:54:82:D1:3A:FC:C7:F4:8B"
      const PACKAGE = "com.travelCard.kotori"

      const URL = `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${AK}&output=json&coordtype=wgs84ll&location=${LAT},${LON}&mcode=${SHA1};${PACKAGE}`

      return await axios({
        method: "get",
        url: URL,
      }).then(resp => {
        let province = resp.data["result"]["addressComponent"]["province"]
        let _city = resp.data["result"]["addressComponent"]["city"]

        that.isLoading = false
        if (province !== _city) {
          _city = province.concat(_city)
        }
        return _city
      })
    },
    async checkCityRisk(city) {
      const url = "https://api.cbdd.me/risk/"
      const params = {city: city}

      return await axios({
        method: "get",
        url: url,
        params: params
      }).then(resp => resp.data)

    },
    getPosition() {
      let that = this
      that.isLoading = true

      async function onSuccess (position) {
        const data = {
          "lat": position.coords.latitude,
          "lon": position.coords.longitude
        }

        let city = await that.coor2city(data.lat, data.lon)
        const risk = await that.checkCityRisk(city)

        if (risk) {
          city = city.concat("*(注:*表示当前该城市存在中风险或高风险地区，并不代表用户实际到访过这些中高风险地区。)")
        }

        that.city = city
        setCookie("currCity", city)
      }


      function onError() {
        that.isLoading = false
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
  font-size: 1.5vh;
  font-weight: 400;
  color: rgb(178, 179, 184);
  text-align: left;
  display: inline-block;
}

span {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 1.5vh;
  font-weight: bolder;
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
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>