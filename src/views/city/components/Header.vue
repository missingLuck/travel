<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "CityHeader",
        data(){
            return {
                city:'成都'
            }
        }
    };
</script>

<style scoped lang="scss">
@import "assets/styles/variable";
.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: $bgColor;
  color: #fff;
  font-size: 0.32rem;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .back-icon {
      font-size: 0.4rem;
      color: #fff;
    }
  }
}
</style>
