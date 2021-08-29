<template>
    <div class="header__search"> <!-- l'élément que j'ai utilisé en entête pour former la barre de recherche -->
        <form action="" method="">
            <div class="w-full h-14  px-4  flex justify-between items-center  bg-white  rounded-b-3xl shadow-md">
                <span class="inline-block">
                    <img src="../assets/loupe2.png" alt="loupe" class="h5 w-5 ml-5">
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

<style lang="postcss" scoped>
    @media screen and (min-width: 405px) {
        form div {
            display: block;
            margin: 20px auto;
            max-width: 55%;
            border: 1px solid rgba(128, 128, 128, 0.13);
            border-radius: 30px;
            padding-top: 5px
        }

        input[type="search"] {
            max-width: 47%;
            margin-left: 10px;
            font-size: .85em
        }
    }

    @media screen and (min-width: 600px) {
        form div {
            display: block;
            margin: 20px auto;
            width: 332px;
            height: 60px;
            border: 1px solid rgba(128, 128, 128, 0.13);
            border-radius: 30px;
            padding-top: 5px
        }

        input[type="search"] {
            max-width: 47%;
            margin-left: 10px;
            font-size: .85em
        }
    }
</style>