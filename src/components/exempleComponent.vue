<template>
            <div class="">
                <splide :options="options" class="container">
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
                        <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png" class="shadow-md">
                        <div class="content">
                            <h1 class="mx-2 mt-2 pb-1 text-bold text-left text-blue-500 text-tiny border-b font-light border-gray-300">Digital Marketing</h1>
                            <div class="mx-2">
                                <div class="__icons ">
                                    <ul class="recipe-details">
                                        <li class="recipe-details-item time"><img src="../assets/icones/eye.png" class="inline h-4 w-3"><span class="value">20</span><span class="title">vues</span></li>
                                        <li class="recipe-details-item ingredients"><img src="../assets/icones/like.png" class="inline h-3 w-3"><span class="value">5</span><span class="title">likes</span></li>
                                        <li class="recipe-details-item servings"><img src="../assets/icones/share.png" class="inline h-3 w-3"><span class="value">48</span><span class="title">partages</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </splide-slide>
                </splide>
            </div>
                
            

</template>

<script>

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
            perPage: 3,
	        rewind : true,
        }
        return {
			  options
        }
    },

    methods: {
        
    },

    mounted () {
        

    }
}
</script>

<style lang="postcss">
    .recipe-details {
        @apply flex list-none py-1 px-1 m-0 justify-between 
    }

    .recipe-details-item {
        @apply flex-1 cursor-pointer mt-1  align-middle
    }

    .recipe-details-item i {
        font-size: 30px;
    }

    .value {
        @apply text-blue-500 ml-1 align-bottom text-tiny font-semibold
    }

    .title {
        @apply block -mt-1 text-xs text-black font-extralight pt-1
    }

    img.inline {
        opacity: .8
    }
</style>