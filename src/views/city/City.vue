<template>
    <div class="about">
        <Header></Header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
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
        components: {
            Header, CitySearch, CityList,CityAlphabet
        },
        mounted() {
            this.getData()
        },
        methods:{
            async getData() {
                try {
                    const data  = await apis.getCity()
                    console.log(data)
                    axios.get('/city.json')
                        .then(res =>{
                            console.log(res)
                        })

                }catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>
