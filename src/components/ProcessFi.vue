<template>
  <div class="process-container">
    <i
      :style="{
        '--img-url2': `url(${iconurl1})`,
        '--img-url1': `url(${iconurl2})`
      }"
    ></i>
    <a href="#">
      <div class="title">{{ title }}</div>
      <div class="details">{{ details }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    details: {
      type: String,
      require: true,
    },
    iconurl1: {
      type: String,
      require: true,
    },
    iconurl2: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.process-container {
  cursor: pointer;
  &:hover {
    i {
      background-image: var(--img-url1);
    }
    .title {
      color: @primary;
    }
  }
  i {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: var(--img-url2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .title {
    margin-top: 20px;
    font-size: 24px;
  }
  .details {
    margin: 10px 0;
    font-size: 13px;
    color: #999;
  }
}
</style>