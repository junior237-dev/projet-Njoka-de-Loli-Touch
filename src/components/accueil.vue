<template>
    <div class="w-full">
        <div class="home mt-0">
            <search-bar class=""/> <!--absolute top-1 left-1/3 z-10-->
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
            width: '990px',

        }

        return {
            options,
        }
    },
}
</script>

<style lang='scss' scoped>
    .home {
        position: relative;
        width: 100%;

    }
</style>