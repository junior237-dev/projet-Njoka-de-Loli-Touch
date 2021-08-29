<template>
    <div class="containerSlideSystem">
        <div class="carouselTitle">{{itemInformations.carouselTitle}}</div>
        <div class="carousel1">
            <item-carousel v-for="(item, indice) in items" :key="indice"
                :image="item.containerImageUrl"
                :itemTitle="item.itemTitle"
                :titles="item.titles"
                :likes="item.likes"
                :shares="item.shares"
                :views="item.views"
                :duration="item.duration"
                :creationDate="item.creationDate"
            />
        </div>
   </div>
</template>

<script>
    import itemCarousel from './itemCarousel.vue'
    export default {
        name: 'slideSystem',
        components: {
            itemCarousel
        },
        props: {
            itemInformations: Object
        },
        setup (props) {
            let items = props.itemInformations.items
            
            return {
                items
            }
        }
    }
</script>

<style lang="postcss">
    @import '../../dossierCss/slideSystemCss.css';
</style>
