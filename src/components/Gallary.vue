<template>
    <div class="container" @click="handleGellaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="showGallary">
                <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallary",
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType:'fraction',
                    observer:true,
                    observeParents:true,
                    loop:true,
                }
            }
        },
        props:{
            gallaryImgs:Array
        },
        computed:{
            showGallary(){
                return this.gallaryImgs.length
            }
        },
        methods:{
            handleGellaryClick (){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="scss">
    .container /deep/ .swiper-container {
        overflow: inherit;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        background: #000;
        .wrapper {
            height: 0;
            width: 100%;
            padding-bottom: 100%;
            background: #00bcd4;
            .gallary-img {
                width: 100%;
            }
            .swiper-pagination {
                color: #fff;
                bottom: -1rem;
            }
        }
    }
</style>
