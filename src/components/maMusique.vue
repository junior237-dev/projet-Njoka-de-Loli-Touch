<template>
    <div class="maMusique bg-gray-200 pt-1 h-screen">
        <search-bar />
         <div class="GeneralContainer w-full h-auto mt-6 mb-6"> <!--v-for="(item, indice) in myMusic" :key="indice" -->
            <slide-system :itemInformations="myMusic" />
        </div>
    </div>
</template>

<script>
    import carouselParams from '../../dossiersJs/carouselParams'
    import searchBar from './searchBar.vue'
    import slideSystem from './slideSystem.vue'
    
    export default {
        name: "maMusique",
        components: {
            searchBar,
            slideSystem
        },
        setup () {
            let myMusic = carouselParams.MyMusic[0]
            return {
                myMusic
            }
        }
        
    }
</script>

