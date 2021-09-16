<template>
    <div class="compteArtsite max-w-2xl mx-auto">
        <div class="header flex flex-row justify-between w-full px-4  h-16">
            <span class="back inline-block text-3xl text-black py-2">
                <i class="bi bi-arrow-left"></i>
            </span>
            <ul class="flex flex-row justify-between w-48 float-right text-3xl text-black">
                <li class="border-l border-gray-300 px-4 h-full py-2"><a><i class="bi bi-search"></i></a></li>
                <li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-cart"></i></a></li>
                <li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-three-dots-vertical"></i></a></li>
            </ul>
        </div>
        <banner-artist />
        <div>
            <slide-system :itemInformations="music"/>
        </div>
    </div>
</template>

<script>
import bannerArtist from './bannerArtist.vue'
import slideSystem from './slideSystem.vue'
import carouselParams from "../../dossiersJs/carouselParams"

export default {
    name: 'compteArtist',
    components: {
        slideSystem,
        bannerArtist
    },

    setup () {
        let music = carouselParams.MyMusic[0]

        return {
            music
        }
    }
}
</script>

<style lang="postcss" scoped>
.header {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>