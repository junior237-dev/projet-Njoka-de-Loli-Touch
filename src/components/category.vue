<template>
    <!-- voici le composant "categorie" que j'ai commencer -->
    <div class="bg-blue-500 w-full h-60 pt-0"> <!-- son contenat principal dont j'ai mis le background en bleu -->
        <div class="header__search"> <!-- l'élément que j'ai utilisé comme entête pour former la barre de recherche -->
            <form action="" method="get">
                <div class="w-full bg-white h-14 rounded-b-3xl shadow-md flex justify-between items-center px-4">
                    <span class="inline-block">
                        <img src="../../public/loupe2.png" alt="loupe" class="h5 w-5 ml-5">
                    </span>
                    <label for="recherche" class="hidden">recherche de categorie</label>
                    <input type="search" placeholder="Rechercher..." class="bg-white mt-0 w-72 h-12 focus:outline-none mr-6 text-xs pl-2" id="recherche" name="recherche">
                </div>
            </form>
        </div>
        <main></main>
    </div>
</template>

<script>
/* 
 *il faut créer un composant nommé "category-element.vue"
 * qui représentera une catégorie comme sur le prototype de figma
 * et enlever ce commentaire si tout est ok
 * et laisser juste la dernière ligne
 * import category-element from "./category-element.vue" */
 
export default {
    name: "category",
    //components: {category-element}
    data () {
        return {}
    }
}
</script>

