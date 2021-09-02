<template>
    
</template>

<script>
    import itemCarousel from './itemCarousel.vue'
    export default {
        name: 'slideSystem',
        components: {
            itemCarousel,
            // Splide,
            // SplideSlide
            
        },
        props: {
            itemInformations: Object
        },
        setup (props) {
            let items = props.itemInformations.items
            // document.addEventListener('DOMContentLoaded', function () {
                
            // })
            
            return {
                items
            }
        },
        mounted () {
           setTimeout(() => {
                new Splide( '.splide' ).mount()
           }, 700)
        }
    }
</script>

<style lang="postcss">
    @import '../../dossierCss/slideSystemCss.css';
</style>
