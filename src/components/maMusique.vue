<template>
    <div class="maMusique bg-white h-screen max-w-lg mx-auto pt-11 border shadow-lg">
        <search-bar :classApply="['','z-10','right-0','left-0','top-0','fixed','bg-gray-100', 'opacity-80']"/>
         <div class="GeneralContainer w-full h-auto my-6"> <!--v-for="(item, indice) in myMusic" :key="indice" -->
            <slide-system :itemInformations="myMusic"  class="mb-4"/>
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

