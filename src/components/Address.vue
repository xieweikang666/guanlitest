<template>
  <div class="address">
    <i class="el-icon-s-home"></i>
    <span>{{curAddress}}</span>
  </div>
</template>

<script>
export default {
  created() {
    this.getLocation();
  },
  computed: {
    curAddress() {
      return this.$store.getters.address;
    }
  },
  methods: {
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息  精准定位
          console.log(data);
          console.log(data.formattedAddress);
          self.$store.dispatch("setLocation", data);
          self.$store.dispatch("setAddress", data.formattedAddress);
        }

        function onError(data) {
          // 定位出错    非精准定位
          console.log(data);
        }
      });
    }
  }
};
</script>

<style>
.address {
  float: left;
  position: relative;
  top: 40%;
  color: whitesmoke;
}
.address:hover {
  color: white;
}
</style>