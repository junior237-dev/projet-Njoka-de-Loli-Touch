<template>
    <div class="post-album max-w-lg mx-auto mb-20">
        <composant-retour>
            <ul class="flex flex-row justify-between w-48 float-right text-3xl text-black">
                <li class="border-l border-gray-300 px-4 h-full py-2"><a><i class="bi bi-search"></i></a></li>
                <router-link to="/panier"><li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-cart"></i></a></li></router-link>
                <router-link to="/reglage"><li class="border-l border-gray-300 px-4 py-2"><a><i class="bi bi-three-dots-vertical"></i></a></li></router-link>
            </ul>
        </composant-retour>
        <banner-artist class="mb-5"/>
        <pubs class="mt-10 mb-10"/>
        <div class="post-description mt-1 mb-5 h-auto bg-gray-800">
            <h1 class="text-center text-4xl font-semibold  mx-auto text-white">Cardio</h1>
            <h3 class="text-center text-white mx-auto -mt-2">X-maleya</h3>  
            <img src="../assets/Maleya.jpg" alt="" class="block w-full max-h-80 object-cover">
            <div class="description inline-block w-full align-bottom">
                <div class="informations text-blue-500 text-2xl w-full mx-auto">
                    <ul class="info-1 grid grid-cols-3 sm:grid-cols-6">
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-eye-fill"></i><span class="value text-tiny font-bold block -mt-2">20</span></li>
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-hand-thumbs-up-fill"></i><span class="value text-tiny font-bold block -mt-2">20</span></li>
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-share-fill"></i><span class="value text-tiny font-bold block -mt-2">20</span></li>
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-music-note-list"></i><span class="value text-tiny font-bold block -mt-2">20</span></li>
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-clock"></i><span class="value text-sm  font-bold block -mt-2">20mn</span></li>
                        <li class="w-full  border bg-black py-2 text-center"><i class="bi bi-cash-coin"></i><span class="value text-sm font-bold block -mt-2">200XAF</span></li>
                    </ul>
                    <div class="control">
                        <button class="btn w-full bg-blue-500 rounded-sm h-20 mt-0">
                            <span class="shopping-cart text-white"><i class="bi bi-cart3"></i></span>
                            <span class="buy text-white ml-3">Obtenez maintenant</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <music-player class="mb-3"/>
        <pubs class="mt-10 mb-10"/>
    </div>
    <navbar />
</template>

<script>
import pubs from './pubs.vue'
import composantRetour from "./composantRetour.vue"
import bannerArtist from './bannerArtist.vue'
import musicPlayer from "./musicPlayer.vue"
import Navbar from './navbar.vue'

export default {
    name: 'postAlbum',
    components: {musicPlayer, bannerArtist, composantRetour, pubs, Navbar},
}
</script>

<style scoped>
    .header {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
</style>