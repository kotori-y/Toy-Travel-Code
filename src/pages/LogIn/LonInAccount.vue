<template>
  <div class="account-container">
    <div class="phoneNumber">
      <img alt="" class="icon" src="../../assets/icon/mobile.svg">
      <input v-model="phone_number" placeholder="手机号" type="tel">
      <div class="split"></div>
      <div v-if="isSend" class="obtain" style="top: -2vh"> 请在{{ remain }}秒<br>后重试</div>
      <div v-else :class="{'obtain': true, 'active': phoneFilled}" @click.prevent="send"> 获取验证码</div>
      <div class="under-line"></div>
    </div>
    <div class="verify">
      <img alt="" class="icon" src="../../assets/icon/verify.svg">
      <input v-model="verify_code" placeholder="请输入验证码" type="tel">
      <div class="under-line"></div>
      <img alt="" class="icon cancel" src="../../assets/icon/cancel.svg" @click="clearCode">
    </div>
    <LogInTerms @isAgree="isAgree"></LogInTerms>
    <button :class="{'submit': true, 'active': ava}" @click.prevent="submit">登陆</button>
    <a class="intro" href="javascript:void(0);">行程卡使用说明</a>
    <FloatMention v-if="isFloat"></FloatMention>
  </div>
</template>

<script>
import axios from "axios"
import LogInTerms from "@/pages/LogIn/LogInTerms";
import FloatMention from "@/pages/LogIn/FloatMention";

export default {
  name: "LonInAccount",
  components: {FloatMention, LogInTerms},
  data() {
    return {
      phone_number: "",
      verify_code: "",
      isSend: false,
      isFloat: false,
      remain: 60,
      agreed: false,
      // avaSub: false
    }
  },
  methods: {
    submit() {
      if (!this.ava) {
        return
      }
      const form = {
        phone_number: parseInt(this.phone_number),
        verify_code: parseInt(this.verify_code)
      }
      axios({
        method: "post",
        url: "https://api.cbdd.me/verify",
        data: form
      }).then(resp => {
        if (resp.data) {
          localStorage.setItem("phoneNum", form.phone_number)
          this.$router.push({name: "home"})
        }
      }).catch(err => {
        alert(JSON.stringify(err))
      })
    },
    clearCode() {
      this.verify_code = ""
    },
    send() {
      this.isFloat = this.phoneFilled
      this.isSend = this.phoneFilled
    },
    isAgree(cond) {
      this.agreed = cond
    },
    isNumeric(str) {
      if (typeof str != "string") return false
      return !isNaN(str) &&
          !isNaN(parseFloat(str))
    }
  },
  watch: {
    phone_number(new_num, old_num) {
      if (!this.isNumeric(new_num) && new_num) {
        this.phone_number = old_num
        return;
      }
      if (new_num.length > 11) {
        this.phone_number = new_num.substr(0, 11)
      }
    },
    verify_code(new_num, old_num) {
      if (!this.isNumeric(new_num) && new_num) {
        this.verify_code = old_num
        return;
      }
      if (new_num.length > 6) {
        this.verify_code = new_num.substr(0, 6)
      }
    },
    isFloat(new_val, old_val) {
      if (new_val && !old_val) {
        this.floatTask = setTimeout(() => {
          this.isFloat = false
        }, 1000)
      }
    },
    isSend(new_val, old_val) {
      if (new_val && !old_val) {
        this.sendTask = setInterval(() => {
          this.remain--
          if (this.remain === 0) {
            this.isSend = false
            this.remain = 60
            clearInterval(this.sendTask)
          }
        }, 1000)
      }
    },
  },
  computed: {
    phoneFilled() {
      return this.phone_number &&
          this.phone_number.length === 11 &&
          /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(this.phone_number)
    },
    ava() {
      return this.agreed &&
          this.phone_number && this.phone_number.length === 11 &&
          this.verify_code && this.verify_code.length === 6
    },
  },
  beforeDestroy() {
    clearInterval(this.sendTask)
    clearTimeout(this.floatTask)
    console.log("go back!")
  }
}
</script>

<style scoped>

.account-container {
  background: white;
  height: 32vh;
  position: absolute;
  top: 22vh;
  border-radius: 15px;
  box-shadow: 1px 1px 30px #cbcaca;
  width: 84%;
  left: 8vw;
}

.phoneNumber {
  display: inline-block;
  left: 4vw;
  position: absolute;
  top: 4vh;
}

.verify {
  position: absolute;
  display: inline-block;
  left: 4vw;
  top: 11vh;
}

.icon {
  height: 1.7vh;
  top: 0;
  position: absolute;
}

.cancel {
  left: 68vw;
}

input {
  height: 2vh;
  font-size: 1.8vh;
  border: none;
  /* top: 1vh; */
  padding: 0;
  position: absolute;
  left: 6vw;
}

input:focus {
  outline: none;
  caret-color: #3939e3
}

.split {
  float: left;
  width: 1px;
  height: 2vh;
  background: #b6afaf;
  position: absolute;
  left: 52vw;
}

.under-line {
  width: 74vw;
  height: 1px;
  background: #b6afaf;
  position: absolute;
  left: 0;
  top: 3vh;
}

.obtain {
  font-size: 1.7vh;
  left: 53vw;
  position: absolute;
  width: 22vw;
  color: #b6afaf;
}

.obtain.active {
  color: rgb(91, 160, 233);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b6afaf;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #b6afaf;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #b6afaf;
}

.submit {
  background-color: rgb(119, 172, 249);
  border: none;
  color: white;
  padding: 1.1vh 34vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 2.1vh;
  left: 3vw;
  top: 21vh;
  position: absolute;
  border-radius: 12px;
}

.submit.active {
  background: rgb(53, 120, 246);
}

.submit:focus {
  outline: none;
}


a.intro {
  position: absolute;
  bottom: 2vh;
  right: 2vh;
  font-size: 1vh;
}

</style>