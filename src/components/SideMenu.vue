<template>
  <div class="side-menu-container">
    <div class="title">学车流程</div>
    <IconFi
      v-for="item in Icons"
      :key="item.id"
      :iconUrl="item.iconUrl"
      :title="item.title"
      :subtitle="item.subtitle"
    ></IconFi>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import IconFi from "./IconFi.vue";
import Icon1 from "@/assets/Icon1.png";
import Icon2 from "@/assets/Icon2.png";
import Icon3 from "@/assets/Icon3.png";
import Icon4 from "@/assets/Icon4.png";
export default {
  data() {
    return {
      Icons: [
        {
          id: nanoid(),
          title: "科目一",
          subtitle: "2024新题库",
          iconUrl: Icon1,
        },
        {
          id: nanoid(),
          title: "科目二",
          subtitle: "精选视频，详解考点",
          iconUrl: Icon2,
        },
        {
          id: nanoid(),
          title: "科目三",
          subtitle: "全方位讲解，攻克难点",
          iconUrl: Icon3,
        },
        {
          id: nanoid(),
          title: "科目四",
          subtitle: "2024新题库",
          iconUrl: Icon4,
        },
      ],
    };
  },
  components: {
    IconFi,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.side-menu-container {
  position: absolute;
  top: 24px;
  box-sizing: border-box;
  width: 280px;
  height: 336px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0 20px;
  .title {
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px dotted rgb(203, 201, 201);
  }
}
</style>