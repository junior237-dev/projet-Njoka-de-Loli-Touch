<template>
    <div class="header__search"> <!-- l'élément que j'ai utilisé comme entête pour former la barre de recherche -->
        <form action="" method="">
            <div class="w-full h-14  px-4  flex justify-between items-center  bg-white  rounded-b-3xl shadow-md">
                <span class="inline-block">
                    <img src="../../public/loupe2.png" alt="loupe" class="h5 w-5 ml-5">
                </span>
                <label for="recherche" class="hidden">recherche de categorie</label>
                <input type="search" placeholder="Rechercher..." class="bg-white mt-0 w-72 h-12 focus:outline-none mr-6 text-xs pl-2" id="recherche" name="recherche">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "searchBar"
    }
</script>