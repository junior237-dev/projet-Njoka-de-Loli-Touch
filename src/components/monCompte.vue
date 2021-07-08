<template>
    <div class="__monCompte bg-gray-50">
        <div class="pt-3 bg-blue-400 h-28 w-full">
            <div class="w-72 h-20 mx-auto flex justify-center items-center bg-white shadow-lg rounded-full">
                <img src="../assets/tenor.jpg" alt="photo de profil" class="w-20 h-20  rounded-full">
                <span class="inline-block w-44 text-2xl text-blue-400 font-medium mx-3">Rigobert Song</span>
                <img src="../assets/icones/settings.png" alt="setting" class="">
            </div>
        </div>
        <div class="__mes achats h-48 border-b bg-white">
            <span class="inline-block text-xl font-medium text-center text-blue-400 mt-3">mes Achats</span>
            <div class="flex justify-between items-center mt-20 ">
                <span class="inline-block ml-9 text-sm">
                    <img src="../assets/icones/panier.png" alt="panier" class="w-9 h-9 mx-auto">
                    Panier
                </span>
                <span class="inline-block text-center text-sm mr-9">
                    <img src="../assets/icones/heart.png" alt="coeur" class="w-9 h-9 mx-auto">
                    Liste de souhaits
                </span>
            </div>
        </div>
        <div class="mt-5 bg-white pt-16">
            <div class="inline-block w-80 mx-auto px-16 mb-6">
                <img src="../assets/icones/souscription.png" alt="abonnements" class="float-left">
                <a href="#" class="float-right">mes abonnements</a>
            </div>
            <div class="inline-block w-80 mx-auto px-16 mb-6">
                <img src="../assets/icones/language.png" alt="langues" class="float-left">
                <a href="#" class="float-right">changer la langue</a>
            </div>
            <div class="inline-block w-80 mx-auto px-16 mb-6">
                <img src="../assets/icones/client.png" alt="service client" class="float-left">
                <a href="#" class="float-right">service client</a>
            </div>
            <div class="inline-block w-80 mx-auto px-16 mb-6">
                <img src="../assets/icones/about.png" alt="about" class="float-left">
                <a href="#" class="float-right">A propos de Njoka</a>
            </div>
            <button class="w-52 h-10 my-3 rounded-full bg-blue-400 text-white">se déconnecter</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monCompte",
       
    }
</script>