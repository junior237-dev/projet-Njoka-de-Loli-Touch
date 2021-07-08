<template>
    <div class="__reglages bg-gray-50">
        <composant-retour>
            <div class="py-4 mr-2 text-center text-xl  font-medium">Réglages</div>
        </composant-retour>
        <div class="__réglages">
            <div class="h-20  px-4 mt-2  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">changer de mot de passe</span>
                <span class="__valeur inline-block text-gray-300 text-md w-10"> 
                    <img src="../assets/icones/edit.png" alt="Edit" class="float-right opacity-50">
                </span>
            </div>
            <div class="h-20  px-4  bg-white  border-b  flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">mes préférences</span>
                <span class="__valeur inline-block text-gray-300 text-md w-10"> 
                    <img src="../assets/icones/edit.png" alt="Edit" class="float-right opacity-50">
                </span>
            </div>
            <div class="h-20  px-4 mt-5 bg-white  border-b border-t flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">langue</span>
                <span class="__valeur inline-block text-blue-300 text-lg w-32"> 
                    Français
                    <img src="../assets/icones/edit.png" alt="Edit" class="float-right opacity-50">
                </span>
            </div>
            <div class="h-20  px-4 mt-5 bg-white  border-b border-t flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">guide de l'utilisateur</span>
                <span class="__valeur inline-block text-blue-300 text-lg w-24"> 
                    <img src="../assets/icones/userGuid.png" alt="guide utilisateur" class="float-right w-8 h-8 object-cover">
                </span>
            </div>
            <div class="h-20  px-4 bg-white  border-b flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">suggestions d'application</span>
                <span class="__valeur inline-block text-blue-300 text-lg w-32"> 
                    <img src="../assets/icones/suggestion.png" alt="suggestions" class="float-right w-8 h-8 object-cover opacity-75">
                </span>
            </div>
            <div class="h-20  px-4 bg-white  border-b flex justify-between items-center">
                <span class="__intitule inline-block font-medium text-sm">à propos de Njoka</span>
                <span class="__valeur inline-block text-blue-300 text-lg w-32"> 
                    <img src="../assets/icones/about.png" alt="à propos" class="float-right w-7 h-7 object-cover">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import composantRetour from './composantRetour.vue'
    export default {
        name: 'reglages',
        components: {
            composantRetour
        }
    }
</script>