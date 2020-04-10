<template>
    <div>
        <detail-banner
            :bannerImg="bannerImg"
            :sightName="sightName"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :categoryList="categoryList"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name: "Detail",
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return {
                sightName:"",
                bannerImg: "",
                gallaryImgs: [],
                categoryList: []
            }
        },
        methods:{
            async getDetail(){
                try {
                    const _http = axios.create();
                    await _http({
                        method: 'get',
                        url:'/getDetailInfo.json'
                    }).then(res =>{
                        const rst = res.data
                        if(rst.ret&&rst.data){
                            const data = rst.data
                            console.log(data)
                            this.sightName = data.sightName
                            this.bannerImg = data.bannerImg
                            this.gallaryImgs = data.gallaryImgs
                            this.categoryList = data.categoryList
                        }
                    })
                }catch (e) {
                    console.log(e)
                }
            }
        },
        mounted() {
            this.getDetail()
        }
    }
</script>

<style scoped>
    .content {
        height: 50rem;
    }
</style>
