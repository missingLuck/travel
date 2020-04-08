<template>
    <div class="banner">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number">
                <span class="iconfont">&#xe632;</span>36
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props:{
            bannerImg:String,
            sightName:String
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
            .banner-title {
                flex: 1;
            }
            .banner-number {
                padding: 0 0.4rem;
                line-height: 0.4rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                background: rgba(0,0,0,0.4);
            }
        }
    }
</style>
