<template>
    <div class="compteArtsite max-w-lg mx-auto mb-20 border shadow-md">
        <div class="header flex flex-row justify-between w-full px-4  h-16">
            <span class="back cursor-pointer inline-block text-3xl text-black py-2" @click="back">
                <i class="bi bi-arrow-left"></i>
            </span>
            <ul class="flex flex-row justify-between w-48 float-right text-3xl text-black">
                <li class="border-l border-gray-300 px-4 h-full py-2"><a><i class="bi bi-search"></i></a></li>
                <router-link to="/panier"><li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-cart"></i></a></li></router-link>
                <router-link to="/reglage"><li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-three-dots-vertical"></i></a></li></router-link>
            </ul>
        </div>
        <banner-artist class="mb-5 mt-1"/>
        <div>
            <slide-system :itemInformations="music"/>
        </div>
    </div>
    <navbar />
</template>

<script>
import bannerArtist from './bannerArtist.vue'
import slideSystem from './slideSystem.vue'
import carouselParams from "../../dossiersJs/carouselParams"
import Navbar from './navbar.vue'

export default {
    name: 'compteArtist',
    components: {
        slideSystem,
        bannerArtist,
        Navbar
    },

    methods: {
        back() {
            this.$router.go(-1)
        }
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