<template>
  <div>
    <!-- 头部 -->
    <el-header>
      <add></add>
      <h2>welcome</h2>
      <User></User>
    </el-header>

    <!-- 侧边菜单 -->
    <el-container>
      <el-aside width="200px">
        <LeftSide></LeftSide>
      </el-aside>

      <!-- 主界面 -->
      <el-main>
        <!-- 面包屑 -->
        <TopBread></TopBread>
        <!-- 路由页面 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import LeftSide from "../components/LeftSide.vue";
import TopBread from "../components/TopBread.vue";
import User from "../components/User.vue";
import Add from "../components/Address.vue";
export default {
  components: {
    Home,
    LeftSide,
    TopBread,
    User,
    Add
  },
  data() {
    return {
      index: "",
      isShow: "0",
      breads: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleMenuSelect(index, indexPath) {
      this.breads = indexPath;
    },
    Change(num) {
      // console.log(num);
      this.isShow = num;
      console.log(this.isShow);
    }
  }
};
</script>

<style scoped>

.el-header {
  background: rgb(255, 208, 0);
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-table {
  margin-top: 20px;
}
</style>