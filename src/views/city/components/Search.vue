<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div
            class="search-content"
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >{{item.name}}</li>
                <li v-show="hasNodata" class="search-item border-bottom">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Bscroll from 'better-scroll'
    export default {
        name: "Search",
        data(){
            return {
                keyword: '',
                list:[],
                timer:null
            }
        },
        computed:{
            hasNodata(){
                return !this.list.length
            }
        },
        props:{
            cities:Object
        },
        watch: {
            keyword (){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = [];
                    return
                }
                this.timer = setTimeout( ()=>{
                    let result = []
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword)>-1 ||
                                value.name.indexOf(this.keyword)>-1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)

            }
        },
        methods: {
            handleCityClick(city){
                this.changeCity(city);
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search,{click: true})
        }
    }
</script>

<style scoped lang="scss">
    @import "assets/styles/variable";
    .search {
        height: 0.72rem;
        padding: 0 0.1rem;
        background: $bgColor;
        .search-input {
            width: 100%;
            height: 0.62rem;
            padding: 0 0.1rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem;
            color: #666;
        }
    }
    .search-content {
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top:1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        .search-item {
            line-height: 0.62rem;
            padding-left: 0.2rem;
            color: #666;
            background: #fff;
        }
    }
</style>
