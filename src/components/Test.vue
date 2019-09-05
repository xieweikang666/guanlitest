<template>
  <div>
    <div id="swipe">
      <ul v-for="(imgList,index) in imgList" v-show="index===mark" name="img" :key="index">
        <li>
          <img :src="imgList" alt />
        </li>
      </ul>
      <div id="btns">
        <span v-for="(item,index) in imgList.length" :key="index" @click="changeImg(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: 0,
      imgList: [
        "../../static/swipePic/pic1.jpg",
        "../../static/swipePic/pic2.jpg",
        "../../static/swipePic/pic3.jpg",
        "../../static/swipePic/pic4.jpg"
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.autoPlay();
    }, 2000);
  },
  methods: {
    changeImg(i) {
      this.mark = i;
    },
    autoPlay() {
      this.mark++;
      if (this.mark == 4) {
        this.mark = 0;
        return;
      }
    }
  }
};
</script>

<style>
#swipe {
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
}
#swipe ul li {
  list-style: none;
}
#swipe img {
  position: absolute;
  z-index: 1;
  width: 400px;
  height: 300px;
}
#swipe #btns {
  position: absolute;
  z-index: 2;
  top: 270px;
  left: 150px;
  width: 150px;
  height: 50px;
}
#swipe #btns span {
  float: left;
  width: 15px;
  height: 15px;
  margin-left: 6px;
  background: rgb(238, 234, 234);
  border: 3px solid rgb(169, 212, 14);
  border-radius: 50%;
  cursor: pointer;
}
.active {
  color: red;
}
.img-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}
.img-leave-active {
  transform: translateX(-100%);
  transform: all 1s ease;
}
.img-enter {
  transform: translateX(100%);
}
.img-leave {
  transform: translateX(0);
}
</style>