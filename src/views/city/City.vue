<template>
    <div class="about">
        <Header></Header>
        <CitySearch></CitySearch>
        <CityList></CityList>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import CitySearch from "./components/Search.vue";
    import CityList from "./components/List.vue";
    export default {
        components: {
            Header, CitySearch, CityList
        }
    }
</script>
