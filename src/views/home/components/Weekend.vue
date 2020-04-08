<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="" />
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
        props:{
            weekendList:Array
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
