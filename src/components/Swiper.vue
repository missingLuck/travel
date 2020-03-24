<template>
    <swiper class="wrapper" :options="swiperOptions">
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
                autoplay:3000
            },
            swiperList:[{
                id:'0001',
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/964508ac574bc7e85d5c17bb1e9dd65c.jpg_750x200_293b242d.jpg"
            },{
                id:'0002',
                imgUrl:"http://source.qunarzz.com/site/images/wns/20200213_qunar_dujia_750x192_3.jpg"
            }]
        }
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
