<template>
    <swiper v-if="swiperList.length>0" class="wrapper" :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data(){
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    loop:true,
                    autoplay:2000
                }
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
