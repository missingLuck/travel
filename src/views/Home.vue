<template>
  <div class="home">
    <Header />
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
    import Header from "components/Header.vue";
    import HomeSwiper from "components/Swiper.vue";
    import HomeIcons from "components/Icons.vue";
    import HomeRecommend from "components/Recommend.vue";
    export default {
        name: "home",
        components: {
            Header,
            HomeSwiper,
            HomeIcons,
            HomeRecommend
        }
    };
</script>
