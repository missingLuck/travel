<template>
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
                    <div class="button">成都</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">成都</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">成都</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">成都</div>
                </div><div class="button-wrapper">
                <div class="button">成都</div>
            </div>

            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div>3</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped lang="scss">
    @import "assets/styles/variable";
    .border-topbottom{
        &:before {
            border-color: #ccc;
        }
        &:after {
            border-color: #ccc;
        }
    }
    .title {
        line-height: 0.44rem;
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
</style>
