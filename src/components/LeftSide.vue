<template>
  <div>
    <h5>管理系统</h5>
    <el-menu default-active="$route.path" router @select="handleMenuSelect">
      <el-menu-item index="/Home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">数据管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">management</template>
          <el-menu-item index="/Excel">
            <i class="el-icon-s-grid"></i>
            <span slot="title">表格管理</span>
          </el-menu-item>
          <el-menu-item index="/Charts">
            <i class="el-icon-menu"></i>
            <span slot="title">图表管理</span>
          </el-menu-item>
          <el-menu-item index="/Forms">
            <i class="el-icon-s-data"></i>
            <span slot="title">表单管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/User">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/Test">
        <i class="el-icon-document"></i>
        <span slot="title">练习界面</span>
      </el-menu-item>
      <el-menu-item index="/Add">
        <i class="el-icon-document"></i>
        <span slot="title">地图</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breads: []
    };
  },
  methods: {
    handleMenuSelect(index, indexPath) {
      this.breads = indexPath;
    }
  }
};
</script>

<style>
</style>