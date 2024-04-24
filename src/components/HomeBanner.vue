<template>
  <div
    class="home-banner-container"
    @mouseenter="clearTimer"
    @mouseleave="addTimer"
  >
    <ul class="main-pictures" ref="container">
      <li
        v-for="item in pictures"
        :key="item.id"
        :style="{
          left: `-${leftWidth}px`,
          transition: seamless ? '0.4s' : 'none',
        }"
        ref="picture"
      >
        <div
          class="picture"
          :style="{ 'background-image': 'url(' + item.src + ')' }"
        ></div>
      </li>
    </ul>
    <ul class="spot">
      <li
        v-for="i in pictures.length - 1"
        :key="i"
        :class="{ active: index == i }"
        @click="changePic(i)"
      ></li>
    </ul>
    <div class="container">
      <SideMenu></SideMenu>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import banner1 from "@/assets/home_banner_new1.jpg";
import banner2 from "@/assets/home_banner_new2.jpg";
import banner3 from "@/assets/home_banner_new3.jpg";
import banner4 from "@/assets/home_banner_new4.jpg";
import SideMenu from "./SideMenu.vue";
export default {
  name: "HomeBanner",
  data() {
    return {
      index: 1,
      width: 0,
      flag: false,
      seamless: false,
      pictures: [
        {
          id: nanoid(),
          src: banner4,
        },
        {
          id: nanoid(),
          src: banner1,
        },
        {
          id: nanoid(),
          src: banner2,
        },
        {
          id: nanoid(),
          src: banner3,
        },
        {
          id: nanoid(),
          src: banner4,
        },
      ],
    };
  },
  computed: {
    //计算应该左移多少个像素
    leftWidth() {
      return this.index * this.width;
    },
  },
  mounted() {
    this.width = this.$refs.container.clientWidth;
    //窗口发生变化后需要重新计算容器的大小 保证正确的移动尺寸
    window.addEventListener("resize", this.handleWidth);
    this.timer = setInterval(() => {
      //第一次进入页面时再第1张图片之后 开启过渡效果
      if (this.index === 1) {
        this.seamless = true;
      }
      this.index++;
      /*无缝轮播图  关键点：判断是不是到最后一张图片 
        是的话就先将图片跳转到第0张图片（无过渡） 再跳转到第1张图片（有过渡）
      */
      if (this.index === this.pictures.length) {
        this.seamless = false;
        this.index = 0;
        /*一定注意这里要加一个nextTick()，vue中的DOM更新并不是和数据同步生效的
          也就是说如果不加nextTick()定时器只会直接跳转到第1张不会先跳转到第0张
        */
        this.$nextTick(() => {
          this.$refs.container.clientWidth;
          this.seamless = true;
          this.index = 1;
        });
      }
    }, 2000);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWidth);
    clearInterval(this.timer);
  },
  methods: {
    handleWidth() {
      this.width = this.$refs.container.clientWidth;
      this.seamless = false;
      clearInterval(this.timer);
      this.timer = null
      setTimeout(() => {
        this.seamless = true;
        this.addTimer();
      },0);
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null
    },
    addTimer() {
      if(this.timer) return 
      this.timer = setInterval(() => {
        if (this.index === 1) {
          this.seamless = true;
        }
        this.index++;
        if (this.index >= this.pictures.length) {
          this.seamless = false;
          this.index = 0;
          this.$nextTick(() => {
            this.$refs.container.clientWidth;
            this.seamless = true;
            this.index = 1;
          });
        }
      }, 2000);
    },
    changePic(i) {
      this.seamless = true;
      this.index = i;
    },
  },
  components: {
    SideMenu,
  },
};
</script>

<style lang="less" scoped>
.home-banner-container {
  position: relative;
  .main-pictures {
    display: flex;
    width: 100%;
    li {
      position: relative;
      width: 100%;
      flex: 0 0 auto;
      .picture {
        width: 100%;
        height: 380px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
      }
    }
  }
  .spot {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    li {
      cursor: pointer;
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin-left: 10px;
      background-color: rgba(95, 94, 94, 0.4);
      &.active {
        background-color: #007aff;
      }
    }
  }
}
</style>