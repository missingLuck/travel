<template>
  <div class="home">
    <Header />
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
    import axios from 'axios'
    import Header from "./components/Header.vue";
    import HomeSwiper from "./components/Swiper.vue";
    import HomeIcons from "./components/Icons.vue";
    import HomeRecommend from "./components/Recommend.vue";
    import HomeWeekend from "./components/Weekend.vue";
    import apis from '../../api/homeApi.js'
    import {mapState} from 'vuex'
    export default {
        name: "home",
        components: {
            Header,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data(){
            return {
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            async getHomeInfo() {
                try {
                    const _http = axios.create();
                    await _http({
                        method: 'get',
                        url:'/getHomeInfo.json',
                    }).then(res =>{
                        const rst = res.data
                        if(rst.ret&&rst.data){
                            const data = rst.data
                            this.swiperList = data.swiperList
                            this.iconList = data.iconList
                            this.recommendList = data.recommendList
                            this.weekendList = data.weekendList
                        }
                    })

                    // const data  = await apis.getHomeInfo(this.city)
                    // console.log(data)
                }catch (e) {
                    console.log(e)
                }
            }
        },
        mounted() {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        activated() {
            if(this.lastCity !== this.city){
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    };
</script>
