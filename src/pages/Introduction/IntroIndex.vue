<template>
  <div>
    <SubpageMainTitle main-title="使用指南"/>
    <IntroHeader/>
    <IntroBody/>
    <div class="intro-principle">
      <p class="title-words"> 行程卡2.0的工作原理 </p>
      <IntroCard imgUrl="https://xc.caict.ac.cn/imgApp/yd-img_01.png" num="01."
                 words="下载并安装通行行程卡APP"/>
      <IntroCard imgUrl="https://xc.caict.ac.cn/imgApp/yd-img_02.png" num="02."
                 words="当进入人员密集或流动性较大的场所时登录通信行程卡APP并按提示开启蓝牙"/>
      <IntroCard imgUrl="https://xc.caict.ac.cn/imgApp/yd-img_03.png" num="03."
                 words="如果近距离接触的双方都在使用行程卡服务，您与对方的手机将通过蓝牙交互记录下接触事件，接触的时间和距离将加密保存在各自手机中"/>
      <IntroCard imgUrl="https://xc.caict.ac.cn/imgApp/yd-img_04.png" num="04."
                 words="接触记录将在各自的手机中加密存储，如14天之内接触双方并无感染新冠肺炎，数据将自动清除"/>
      <IntroCard imgUrl="https://xc.caict.ac.cn/imgApp/yd-img_05.png" num="05."
                 words="如果用户被诊断为新冠肺炎确诊/疑似患者，在经患者同意后，他的加密ID将上传至服务端。您的手机会定期从服务端下载确诊/疑似患者的加密ID，并与手机中存储的接触记录进行比对，如果您的接触列表中有确诊/疑似患者，将在第一时间收到APP和短信提醒"/>
    </div>
    <IntroScense/>
    <IntroReason/>
    <div class="intro-bg">
      <img src="../../assets/introBCK.png" alt="">
    </div>
    <AppDownloading/>
    <Service :caift="caift" :telegram="telegram" :mobile="mobile" :unicom="unicom"/>
  </div>
</template>

<script>
import SubpageMainTitle from "@/components/SubpageMainTitle";
import IntroCard from "@/pages/Introduction/IntroCard";
import IntroScense from "@/pages/Introduction/IntroScense";
import IntroHeader from "@/pages/Introduction/IntroHeader";
import IntroBody from "@/pages/Introduction/IntroBody";
import IntroReason from "@/pages/Introduction/IntroReason";
import Service from "@/components/Footer/Service";
import AppDownloading from "@/pages/Introduction/appDownloading";

export default {
  name: "IntroIndex",
  components: {AppDownloading, Service, IntroReason, IntroBody, IntroHeader, IntroScense, IntroCard, SubpageMainTitle},
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background: white')
  },
  data() {
    return {
      caift: "caift2.png",
      mobile: "mobile2.png",
      telegram: "telegram2.png",
      unicom: "unicom2.png",
    }
  }
}
</script>

<style scoped>

.intro-principle {
  background-color: #f5f5f5;
  position: relative;
  top: 5vh;
}

.intro-principle .title-words {
  color: black;
  left: 0;
  /* display: inline-block; */
  position: relative;
  top: 7vh;
  width: 100vw;
  font-size: 3.5vh;
}


.intro-bg {
  position: relative;
  width: 100vw;
  top: 9vh;
}


.intro-bg img {
  width: 70vw;
}


/deep/ .service-container {
  position: relative;
  top: 12vh;
  width: 100vw;
  height: 10vh;
  background: #f5f5f5;
  left: 0;
}

/deep/ .service-container img {
  position: relative;
  top: 3vh;
}

/deep/ .app-downloading {
  position: relative;
  top: 13vh;
   left: 0;
  height: 11vh;
}

/deep/ .app-downloading img {
  width: 35vw;
}


</style>