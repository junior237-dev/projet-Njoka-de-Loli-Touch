<template>
    <div class="header__search w-full"> <!-- l'élément que j'ai utilisé en entête pour former la barre de recherche -->
        <form action="" method="">
            <div class="w-full h-14 px-4 flex justify-around items-center rounded-b-3xl shadow-md" :class="classApply">
                <span class="inline-block">
                    <i class="bi bi-search text-lg"></i>
                </span>
                <label for="recherche" class="hidden">recherche de categories</label>
                <input type="search" placeholder="Rechercher..." class="mt-0 w-4/6 h-1/3 focus:outline-none text-xs pl-2 -ml-3" id="recherche" name="recherche" :class="classApply">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "searchBar",
        props: {
            classApply: {type: Array, default: ['bg-white']}
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 405px) {
        form div {
            margin-bottom: 10px;
        }
    }
    @media screen and (min-width: 405px) {
        form div {
            display: block;
            margin: 10px auto;
            max-width: 55%;
            border: 1px solid transparent;
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
            height: 40px;
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