<template>
    <div class="py-3 bg-gray-600 h-auto">
        <h2 class="text-white mb-2 font-bold text-xl ml-3 text-left">{{informations.carouselTitle}}</h2>
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
                perPage: 4,
                rewind : true,
                height: '300px',
                gap: '.8em',
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
                        width: '800px',
                        height: '300px',
                        pagination: false,
                        arrows: false,
                        gap: '.3em',
                        
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