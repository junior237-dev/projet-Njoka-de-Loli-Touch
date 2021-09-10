<template>
    <div class="container">
        <splide :options="options" class="">
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
                <div class="content">
                    <h1>Product Design</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
                <div class="content">
                    <h1>Custom Website</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
            <splide-slide>
                <!-- <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div> -->
                <itemExemple />
            </splide-slide>
            <splide-slide>
                <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
                <div class="content">
                    <h1>Digital Marketing</h1>
                    <h3>UI/UX, Design</h3>
                </div>
            </splide-slide>
        </splide>
    </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue'
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue'
import itemExemple from './itemExemple.vue'
export default {
    name: 'exemple',
    components: {
        Splide, SplideSlide, itemExemple
    },

    setup() {
        let options = {
            type: "loop",
            perPage: 4,
	        rewind : true,
            gap: '.4em',
            breakpoints: {

                640: {
                    perPage: 2,
                    type: "loop",
                    rewind: true,
                    pagination: false,
                    arrows: false,
                    width: '500px',
                    height: '220px',
                    gap: '.3em'
                },

                900: {
                    perPage: 3,
                    pagination: false,
                    arrows: false,
                    gap: '.3em'
                }
            }
        }

        return {
			options,
        }
    }
}
</script>
