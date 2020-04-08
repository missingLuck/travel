<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    </div>
</template>

<script>
    import axios from 'axios'
    import detailBanner from './components/Banner'
    export default {
        name: "Detail",
        components:{
            detailBanner
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
                        url:'/getDetailInfo.json',
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

</style>
