<template>
    <div class="w-full">
        <div class="home mt-0 w-full pb-28">
            <search-bar class="fixed top-0 z-10 bg-transparent" :classApply="['bg-white', 'opacity-80']"/>
            <div class="pubs mb-4">
                <splide :options="options"  class="mx-auto">
                    <splide-slide>
                        <img src="../assets/aveiroDjess.jpg"  alt="index" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/charlotteDipanda.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/cysoul.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/happy.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/jovi.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/Maleya.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                    <splide-slide>
                        <img src="../assets/Lydol.jpg" alt="" class="w-full h-full cover">
                    </splide-slide>
                </splide>
            </div>
            <div class="top_10 mb-4">
                <slide-system :itemInformations="music" :classList="['bg-transparent']" :titleClass="['text-black','text-2xl']"/>
            </div>
            <div class="artistes">
                <h2 class="mb-2 font-bold text-black text-2xl ml-3 text-left">Artistes</h2>
                <splide :options="options2">
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                    <splide-slide>
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2">
                        </span>
                        <br>
                        <span class="text-center text-black font-semibold text-md">X-maleya</span>
                    </splide-slide>
                </splide>
            </div>
        </div>
    </div>
</template>

<script>

import searchBar from "./searchBar.vue"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue'
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue'
import slideSystem from './slideSystem.vue'
import carouselParams from "../../dossiersJs/carouselParams"

export default {
    name: 'home',
    components: {
        searchBar,
        Splide,
        SplideSlide,
        slideSystem
    },
    setup() {
        let options = {
            type: "loop",
            arrows: false,
            height: "190px",
            autoplay: true,
            interval: 4000,
            pagination: false,
			pauseOnHover: false,
            perPage: 3,
            width: '990px',
            breakpoints: {
                600: {
                    perPage: 3,
                    height: "195px"
                },
                400: {
                    perPage: 2,
                    height: "150px"
                }
            }

        },
        options2 = {
            type: "loop",
            arrows: false,
            height: "195px",
            perPage: 4,
            width: '990px',
            gap: '.35em',
            pagination: false,
            breakpoints: {
                660: {
                    perPage: 3
                },
                453: {
                    perPage: 2,
                }
            }
            
        }

        let music = carouselParams.MyMusic[0]

        return {
            options,
            options2,
            music
        }
    },
}
</script>

<style lang='scss' scoped>

</style>