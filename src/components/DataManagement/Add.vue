<template>
  <div>
    <span>地图</span>
    <div id="currentAdd"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var map = new AMap.Map("currentAdd");
  }
};
</script>

<style>
#currentAdd {
  width: 400px;
  height: 400px;
}
</style>