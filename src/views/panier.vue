<template>
    <div class="bg-gray-100">
        <div class="__header  fixed top-0  w-full h-16  shadow-lg  bg-white">
            <div class="w-60 h-full  pt-6  border-r-2 font-semibold text-lg text-center inline-block">
                <p>Panier ({{elementsInPackage}})</p>
            </div>
            <div class="inline-block w-12 h-14  font-light">
                <a href="#" class="inline-block  w-full pl-3  text-xs text-red-400">
                    <svg class="icon  inline-block  w-4 h-7  opacity-80">
                        <use xlink:href="../../public/icones/sprite (2).svg#garbage-can"></use>
                    </svg> 
                    {{deleteElements}}
                </a>
            </div>
        </div>
        <main class="mt-14">
            <info-article-panier :image="image" id="composant"/>
            <compo-verification />
        </main>
    </div>
    <navbar />
</template>

<script>
    import image from '../assets/xmaleya.jpg'
    import compoVerification from "../components/compoVerification.vue"
    import infoArticlePanier from "../components/infoArticlePanier.vue"
    import Navbar from '../components/navbar.vue'
    export default {
        name: "panier",

        components: {
            infoArticlePanier,
            compoVerification,
            Navbar
        },

        data () {
            return {
                image
            }
        },

        setup (props, context) {
            let elementsInPackage = "", deleteElements = ""
           

            return {
                elementsInPackage,
                deleteElements
            }
        }
    }
</script>


<style lang="postcss">
    .bg-gray-200 {
        min-height: 812px;
    }
</style>