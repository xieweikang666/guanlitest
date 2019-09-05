<template>
  <div>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>admin</span>
        <el-button
          id="changeUserinfo"
          style="float:right;padding:3px 0"
          type="text"
          @click="updateInfo()"
        >修改资料</el-button>
      </div>

      <div class="info">
        <span>姓 名</span>
        <el-input type="text" :disabled="changeInfo" v-model="name1" maxlength="10" show-word-limit></el-input>
        <span>出生地</span>
        <el-input type="text" :disabled="changeInfo" v-model="address1"></el-input>
        <span>备 注</span>
        <el-input type="text" :disabled="changeInfo" v-model="note"></el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name1: "蛇吞象",
      address1: "福建省莆田市荔城区镇海街道办事处",
      note: "where there is a will , there is a way",
      changeInfo: true
    };
  },
  methods: {
    updateInfo() {
      // var changeUserinfo = document.getElementById("changeUserinfo").innerText;
      console.log(changeUserinfo);
      if (this.changeInfo == true) {
        document.getElementById("changeUserinfo").innerText = "保存";
        this.changeInfo = false;
      } else {
        document.getElementById("changeUserinfo").innerText = "修改资料";
        this.changeInfo = true;
      }
    }
  }
};
</script>

<style scoped>
.el-card {
  margin-top: 25px;
  width: 400px;
}
/* .info {
  display: flex;
  align-items: center;
  justify-content: space-around
} */
.info span {
  display: inline-block;
  width: 80px;
  text-align: right;
}
.info .el-input {
  width: 250px;
  margin-bottom: 15px;
  margin-left: 10px;
}

.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>