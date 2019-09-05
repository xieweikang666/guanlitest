<template>
  <div>
    <h3>首页</h3>
    <div id="triangle1"></div>
    <div id="triangle2"></div>

    <div class="todo">
      <el-tabs v-model="activeName">
        <el-tab-pane label="要做的事情" name="first">
          <el-input
            type="textarea"
            :rows="1"
            placeholder="请输入内容"
            v-model="todoThing"
            style="width:20vw;"
          ></el-input>
          <el-button size="small" type="primary" @click="addTodos()">添加</el-button>

          <el-table :data="todoList" stripe style="width:100%">
            <el-table-column prop="todoId" label="编号" width="100"></el-table-column>
            <el-table-column prop="todoContent" label="内容" width="200"></el-table-column>
            <el-table-column label="Done?" width="80">
              <el-button type="danger" size="mini" @click="addTodos(todoNum)">yes</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="已完成的事务" name="second">
          <el-table :data="todoList" stripe style="width:100%">
            <el-table-column prop="todoNum" label="编号" width="100"></el-table-column>
            <el-table-column prop="todoContent" label="内容" width="200"></el-table-column>
            <el-table-column label="Done?" width="80">
              <el-button type="text" size="mini">取消</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="imgShow">
      <img id="cuteImg" src="../../static/cutePic/cute1.png" @click="changeImg" alt />
    </div>
    <div id="demo1">
      <el-button @click="isShow=!isShow">click me!</el-button>
      <transition name="fade">
        <h2 v-if="isShow">shetunxiang~~~</h2>
      </transition>
    </div>
    <div id="demo2">
      <h2 id="m" @click="changeText">{{testMsg}}</h2>
    </div>
    <!-- 使用animated 动画特效 1.需要安装animate.css 2.在style里面引入 3.在组件外套一层transition -->
    <div id="demo3">
      <button @click="show = !show">Toggle render</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated zoomInRight"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="demo5">
      <transition name="fade" mode="out-in">
        <el-button v-if="show" @click="show=!show">on</el-button>
        <el-button v-else @click="show=!show">off</el-button>
      </transition>
    </div>

    <div id="swipe">
      <div id="imgList" style="left:-400px;">
        <img src="../../static/swipePic/pic1.jpg" alt />
        <img src="../../static/swipePic/pic2.jpg" alt />
        <img src="../../static/swipePic/pic3.jpg" alt />
        <img src="../../static/swipePic/pic4.jpg" alt />
      </div>
      <div id="btns">
        <span index="1" class="on"></span>
        <span index="2"></span>
        <span index="3"></span>
        <span index="4"></span>
      </div>
      <span @click="imgChange(-400)" id="prev" class="arrow">&lt;</span>
      <span @click="imgChange(400)" id="next" class="arrow">&gt;</span>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  data() {
    return {
      todoId: "xwk",
      timer: "",
      index: 1,
      todoThing: "",
      todoList: [],
      i: 1,
      activeName: "first",
      isShow: true,
      show: true,
      docState: "",
      testMsg: "originNum"
    };
  },
  mounted() {
    this.imgPlay();
  },
  methods: {
    addTodos() {
      let obj = {
        todo_id: this.todoId,
        user_id: "xwk",
        content: this.todoThing,
        status: false
      };
      console.log(obj);
      this.$axios.post("api/todolist", obj).then(
        res => {
          if (res.status == 200) {
            this.$message({
              type: "success",
              message: "创建成功！ :)"
            });
          } else {
            this.$message.error("创建失败！ :(");
          }
          this.getTodoList();
        },
        err => {
          this.$message.error("创建失败！");
          console.log(err);
        }
      );
      this.todolist = "";
    },
    getTodoList() {
      this.$axios.get("/api/todolist/" + this.id).then(
        res => {
          if (res.status == 200) {
            this.todolist = res.data;
          } else {
            this.$message.error("获取列表失败！");
          }
        },
        err => {
          this.$message.error(":( 获取列表失败了哦 ");
          console.log(err);
        }
      );
    },
    // 增加和删除事务👇
    // addContent() {
    //   let arr = {
    //     todoNum: this.i,
    //     todoContent: this.todoThing
    //   };
    //   this.i++;
    //   this.todoList.unshift(arr);
    // },
    // // 👇 有问题
    // doneThing(sign) {
    //   this.todoList.shift(sign, 1);
    // },
    changeImg() {
      //实现点击图片切换👇

      // 三目运算
      var cuteImg = document.getElementById("cuteImg");
      var flag =
        cuteImg.getAttribute("src", 2) == "../../static/cutePic/cute1.png";
      cuteImg.src = flag
        ? "../../static/cutePic/cute2.png"
        : "../../static/cutePic/cute1.png";

      //if判断
      // if (cuteImg.getAttribute("src", 2) == "../../static/cutePic/cute1.png") {
      //   cuteImg.src = "../../static/cutePic/cute2.png";
      // } else {
      //   cuteImg.src = "../../static/cutePic/cute1.png";
      // }
    },
    changeText() {
      let _this = this;
      this.testMsg = "修改后的文本";
      _this.$nextTick(() => {
        let domText = document.getElementById("m").innerText;
        console.log(domText);
        if (domText === "originNum") {
          console.log("文本data被修改后dom内容没立即更新");
        } else {
          console.log("文本data被修改后dom内容被马上更新了");
        }
      });
    },
    imgChange(offset) {
      var list = document.getElementById("imgList");
      var newMove = parseInt(list.style.left) + offset;
      list.style.left = newMove + "px";
      // if (offset < 0) {
      //   index -= 1;
      //   if (this.index < 1) {
      //     index = 4;
      //   }
      // } else {
      //   index += 1;
      //   if (offset > 4) {
      //     index = 1;
      //   }
      // }
      if (newMove < -1200) {
        list.style.left = 0 + "px";
      }
      if (newMove > 0) {
        list.style.left = -1200 + "px";
      }
    },
    btnChange() {
      var btns = document.getElementById("btns").getElementsByTagName("span");
      for (var i = 0; i < btns.length; i++) {
        if ((btns[i].className = "on")) {
          btns[i].className = "";
        }
        btns[i - 1].className = "on";
      }
    },
    imgPlay() {
      this.timer = setInterval(() => {
        this.imgChange(400);
      }, 2000);
    },
    imgStop() {
      window.clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
@import "../../node_modules/animate.css/animate.css";
#triangle1 {
  width: 0px;
  /* 如果把width设置成100 则为梯形 */
  height: 0px;
  border: 50px solid;
   border-width: 0px 50px 50px 50px;
  border-color: transparent transparent skyblue transparent;
}
#triangle2 {
  margin-top: 10px;
  width: 100px;
  /* 如果把width设置成100 则为梯形 */
  height: 0px;
  border: 50px solid;
   border-width: 0px 50px 50px 50px;
  border-color: transparent transparent skyblue transparent;
}
.todo {
  width: 30vw;
  height: 20vh;
}
#swipe {
  position: relative;
  width: 400px;
  height: 300px;
  background: red;
  border: 4px solid #333;
  overflow: hidden;
}
#imgList {
  position: absolute;
  z-index: 1;
  width: auto;
  height: 300px;
}
#imgList img {
  float: left;
  width: 400px;
  height: 300px;
}
#btns {
  position: absolute;
  left: 150px;
  bottom: 20px;
  z-index: 2;
  height: 10px;
  width: 150px;
}
#btns span {
  float: left;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border: 2px solid skyblue;
  border-radius: 50%;
  background: gray;
  cursor: pointer;
}
#btns .on {
  background: orange;
}
.arrow {
  position: absolute;
  z-index: 2;
  top: 130px;
  display: none;
  width: 40px;
  height: 40px;
  font-size: 36px;
  font-weight: bold;
  line-height: 39px;
  text-align: center;
  color: aliceblue;
  background-color: rgba(1, 1, 1, 0.6);
  cursor: pointer;
}
.arrow :hover {
  background: lightgray;
}
#swipe:hover .arrow {
  display: block;
}
#prev {
  left: 20px;
}
#next {
  right: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>