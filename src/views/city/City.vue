<template>
    <div class="about">
        <Header></Header>
        <city-search :cities="cities"></city-search>
        <city-list
          :hotCities="hotCities"
          :cities="cities"
          :letter="letter"
        ></city-list>
        <city-alphabet
          :cities="cities"
          @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import Header from "./components/Header.vue";
    import CitySearch from "./components/Search.vue";
    import CityList from "./components/List.vue";
    import CityAlphabet from "@/components/Alphabet.vue";
    import apis from '../../api/homeApi.js'
    export default {
        data(){
            return {
                hotCities:[],
                cities:{},
                letter:''
            }
        },
        components: {
            Header, CitySearch, CityList,CityAlphabet
        },
        mounted() {
            this.getData()
        },
        methods:{
            async getData() {
                try {
                    const _http = axios.create();
                    await _http({
                        method: 'get',
                        url:'/city.json',
                    }).then(res =>{
                        //console.log(res.data.data)
                        this.hotCities = res.data.data.hotCities
                        this.cities = res.data.data.cities
                    })
                    // const data  = await apis.getCity()
                    // console.log(data)
                }catch (e) {
                    console.log(e)
                }
            },
            handleLetterChange(letter){
                this.letter = letter
            }
        }
    }
</script>
