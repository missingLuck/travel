<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img" alt="" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data(){
            return {
                recommendList:[{
                    id:0,
                    img:require('assets/images/recommend0.jpg'),
                    title:'药王谷药王谷药王谷药王谷药王谷药王谷药王谷药王谷药王谷',
                    desc:'药王谷描述'
                },{
                    id:1,
                    img:require('assets/images/recommend1.jpg'),
                    title:'花舞人间',
                    desc:'花舞人间描述花舞人间描述花舞人间描述花舞人间描述花舞人间描述花舞人间描述'
                },{
                    id:3,
                    img:require('assets/images/recommend0.jpg'),
                    title:'药王谷',
                    desc:'药王谷描述3'
                }]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "assets/styles/mixins";
    .recommend-title {
        margin-top: 0.2rem;
        line-height: 0.8rem;
        background: #eee;
        text-indent: 0.2rem;
    }
    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }
        .item-info {
            flex: 1;
            padding: 0.1rem;
            min-width: 0;
            .item-title {
                line-height: 0.54rem;
                font-size: 0.32rem;
                @include ellipse;
            }
            .item-desc {
                line-height: 0.4rem;
                color: #ccc;
                @include ellipse;
            }
            .item-button {
                line-height: 0.44rem;
                margin-top: 0.16rem;
                background: #ff9300;
                padding: 0 0.2rem;
                border-radius: 0.06rem;
                color: #fff;
            }
        }
    }
</style>
