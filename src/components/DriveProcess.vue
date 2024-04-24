<template>
  <div class="drive-process-container container">
    <div class="top">
      <hr />
      <div class="title">学车流程</div>
    </div>
    <p class="details">
      驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务
    </p>
    <div class="content">
      <processFi
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :details="item.details"
        :iconurl1="item.iconurl1"
        :iconurl2="item.iconurl2"
      ></processFi>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import processFi from "./ProcessFi.vue";
import icon11 from "@/assets/Icon11.png";
import icon11h from "@/assets/Icon11`.png";
import icon12 from "@/assets/Icon12.png";
import icon12h from "@/assets/Icon12`.png";
import icon13 from "@/assets/Icon13.png";
import icon13h from "@/assets/Icon13`.png";
import icon14 from "@/assets/Icon14.png";
import icon14h from "@/assets/Icon14`.png";
import icon15 from "@/assets/Icon15.png";
import icon15h from "@/assets/Icon15`.png";
import icon16 from "@/assets/Icon16.png";
import icon16h from "@/assets/Icon16`.png";
export default {
  data() {
    return {
      data: [
        {
          id: nanoid(),
          title: "找驾校",
          details: "口碑好的驾校",
          iconurl1: icon11,
          iconurl2: icon11h,
        },
        {
          id: nanoid(),
          title: "科目一",
          details: "驾驶员理论考试",
          iconurl1: icon12,
          iconurl2: icon12h,
        },
        {
          id: nanoid(),
          title: "科目二",
          details: "场地驾驶技能考试科目",
          iconurl1: icon13,
          iconurl2: icon13h,
        },
        {
          id: nanoid(),
          title: "科目三",
          details: "机动车驾驶人道路考试",
          iconurl1: icon14,
          iconurl2: icon14h,
        },
        {
          id: nanoid(),
          title: "科目四",
          details: "安全文明驾驶常识考试",
          iconurl1: icon15,
          iconurl2: icon15h,
        },
        {
          id: nanoid(),
          title: "拿本",
          details: "开心拿本，安全驾驶",
          iconurl1: icon16,
          iconurl2: icon16h,
        },
      ],
    };
  },
  components: {
    processFi,
  },
};
</script>

<style lang="less" scoped>
.drive-process-container {
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
    top: -15px;
    color: #666;
    margin-bottom: 20px;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
}
</style>