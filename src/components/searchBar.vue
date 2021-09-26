<template>
    <div class="header__search w-full h-12 rounded-b-3xl shadow-lg" :class="classApply"> <!-- l'élément que j'ai utilisé en entête pour former la barre de recherche -->
        <form action="" method="">
            <div class="w-4/5 py-2 mx-auto" >
                <span class="inline-block w-1/6 text-right pr-2">
                    <i class="bi bi-search text-lg text-black"></i>
                </span>
                <label for="recherche" class="hidden">recherche de categories</label>
                <input type="search" placeholder="Rechercher..." class="outline-none w-5/6" :class="classApply[6]" id="search" name="search" >
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

<style lang="scss" scoped>
    .header__search {
        

        @media screen and (min-width: 500px) {
            width: 400px;
            margin: 5px auto;
            border-radius: 15px;
        }

        input {
        
            @media screen and (min-width: 500px) {
                width: 90%;
            }
        }

        span.inline-block {

            @media screen and (min-width: 500px) {
                width: 10%;
                padding-right: 20px
            }
        }

    }

    
</style>