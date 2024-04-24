<template>
  <div class="app-ad-container">
    <div class="content container">
      <div
        class="ad1"
        :style="{
          'background-image': `url(${ad1url})`,
          '--QR1': `url(${QR1})`,
        }"
      >
        <span>教练宝典APP</span>
        <div class="QR1"></div>
      </div>
      <div
        class="ad2"
        :style="{
          'background-image': `url(${ad2url})`,
          '--QR1': `url(${QR2})`,
        }"
      >
        <span>驾考宝典APP</span>
        <div class="QR2"></div>
      </div>
      <div
        class="ad3"
        :style="{
          'background-image': `url(${ad3url})`,
          '--QR1': `url(${QR3})`,
        }"
      >
        <span>买车宝典APP</span>
        <div class="QR3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import app1 from "@/assets/app1.png";
import QR1 from "@/assets/QR1.png";
import app2 from "@/assets/app2.png";
import app3 from "@/assets/app3.png";
import QR2 from "@/assets/QR2.png";
import QR3 from "@/assets/QR3.png";
export default {
  data() {
    return {
      ad1url: app1,
      QR1,
      ad2url: app2,
      QR2,
      ad3url: app3,
      QR3,
    };
  },
};
</script>

<style lang="less" scoped>
.app-ad-container {
  background-color: #f5f5f5;
  .content {
    margin-top: 70px;
    height: 560px;
    overflow: hidden;
    padding: 0 35px;
    display: flex;
    justify-content: space-between;
  }
  .ad1 {
    position: relative;
    text-align: center;
    font-size: 20px;
    color: #333;
    top: 110px;
    width: 300px;
    height: 500px;
    background-image: url();
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: 0.7s;
    &:hover {
      .QR1 {
        position: relative;
        width: 90%;
        height: 100%;
        top: 33px;
        left: 16px;
        background-image: var(--QR1);
        background-position: center;
        background-repeat: no-repeat;
      }
      top: 60px;
    }
  }
  .ad2 {
    position: relative;
    text-align: center;
    font-size: 20px;
    color: #333;
    top: 60px;
    width: 430px;
    height: 540px;
    background-image: url();
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: 0.7s;
    &:hover {
      .QR2 {
        position: relative;
        width: 90%;
        height: 100%;
        top: 50px;
        left: 16px;
        background-color: rgba(255, 255, 255, 0.5);
        background-image: var(--QR1);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 40%;
      }
      top: 20px;
    }
  }
  .ad3 {
    position: relative;
    text-align: center;
    font-size: 20px;
    color: #333;
    top: 180px;
    width: 265px;
    height: 428px;
    background-image: url();
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: 0.7s;
    &:hover {
      .QR3 {
        position: relative;
        width: 90%;
        height: 100%;
        top: 40px;
        left: 16px;
        background-image: var(--QR1);
        background-position: center;
        background-repeat: no-repeat;
      }
      top: 130px;
    }
  }
}
</style>