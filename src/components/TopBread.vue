<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        separator="/"
        v-for="(item,index) in breadList"
        :key="index"
        :to="{path: item.path}"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: ""
    };
  },
  created() {
    this.getBread();
  },
  methods: {
    getBread() {
      this.breadList = this.$route.matched;
      this.$route.matched.forEach((item, index) => {
        //先判断父级路由是否是空字符串或者meta是否为首页，直接复写路径到根路径
        item.meta.CName === "HomePage"
          ? (item.path = "/")
          : this.$route.path === item.path;
      });
    }
  },
  watch: {
    $route() {
      this.getBread();
    }
  }
};
</script>

<style>
</style>