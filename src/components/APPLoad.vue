<template>
  <div class="app-load-container container">
    <div class="left" :style="{ 'background-image': `url(${QR2})` }">
      <div class="content">
        <div class="title">驾考宝典APP下载</div>
        <div class="subtitle">考驾照 用宝典</div>
      </div>
    </div>
    <div class="right" :style="{ 'background-image': `url(${QR4})` }">
      <div class="content">
        <div class="title">驾考宝典微信小程序</div>
        <div class="subtitle">无需下载，驾考做题更方便！</div>
      </div>
    </div>
  </div>
</template>

<script>
import QR2 from "@/assets/QR2.png";
import QR4 from "@/assets/QR4.jpg";
export default {
  data() {
    return {
      QR2,
      QR4,
    };
  },
};
</script>

<style lang="less" scoped>
.app-load-container {
  margin-top: 60px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    flex-grow: 1;
    border-right: 1px solid #e9e9e9;
    background-position: 400px center;
    background-size: 20% auto;
    background-repeat: no-repeat;
    .content {
        box-sizing: border-box;
        margin: 40px 80px;
    }
    .title {
      font-size: 20px;
      color: #333;
    }
    .subtitle {
      font-size: 14px;
      color: #999;
    }
  }
  .right {
    flex-grow: 1;
    background-position: 400px center;
    background-size: 20% auto;
    background-repeat: no-repeat;
    .content {
        margin: 40px 80px;
    }
    .title {
      font-size: 20px;
      flex-grow: #333;
    }
    .subtitle {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>