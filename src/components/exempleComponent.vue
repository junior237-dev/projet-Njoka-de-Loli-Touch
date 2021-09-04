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
                <div class="image">
                    <img src="../assets/aveiroDjess.jpg" class="object-cover">
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
            perPage: 4,
	        rewind : true,
            // breakpoints: {
            //     640: {
            //         perPage: 1,
            //         fixedWidth: 200,
            //         fixedHeight: 200
            //     }
            // }
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

<style lang="scss">

    %resize {
        height: 120px;
        width: 180px;
    }
    .recipe-details {
        display: flex;
        list-style: none;
        padding: .3rem;
        margin: 0;
        justify-content: space-around;

        .recipe-details-item {
            display: flex-1;
            cursor: pointer;
            vertical-align: middle;
            border-bottom: solid 0 transparent;
            background-color: transparent;
            border-radius: 0;
            padding: 0 4px;
            width:auto;
            transition: transform .5s, border-bottom .5s, background-color .5s, border-radius .5s, transform .5s;
            

            &:hover {
                border-bottom: solid 1px rgba(68, 174, 245, 0.959);
                background-color: white;
                border-radius: 10px;
                transform: scale(1.1)
            }
        }

        i {
            font-size: 30px;
        }
    }


    .value {
        color: rgba(59, 131, 246, 0.952);
        margin-left: .25rem;
        vertical-align: bottom;
        font-size: .75rem;
        font-weight: 100;
    }

    .title {
        display: block;
        margin-top: -0.5rem;
        color: black;
        font-weight: 300;
        padding-top: .25rem;
        font-size: .57em
    }


    img.inline {
        opacity: .8
    }

    .image {
        @extend %resize;
        cursor: pointer;
        background-color: transparent;
        transition: background-color .5s;
        // border: 1px solid green;

        &:hover {
            background-color: #1f1f1f;
        }

        img {
            @extend %resize;
            opacity: 1;
            transition: opacity .5s
        }

        img:hover {
            opacity: .35
        }
    }

    .content {
        @extend %resize;
        height: 77px
    }


</style>