<template>
  <!-- 顶部 -->
  <div class="layout-header-container container">
    <!-- LOGO -->
    <div class="main-logo">
      <a href="https://www.jiakaobaodian.com">
        <img src="@/assets/logo.png" alt="LOGO" />
      </a>
    </div>
    <!-- 搜索框 -->
    <div class="main-search">
      <form action="#">
        <input type="text" placeholder="请输入关键字" class="search-input" />
        <button type="submit" class="search-button">搜 索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.layout-header-container {
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  .main-search {
    vertical-align: bottom;
    .search-input {
      box-sizing: border-box;
      height: 40px;
      width: 248px;
      font-size: 14px;
      border: 1px solid @grey;
      outline: none;
      &:focus {
        border: 1px solid @primary;
      }
    }
    .search-button {
      box-sizing: border-box;
      height: 40px;
      width: 50px;
      border: none;
      cursor: pointer;
      background-color: @grey;
    }
  }
}
</style>