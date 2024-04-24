<template>
  <div class="honor-container container">
    <div class="top">
      <hr />
      <div class="title">宝典荣誉</div>
    </div>
    <div class="details">
        <span>强大的驾考功能，优秀的用户体验，我们的愿景是学车无忧，轻松拿本</span>
    </div>
    <div class="content">
        <img :src="url" alt="">
    </div>
  </div>
</template>

<script>
import honor from '@/assets/honor.png';
export default {
    data(){
       return {
        url:honor
       }
    }
};
</script>

<style lang="less" scoped>
.honor-container {
  margin-top: 90px;
  text-align: center;
  hr {
    border: none;
    border-top: 1px dotted #e9e9e9;
  }
  .title {
    width: 400px;
    position: relative;
    margin: 0 auto;
    color: #333;
    background-color: white;
    top: -30px;
    font-size: 30px;
    text-align: center;
  }
  .details {
    position: relative;
    top:-5px;
    color: #666;
    font-size: 16px;
    margin-bottom:20px;
  }
}
</style>