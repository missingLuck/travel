<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.index">
                    <div class="icon-img">
                        <img :src="item.iconImg" :alt="item.iconDesc">
                    </div>
                    <div class="icon-desc">{{item.iconDesc}}</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img src="" alt="">
                    </div>
                    <div class="icon-desc">测试</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data(){
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    loop:true
                },
                iconList:[{
                    iconImg:require('assets/icons/0.png'),
                    iconDesc:'热门景点热门景点热门景点'
                },{
                    iconImg:require('assets/icons/1.png'),
                    iconDesc:'热门景点1'
                },{
                    iconImg:require('assets/icons/2.png'),
                    iconDesc:'热门景点2'
                },{
                    iconImg:require('assets/icons/3.png'),
                    iconDesc:'热门景点3'
                },{
                    iconImg:require('assets/icons/4.png'),
                    iconDesc:'热门景点4'
                },{
                    iconImg:require('assets/icons/5.png'),
                    iconDesc:'热门景点5'
                },{
                    iconImg:require('assets/icons/6.png'),
                    iconDesc:'热门景点6'
                },{
                    iconImg:require('assets/icons/7.png'),
                    iconDesc:'热门景点7'
                },{
                    iconImg:require('assets/icons/5.png'),
                    iconDesc:'热门景点8'
                }]
            }
        },
        computed:{
            pages () {
                const pages = []
                this.iconList.forEach((item,index) =>{
                    const page = Math.floor(index/8)
                    if(!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "assets/styles/variable";
    @import "assets/styles/mixins";
    .icons /deep/ .swiper-container {
        height: 0;
        padding-bottom: 50%;
        margin-top: 0.2rem;
    }
    .icon {
        position: relative;
        float: left;
        width: 25%;
        padding-bottom: 25%;
        height: 0;
        .icon-img {
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            img {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem;
            line-height: 0.44rem;
            color: $darkTextColor;
            text-align: center;
            margin: 0 .1rem;
            @include ellipse;
        }
    }
</style>
