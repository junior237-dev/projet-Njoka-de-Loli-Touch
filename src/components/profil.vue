<template>
    <div class="profil bg-gray-50 max-w-lg mx-auto border shadow-lg">
        <composant-retour class="fixed left-0 right-0">
            <div class="py-4 mr-2 text-center text-xl  font-medium">Profil d'utilisateur</div>
        </composant-retour>
        <div class="informations pt-16"> 
            <div class="h-20  px-4 mt-2  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">photo de profil</span>
                <span class="__valeur inline-block">
                    <img src="../assets/jovi.jpg" class="w-14 h-14 rounded-full object-cover" alt="photo de profil">
                </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">compte</span>
                <span class="__valeur inline-block text-blue-300 text-md">690 198 249</span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">Pays</span>
                <span class="__valeur inline-block  w-28 text-blue-300 text-md">
                    <img src="../assets/cameroun.png" class="w-7 h-7 shadow-md rounded-full float-left" alt="pays">
                    Cameroun
                </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">Portable</span>
                <span class="__valeur inline-block text-blue-300 text-md">690 198 249</span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">Email</span>
                <span class="__valeur inline-block text-gray-300 text-lg">votre Email</span>
            </div>
            <div class="h-20  px-4 mt-5 bg-white  border-b border-t flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">pseudo</span>
                <span class="__valeur inline-block text-gray-300 text-md w-36"> 
                    Rigobert Song 
                    <img src="../assets/icones/edit.png" alt="Edit" class="float-right opacity-50">
                </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">genre</span>
                <span class="__valeur inline-block text-blue-300 text-lg"> Masculin </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">anniversaire</span>
                <span class="__valeur inline-block text-blue-300 text-lg"> 22 - 08 - 2002 </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">paramètres</span>
                <span class="__valeur inline-block text-blue-300 text-lg">
                    <img src="../assets/icones/settings.png" alt="settings" class="opacity-50">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import composantRetour from './composantRetour.vue'
    export default {
        name: "profil",
        components: {
            composantRetour
        }
    }
</script>