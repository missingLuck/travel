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
    import apis from '../../api/homeApi.js'
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
            this.getData()
        },
        methods:{
            async getData() {
                try {
                    const data  = await apis.getById()
                    console.log(data)
                }catch (e) {
                    console.log(e)
                }
            }
        }
    };
</script>
