<template>
  <div>
    <h2>图表</h2>
    <div id="chart1"></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      loading: true,
      namedata: [],
      numdata: []
    };
  },
  mounted() {
    this.getData();
    this.drawChart();
  },
  methods: {
    getData() {
      let _this = this;
      this.$axios.get("/user/getChart").then(res => {
        for (let obj of res.data.data) {
          _this.namedata.push(obj.name);
          _this.numdata.push(obj.num);
        }
      });
    },
    drawChart() {
      let chart1 = this.$echarts.init(document.getElementById("chart1"));
      //加载动画
      chart1.showLoading();
      // 获取数据
      setTimeout(() => {
        chart1.setOption({
          title: { text: "图表管理 " },
          tooltip: {},
          xAxis: {
            data: this.namedata
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: this.numdata
            }
          ]
        });
        chart1.hideLoading();
      }, 1000);
    }
  }
};
</script>

<style>
#chart1 {
  margin-top: 20px;
  width: 70vw;
  height: 50vh;
}
</style>