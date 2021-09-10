<template>
    <div class="py-5 bg-gray-100 h-auto">
        <h2 class="text-left text-blue-400 font-medium text-lg ml-7">{{informations.carouselTitle}}</h2>
        <splide :options="options"  class="m-auto">
            <splide-slide v-for="(item, indice) in informations.items" :key="indice">
                <item-exemple :itemInfo="item"/>
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
        name: 'slideSystem',
        components: {
            Splide, SplideSlide, itemExemple
        },
        props: {
            itemInformations: Object
        },
        setup (props) {
            let options = {
                type: "loop",
                perPage: 5,
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
                        height: '275px',
                        gap: '.3em'
                    },

                    900: {
                        perPage: 3,
                        width: '600px',
                        pagination: false,
                        arrows: false,
                        gap: '.3em'
                    },

                    
                }
            }

            let informations = props.itemInformations

            return {
                options,
                informations
            }
        }
    }
</script>