<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游戏主题
    </div>
    <router-link to="city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "Header",
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
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .back-icon {
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: white;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: white;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
