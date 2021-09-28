<template>
    <div class="mt-0 max-w-lg mx-auto">
        <div class="home mt-0 w-full pb-28">
            <search-bar :classApply="['','z-10','right-0','left-0','top-0','fixed','bg-white', 'opacity-80']"/>
            <pubs />
            <div class="top_10 mb-5">
                <slide-system :itemInformations="music" :classList="['bg-transparent']" :titleClass="['text-black','text-2xl']"/>
            </div>
            <div class="artistes">
                <h2 class="mb-2 font-bold text-black text-xl ml-3 text-left">Artistes</h2>
                <splide :options="options2">
                    <splide-slide class="text-center" v-for="i in 10" :key="i">
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-32 h-32 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-black font-semibold text-tiny">X-maleya</span>
                    </splide-slide>
                    <splide-slide class="text-center">
                        <span class="inline-block">
                            <img :src="getImageUrl('../assets/Maleya.jpg')" alt="Maleya" class="object-cover rounded-full w-32 h-32 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-tiny">X-maleya</span>
                    </splide-slide>
                </splide>
            </div>
        </div>
    </div>
</template>

<script>

import pubs from "../components/pubs.vue"
import searchBar from "../components/searchBar.vue"
import slideSystem from '../components/slideSystem.vue'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue'
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue'
import carouselParams from "../../dossiersJs/carouselParams"

export default {
    name: 'home',
    components: {
        searchBar,
        slideSystem,
        Splide,
        SplideSlide,
        pubs
    },
    setup() {
        
        let options2 = {
            type: "loop",
            arrows: true,
            height: "155px",
            perPage: 3,
            width: '990px',
            gap: '.35em',
            pagination: false,
            breakpoints: {
                800: {
                    arrows: false
                },
                453: {
                    perPage: 2,
                    arrows: false
                }
            }
            
        }

        let music = carouselParams.MyMusic[0]

        return {
            options2,
            music
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(name, import.meta.url)
        }
    }
}
</script>
