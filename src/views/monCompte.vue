<template>
    <div class="monCompte bg-gray-50 max-w-lg mx-auto">
        <div class="pt-3 bg-blue-400 h-28 w-full">
            <div class="w-4/5 h-20 mx-auto flex justify-center items-center bg-white shadow-lg rounded-full" v-show="visible">
                <img src="../assets/tenor.jpg" alt="photo de profil" class="w-20 h-20 rounded-full">
                <span class="inline-block w-44 text-2xl text-blue-400 font-medium mx-3">Rigobert Song</span>
                <router-link to="/profil"><img src="../assets/icones/settings.png" alt="setting"></router-link>
            </div>
            <div class="w-72 h-20 mx-auto flex justify-center items-center bg-white shadow-lg rounded-full" v-show="!visible">
                <div class="text-xl text-blue-400 font-semibold"><router-link to="/componentConnexion">Connexion</router-link> / <router-link to="/componentInscription">Enregistrement</router-link></div>
            </div>
        </div>
        <div class="mesAchats h-48 border-b bg-white">
            <span class="inline-block text-xl font-medium text-center text-blue-400 mt-3 w-full">mes Achats</span>
            <div class="flex justify-between items-center mt-14 px-9">
                <router-link to="/panier">
                    <span class="inline-block text-center text-sm">
                        <img src="../assets/icones/panier.png" alt="panier" class="w-9 h-9 mx-auto">
                        Panier
                    </span>
               </router-link>
                <router-link to="/listDeSouhait">
                    <span class="inline-block text-center text-sm">
                        <img src="../assets/icones/heart.png" alt="coeur" class="w-9 h-9 mx-auto">
                        Liste de souhaits
                    </span>
                </router-link>
            </div>
        </div>
        <div class="mt-5 w-full bg-white pt-16 text-left">
            <div class="w-3/6 px-1 mx-auto flex justify-around mb-6">
                <img src="../assets/icones/souscription.png" alt="abonnements" class="">
                <a href="#" class="">mes abonnements</a>
            </div>
            <div class="w-3/6 px-1 mx-auto flex justify-around mb-6">
                <img src="../assets/icones/language.png" alt="langues" class="-mr-1">
                <a href="#" class="-ml-1">changer la langue</a>
            </div>
            <div class="w-3/6 px-1 mx-auto flex justify-around mb-6">
                <img src="../assets/icones/client.png" alt="service client" class="-mr-1">
                <a href="#" class="-ml-1">service client</a>
            </div>
            <div class="w-3/6 px-1 mx-auto flex justify-around mb-6">
                <img src="../assets/icones/about.png" alt="about" class="-mr-1">
                <a href="#" class="-ml-1">A propos de Njoka</a>
            </div>
            <button class="w-full h-11 my-3 mx-auto rounded-full bg-blue-400 text-lg text-white" @click="toggleVisibility" v-show="visible">se déconnecter</button>
        </div>
    </div>
    <navbar />
</template>

<script>
    import navbar from '../components/navbar.vue'
    export default {
    components: { navbar },
        name: "monCompte",

        data() {
            return {
                visible: true
            }
        },

        methods: {
            toggleVisibility() {
                this.visible = false
                console.log("not visible")
            }
        }
       
    }
</script>

<style>
   
</style>