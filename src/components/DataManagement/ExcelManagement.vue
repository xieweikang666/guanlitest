<template>
  <div class="excel">
    <el-table v-loading="loading" :data="tableData" style="width: 100%" border>
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column label="操作">
        <el-button type="text" @click="dialogFormVisible = true">修改</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </el-table-column>
    </el-table>
    <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="时间>" :label-width="formLabelWidth" :placeholder="tableData.date">
          <el-input v-model="tableData.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名 >" :label-width="formLabelWidth">
          <el-input v-model="tableData.name"></el-input>
        </el-form-item>
        <el-form-item label="地点 >" :label-width="formLabelWidth">
          <el-select v-model="tableData.address" placeholder="选择地址">
            <el-option label="新疆" value="xinjiang"></el-option>
            <el-option label="厦门" value="xiamen"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="香港" value="xianggang"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      formLabelWidth: "80px",
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$axios
        .get("/user/getInfos")
        .then(res => {
          this.tableData = res.data.data;
          this.loading = false;
          console.log(this.tableData);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 30px;
}
</style>