<template>
  <div class="know-test-container">
    <div class="title">
      <i :style="{ 'background-image': `url(${titleIcon})` }"></i>
      <a href="#">{{ title }}</a>
    </div>
    <div class="content">
      <IconFi
        v-for="item in Icons"
        :key="item.id"
        :iconUrl="item.iconUrl"
        :title="item.title"
        :subtitle="item.subtitle"
        backgroundColor="#fafafa"
        titleColor="#333"
      ></IconFi>
    </div>
    <div class="bottom">
        <a href="#">模拟考试</a>
    </div>
  </div>
</template>

<script>
import Icon5 from "@/assets/Icon5.png";
import Icon6 from "@/assets/Icon6.png";
import Icon7 from "@/assets/Icon7.png";
import Icon8 from "@/assets/Icon8.png";
import Icon9 from "@/assets/Icon9.png";
import IconFi from "@/components/IconFi.vue";
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      titleIcon: Icon5,
      Icons: [
        {
          id: nanoid(),
          title: "顺序练习",
          subtitle: "按照顺序练习做题",
          iconUrl: Icon6,
        },
        {
          id: nanoid(),
          title: "随机练习",
          subtitle: "按随机顺序做题",
          iconUrl: Icon7,
        },
        {
          id: nanoid(),
          title: "专项练习",
          subtitle: "分门别类重点突破",
          iconUrl: Icon8,
        },
        {
          id: nanoid(),
          title: "难题功克",
          subtitle: "准确把握考试难点",
          iconUrl: Icon9,
        },
      ],
    };
  },
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  components: {
    IconFi,
  },
};
</script>

<style lang="less" scoped>
.know-test-container {
  width: 580px;
  height: 371px;
  box-sizing: border-box;
  border: 0.8px solid #e9e9e9;
  .title {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center;
    }
    a {
      position: relative;
      top: -1px;
      font-size: 20px;
      color: #333;
    }
  }
  .content {
    height: 170px;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    justify-content: space-around;
    padding: 25px;
  }
  .bottom {
    margin: 0 auto;
    width: 300px;
    height: 46px;
    border-radius: 5px;
    text-align: center;
    line-height: 46px;
    background-color: #37b5f8;
    a {
        font-size: 20px;    
        color: white;
    }
  }
}
</style>