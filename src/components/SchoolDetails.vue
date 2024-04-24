<template>
  <div class="school-details-container">
    <div class="top">
      <div class="left">
        <span class="school-name">{{name}}</span>
        <i :style="{'background-image': `url(${level})`}"></i>
        <div class="content">
          <span :style="{'background-image': `url(${icon})`}">口碑好</span>
          <span :style="{'background-image': `url(${icon})`}">规模大</span>
          <span :style="{'background-image': `url(${icon})`}">拿本快</span>
          <span :style="{'background-image': `url(${icon})`}">包接送</span>
        </div>
      </div>
      <div class="right">
        <span class="price">
          ￥{{price}}
        </span>
        <button>学车报名</button>
      </div>
    </div>
    <div class="bottom">
      <img :src='avatar'>
      <span>{{comment}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      require:true
    },
    level:{
      type:String,
      require:true
    },
    price:{
      type:Number,
      require:true
    },
    avatar:{
      type:String,
      require:true
    },
    comment:{
      type:String,
      require:true
    },
    icon:{
      type:String,
      require:true
    }
  }
};
</script>

<style lang="less" scoped>
.school-details-container {
  height: 255px;
  width: 585px;
  padding: 40px 30px;
  box-sizing: border-box;
  border: 1px solid #e9e9e9;
  .top {
    display: flex;
    .left {
      width: 305px;
      height: 61px;
      border-right: 1px solid #e9e9e9;
      .school-name {
        font-size: 22px;
        color: #666;
      }
      i {
        position: relative;
        top: 1px;
        margin-left: 10px;
        display: inline-block;
        width: 90px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80% auto;
      }
      .content {
        margin-top: 10px;
        span {
          display: inline-block;
          color: #666;
          font-size: 14px;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 20px;
          margin-right: 10px;
        }
      }
    }
    .right {
      margin-left: 13px;
      align-self: center;
      .price {
        color: #EE4653;
        font-size: 30px;
      }
      button {
        position: relative;
        width: 80px;
        line-height: 28px;
        top:-7px;
        left: 14px;
        border-radius: 4px;
        border: 1px solid #e9e9e9;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
  .bottom {
    height: 40px;
    padding:20px;
    margin-top: 30px;
    background-color: #FAFAFA;
    display: flex;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      position: relative;
      top:1px;
      margin-left: 18px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>