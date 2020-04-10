<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    36
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary
                    v-show="showGallary"
                    :gallaryImgs="gallaryImgs"
                    @close="handleGallaryClose"
            ></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
    import commonGallary from '@/components/Gallary'
    import FadeAnimation from '@/components/FadeAnimation'
    export default {
        name: "Banner",
        data(){
            return {
                showGallary:false
            }
        },
        props:{
            bannerImg:String,
            sightName:String,
            gallaryImgs:Array,
        },
        components:{
            commonGallary,
            FadeAnimation
        },
        methods: {
            handleBannerClick(){
                this.showGallary = true
            },
            handleGallaryClose(){
                this.showGallary = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .banner {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        .banner-img {
            width: 100%;
        }
        .banner-info {
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: 0.6rem;
            color: #fff;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
            .banner-title {
                flex: 1;
                font-size: 0.32rem;
                padding: 0 0.2rem;
            }
            .banner-number {
                line-height: 0.32rem;
                height: 0.32rem;
                margin-top: 0.14rem;
                padding: 0 0.4rem;
                border-radius: 0.2rem;
                background: rgba(0,0,0,0.8);
                font-size: 0.24rem;
                .banner-icon {
                    font-size: 0.24rem;
                }
            }
        }
    }
</style>
