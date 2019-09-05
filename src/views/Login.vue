<template>
  <div class="login">
    <img id="back" :src="back" alt />
    <el-card class="box" shadow="hover">
      <h4>欢迎使用管理系统</h4>
      <div class="test">
        <span class="left1">用户名</span>
        <el-input class="right1" v-model="username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        <span class="left2">密 码</span>
        <el-input
          class="right2"
          v-model="userpasswd"
          prefix-icon="el-icon-camera-solid"
          placeholder="密码"
          show-password
        ></el-input>
      </div>
      <div class="login-bottom">
        <el-button type="primary" @click="Login()">登录</el-button>
        <el-button type="text">忘记密码?</el-button>
      </div>
      <el-checkbox v-model="checked">七天内免登录</el-checkbox>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpasswd: "",
      radio: "",
      checked: "",
      back: "",
      backUrl: [
        "../../static/back1.jpg",
        "../../static/back2.jpg",
        "../../static/back3.jpg"
      ]
    };
  },
  mounted() {
    var i = 0;
    setInterval(() => {
      this.back = this.backUrl[i];
      i++;
      if (i == 2) {
        i = 0;
      }
    }, 3000);
  },
  methods: {
    Login() {
      let obj = {
        username: this.username,
        userpasswd: this.userpasswd
      };
      console.log(obj);
      this.$axios.post("/auth/user", obj).then(
        res => {
          if (res.data.success) {
            // console.log("abcdefg");
            sessionStorage.setItem("demo-token", res.data.token);
            this.$message({
              // 登录成功，显示提示语
              type: "success",
              message: "登录成功！",
              center: true,
              showClose: true
            });
            this.$router.push("/HomePage");
          } else {
            this.$message.error({
              message: res.data.info,
              center: true,
              showClose: true
            }); // 登录失败，显示提示语
            sessionStorage.setItem("demo-token", null); // 将token清空
          }
        },
        err => {
          this.$message.error({
            message: "请求错误！",
            center: true,
            showClose: true
          });
          sessionStorage.setItem("demo-token", null); // 将token清空
        }
      );
    }
  }
};
</script>

<style scoped>
#back {
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.login {
  margin-left: 35vw;
  margin-top: 20vh;
}
.test {
  display: grid;
  grid-template-columns: 60px 200px;
  grid-template-rows: auto;
  grid-column-gap: 60px;
  grid-row-gap: 30px;
  grid-template-areas:
    "left1 right1"
    "left2 right2";
}
.box {
  position: absolute;
  right: 50px;
  width: 30vw;
  height: 50vh;
}
.box h4 {
  text-align: center;
  margin-top: 1px;
}
.el-card span {
  margin-bottom: 5px;
}
.el-card .login-click {
  margin-top: 5px;
  margin-left: 20px;
}
.login-bottom {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
</style>