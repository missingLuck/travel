<template>
  <div class="home">
    <Header />
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import HomeSwiper from "./components/Swiper.vue";
    import HomeIcons from "./components/Icons.vue";
    import HomeRecommend from "./components/Recommend.vue";
    import HomeWeekend from "./components/Weekend.vue";
    import apis from '@/api/homeApi.js'
    export default {
        name: "home",
        components: {
            Header,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        mounted() {
            try {
                const param = {
                    id:'admin'
                }
                const res = apis.getById(param)
                console.log(res)
            }catch (e) {
                console.log(e)
            }
        }
    };
</script>
