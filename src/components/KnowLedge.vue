<template>
  <div class="know-ledge-container container">
    <div class="top">
      <hr />
      <div class="title">保定市2024小车理论考试</div>
    </div>
    <div class="test">
      <div class="first-test">
        <KnowTest title="科目一交规"></KnowTest>
      </div>
      <div class="last-test">
        <KnowTest title="科目四安全文明驾驶"></KnowTest>
      </div>
    </div>
  </div>
</template>

<script>
import KnowTest from './KnowTest.vue';
export default {
  components:{
    KnowTest
  }
};
</script>

<style lang="less" scoped>
.know-ledge-container {
  margin-top: 90px;
  hr {
    border: none;
    border-top: 1px dotted #e9e9e9;
  }
  .title {
    width: 400px;
    position: relative;
    margin: 0 auto;
    color:#333;
    background-color: white;
    top:-30px;
    font-size: 30px;
    text-align: center;
  }
  .test {
    display: flex;
    justify-content: space-between;
  }
}
</style>