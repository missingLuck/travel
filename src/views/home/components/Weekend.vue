<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img" alt="" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data(){
            return {
                recommendList:[{
                    id:0,
                    img:require('assets/images/weekend0.jpg'),
                    title:'成都必打卡',
                    desc:'成都的标志，也是现代人对老成都的记忆'
                },{
                    id:1,
                    img:require('assets/images/weekend1.jpg'),
                    title:'摩崖石刻造像',
                    desc:'诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
                },{
                    id:3,
                    img:require('assets/images/weekend2.jpg'),
                    title:'冰瀑节，相约美丽中国',
                    desc:'康巴大地上的连绵雪山和不羁的江河，肥沃的田园和诗意的牧场，让这篇神秘之地幸福永恒'
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
    .item-img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%;
        .item-img {
            width: 100%;
        }
    }
    .item-info {
        padding: 0.1rem 0.1rem 0.4rem;
        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            padding-right: 1.4rem;
            @include ellipse;
        }
        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            padding-right: 1.4rem;
            @include ellipse;
        }
    }
</style>
