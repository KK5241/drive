<template>
  <div class="app-container">
    <LayoutHeader></LayoutHeader>
    <TopNav></TopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import LayoutHeader from '@/views/LayoutHeader.vue';
import TopNav from '@/views/TopNav.vue';
export default {
  name:'app',
  components:{
    LayoutHeader,
    TopNav,
  }
}
</script>

<style lang="less" scoped>
.app-container {
  overflow: hidden;
}
.aa {
  height: 1000px;
}
</style>