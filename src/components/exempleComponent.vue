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
                        <div class="image w-auto h-auto relative">
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png" class="shadow-md">
                            <div class="footer_card bg-pink-600 opacity-50 h-3/5 w-4 shadow-lg absolute top-0 left-0 z-10"></div>
                        </div>
                        <div class="content border-2 rounded-b-2xl">
                            <h1 class="mx-2 mt-2 text-bold text-left text-blue-500 text-tiny border-b font-light border-gray-300">Digital Marketing</h1>
                            <div class="">
                                <div class="__icons ">
                                    <ul class="recipe-details">
                                        <li class="recipe-details-item time"><img src="../assets/icones/eye.png" class="inline h-3 w-3  mb-1"><span class="value">999</span><span class="title">views</span></li>
                                        <li class="recipe-details-item ingredients"><img src="../assets/icones/like.png" class="inline h-3 w-3 mb-1"><span class="value">5</span><span class="title">likes</span></li>
                                        <li class="recipe-details-item servings"><img src="../assets/icones/share.png" class="inline h-3 w-3 mb-1"><span class="value">48</span><span class="title">shares</span></li>
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
        @apply flex-1 cursor-pointer  align-middle 
    }

    .recipe-details-item {
        border-bottom: solid 0 transparent;
        background-color: transparent;
        border-radius: 0;
        transition: border-bottom .5s, background-color .5s, border-radius .5s, transform .5s;
        
    }

    .recipe-details-item:hover {
        border-bottom: solid 1px rgba(68, 174, 245, 0.959);
        background-color: white;
        border-radius: 10px;
    }

    .recipe-details-item i {
        font-size: 30px;
    }

    .value {
        @apply text-blue-500 ml-1 align-bottom text-xs font-thin
    }

    .title {
        @apply block -mt-2 text-black font-light pt-1 
    }

    .title {
        font-size: .57em
    }

    img.inline {
        opacity: .8
    }

    .footer_card {
        margin: auto;
    }

    .image {
        cursor: pointer;
        background-color: transparent;
        transition: background-color .5s;
    }

    .image:hover {
        background-color: rgb(31, 31, 31);
    }

    .image img {
        opacity: 1;
        transition: opacity .5s
    }

    .image img:hover {
        opacity: .35
    }

</style>