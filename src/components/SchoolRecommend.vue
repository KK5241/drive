<template>
  <div class="school-recommend-container container">
    <div class="top">
      <hr />
      <div class="title">保定市驾校推荐</div>
    </div>
    <div class="schools">
      <SchoolDetails
        v-for="item in school"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :level="item.level"
        :comment="item.comment"
        :avatar="item.avatar"
        :icon="item.icon"
      ></SchoolDetails>
    </div>
    <div class="btn">
      <a href="#">查看更多</a>
    </div>
  </div>
</template>

<script>
import SchoolDetails from "./SchoolDetails.vue";
import level1 from "@/assets/level1.png";
import level2 from "@/assets/level2.png";
import avatar1 from "@/assets/Avatar1.jpg";
import avatar2 from "@/assets/Avatar2.jpg";
import avatar3 from "@/assets/Avatar3.jpg";
import avatar4 from "@/assets/Avatar4.jpg";
import icon from '@/assets/Icon10.png';
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      school: [
        {
          id: nanoid(),
          name: "恒通驾校",
          price: 1500,
          level: level1,
          avatar: avatar1,
          icon,
          comment:
            "环境好。教练态度很好。细心耐心。成功率高。教练诚实敬业。不骂人不忽悠人。好教练……找对教练很重要。什么驾校无关紧要。只要",
        },
        {
          id: nanoid(),
          name: "驰安驾校",
          price: 1500,
          level: level1,
          avatar: avatar2,
          icon,
          comment:
            "不错不错不错不错",
        },
        {
          id: nanoid(),
          name: "兴容驾校",
          price: 3670,
          level: level2,
          avatar: avatar3,
          icon,
          comment:
            "从报名到练车到考试全程有工作人员服务，",
        },
        {
          id: nanoid(),
          name: "驰宇驾校",
          price: 1500,
          level: level1,
          avatar: avatar4,
          icon,
          comment:
            "挺好的不错 教练人也挺好",
        },
      ],
    };
  },
  components: {
    SchoolDetails,
  },
};
</script>

<style lang="less" scoped>
.school-recommend-container {
  margin-top: 90px;
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
  .schools {
    height: 570px;
    display: flex;
    flex-wrap: wrap;
    flex:0 0 auto;
    justify-content:space-between
  }
  .btn {
    margin: 20px auto 0;
    width: 280px;
    text-align: center;
    height: 48px;
    border: 1px solid #e9e9e9;
    line-height: 48px;
    cursor: pointer;
    &:hover {
      border: 1px solid #37B5F8;
      a {
        color: #37B5F8;
      }
    }
    a{
      font-size: 16px;
      color: #999;
    }
  }
}
</style>