<template>
  <div class="icon-container" :style="{'background-color':backgroundColor}">
    <i :style="{'background-image':`url(${iconUrl})`}"></i>
    <div class="content">
      <div class="title"><a href="#" :style="{'color':`${titleColor}`}">{{title}}</a></div>
      <div class="subtitle">{{subtitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    iconUrl:{
      type:String,
      require:true
    },
    title:{
      type:String,
      require:true
    },
    subtitle:{
      type:String,
      require:true
    },
    backgroundColor:{
      type:String,
      default:'transparent'
    },
    titleColor:{
      type:String,
      default:'#37b5f8'
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.icon-container {
  width: 240px;
  height: 70px;
  display: flex;
  align-items: center;
  i {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
  .content {
    margin-left: 5px;
    .subtitle {
      font-size: 14px;
      color: rgb(102,102,102);
    }
  }
}
</style>