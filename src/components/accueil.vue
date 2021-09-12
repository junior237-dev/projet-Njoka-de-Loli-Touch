<template>
    <div class="home relative mt-0 h-screen bg-pink-200 border w-full xs:container">
        <search-bar class="bg-transparent absolute top-1 left-1/4 z-10"/>
        <div class="pubs absolute top-0 left-0 w-full z-0">
            <splide :options="options"  class="mx-auto">
                <splide-slide>
                    <img src="../assets/aveiroDjess.jpg" alt="" class="w-full h-full cover">
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
            </splide>
        </div>
    </div>
</template>

<script>

import searchBar from "./searchBar.vue"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue'
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue'

export default {
    name: 'home',
    components: {
        searchBar,
        Splide,
        SplideSlide
    },
    setup() {
        let options = {
            type: "loop",
            arrows: false,
            height: "180px",
            autoplay: true,
            interval: 4000,
			pauseOnHover: false,
            perPage: 3,
            width: '900px'
        }

        return {
            options
        }
    },
}
</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
        box-sizing: content-box;
    }
</style>