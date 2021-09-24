<template>
    <div class="pubs mb-5">
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
</template>

<script>

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue'
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue'

export default {
    name: 'pubs',
    components: {
        Splide,
        SplideSlide,
    },

    setup() {
        let options = {
            type: "loop",
            arrows: false,
            height: "200px",
            autoplay: true,
            interval: 10000,
            pagination: false,
			pauseOnHover: false,
            perPage: 3,
            width: '900px',
            breakpoints: {
                600: {
                    perPage: 3,
                    interval: 5000,
                    height: "200px"
                },
                400: {
                    perPage: 2,
                    height: "240px"
                }
            }

        }

        return {
            options
        }
    }

   
}
</script>