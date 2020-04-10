<template>
    <div>
        <swiper :options="swiperOption" v-if="showSwiper" class="wrapper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop:true,
                    autoplay:2000
                }
            }
        },
        computed:{
            showSwiper(){
                return this.swiperList.length
            }
        },
        props:{
            swiperList:Array
        }
    }
</script>

<style scoped lang="scss">
    .wrapper /deep/ .swiper-pagination-bullet-active {
        background: #fff !important;
    }
    .wrapper {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 25.6%;
        background: #ccc;
        .swiper-img {
            width: 100%;
        }
    }
</style>
