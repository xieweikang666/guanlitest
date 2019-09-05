<template>
  <div class="userInfo">
    <el-dropdown>
      <img src="../../static/头像.png" alt />
      <em>
        <span>admin</span>
      </em>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/UserInfo">
          <el-dropdown-item icon="el-icon-s-order">个人资料</el-dropdown-item>
        </router-link>
        <el-dropdown-item icon="el-icon-help">修改密码</el-dropdown-item>
        <div @click="Logout()">
          <el-dropdown-item icon="el-icon-s-promotion" divided>注 销</el-dropdown-item>
        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
      console.log("hahahah");
      this.$message({
        showClose: true,
        message: "注销成功!",
        type: "warning",
        center: true
      }); // 登录失败，显示提示语
      sessionStorage.setItem("demo-token", null); // 将token清空
      this.$router.push("/Login");
    }
  }
};
</script>

<style>
.userInfo {
  float: right;
  position: relative;
  top: -40px;
}
.userInfo img {
  width: 40px;
  vertical-align: middle;
  border-radius: 40%;
  background: white;
}
.userInfo span {
  color: white;
  vertical-align: middle;
}
</style>