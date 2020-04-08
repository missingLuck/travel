<template>
    <div class="icons">
        <swiper :options="swiperOptions" v-if="pages.length>0">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.desc">
                    </div>
                    <div class="icon-desc">{{item.desc}}</div>
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
                    loop:true
                },
            }
        },
        props: {
            iconList:Array
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

                console.log(pages)
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
