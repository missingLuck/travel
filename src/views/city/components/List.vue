<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">成都</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">上海</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">广州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">成都</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">西安</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "list",
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper)
        }
    }
</script>

<style scoped lang="scss">
    @import "assets/styles/variable";
    .list {
        overflow: hidden;
        position: absolute;
        top:1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        .border-topbottom{
            &:before {
                border-color: #ccc;
            }
            &:after {
                border-color: #ccc;
            }
        }
        .border-bottom {
            &:before {
                border-color: #ccc;
            }
        }
        .title {
            line-height: 0.54rem;
            background: #eee;
            padding-left: 0.26rem;
        }
        .button-list {
            padding:0.1rem 0.6rem 0.1rem 0.1rem;
            overflow: hidden;
            .button-wrapper {
                float: left;
                width: 33.33%;
                .button {
                    padding: 0.1rem 0;
                    margin: 0.1rem;
                    text-align: center;
                    border: 0.02rem solid #ccc;
                    border-radius: 0.06rem;
                }
            }
        }
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
</style>
