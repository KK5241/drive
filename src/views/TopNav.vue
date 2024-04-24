<template>
  <div class="top-nav-container">
    <ul class="container">
      <li
        v-for="item in titles"
        :key="item.id"
        class="title"
        :class="{ special: item.id === '7' }"
      >
          <router-link :to="item.path" exact-active-class="active"
            >{{ item.name }}
            <span class="triangle" v-if="item.child"></span
          ></router-link>
        <div class="subtitle" v-if="item.child">
          <ul>
            <li v-for="i in item.child" :key="i.id">
              <a href="#">{{ i.name }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        { id: "1", name: "首页", path: "/" },
        {
          id: "2",
          name: "模拟考试",
          child: [
            { id: "2001", name: "科目一" },
            { id: "2002", name: "科目二" },
            { id: "2003", name: "科目三" },
            { id: "2004", name: "科目四" },
          ],
          path: "/test",
        },
        {
          id: "3",
          name: "找驾校",
          child: [
            { id: "3001", name: "找驾校" },
            { id: "3002", name: "找教练" },
            { id: "3003", name: "找陪练" },
          ],
          path: "/school",
        },
        { id: "4", name: "驾考圈", path: "/circle" },
        { id: "5", name: "交通标志", path: "/sign" },
        { id: "6", name: "软件下载", path: "/load" },
        { id: "7", name: "驾考宝典企业版", path: "/edition" },
        { id: "8", name: "智慧驾校", path: "/smart" },
        {
          id: "9",
          name: "买新车",
          child: [
            { id: "9001", name: "买车网" },
            { id: "9002", name: "平行之家" },
          ],
          path: "/newCar",
        },
        { id: "10", name: "二手车", path: "/usedCar" },
      ],
    };
  },
  computed: {
    url() {
      return location.href;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.top-nav-container {
  width: 100%;
  height: 100%;
  background-color: @primary;
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    .title {
      width: 108px;
      height: 50px;
      font-size: 16px;
      flex-grow: 1;
      cursor: pointer;
      .nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        .subtitle {
          transform: scaleY(1);
        }
      }
      .subtitle {
        width: 116px;
        position: absolute;
        top: 50px;
        background-color: #ffffff;
        // box-shadow: -1px 1px 6px rgb(142, 140, 140);
        z-index: 99;
        transform: scaleY(0);
        transform-origin: center top;
        transition: 0.6s;
        li {
          width: 100%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-width: 0 0 1px;
          border-style: solid;
          border-color: transparent transparent @grey;
          a {
            color: gray;
            font-size: 14px;
            &:hover {
              color: @primary;
            }
          }
        }
      }
      &:hover {
        background-color: @lightPrimary;
      }
      a {
        display: inline-block;
        text-align: center;
        line-height: 50px;
        width: 100%;
        height: 100%;
        color: white;
      }
      .triangle {
        position: relative;
        top: 12px;
        vertical-align: middle;
        height: 0;
        width: 0;
        border-width: 6px 6px;
        border-bottom: 0px;
        border-style: solid;
        border-color: white transparent;
        margin-top: 5px;
        margin-left: 4px;
      }
    }
    .special {
      width: 148px;
    }
    .active {
      background-color: #258fc7;
    }
  }
}
</style>