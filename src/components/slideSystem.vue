<template>
    <div class="py-3" :class="classList">
        <h2 class="mb-2 font-semibold text-xs ml-3 text-left" :class="titleClass">{{informations.carouselTitle}}</h2>
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
            itemInformations: Object,
            classList: {
                type: Array,
                default: ['bg-gray-600 h-auto']
            },
            titleClass: {
                type: Array,
                default: ['text-white']
            }
        },
        setup (props) {
            let options = {
                type: "loop",
                perPage: 3,
                arrows: true,
                rewind : true,
                height: '300px',
                gap: '.3em',
                breakpoints: {

                    450: {
                        perPage: 2,
                        type: "loop",
                        rewind: true,
                        pagination: false,
                        arrows: false,
                        width: '490px',
                        height: '275px',
                        gap: '.1em'
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