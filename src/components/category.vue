<!-- voici le composant "categorie" que j'ai commencé -->
<template>
    <div class="w-full min-h-screen  bg-blue-500  pt-0"> <!-- son contenant principal dont j'ai mis le background en bleu -->
        <search-bar />
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
 import searchBar from './searchBar.vue'
 
export default {
    name: "category",
    components: {
        //category-element,
        searchBar
    },
    data () {
        return {}
    }
}
</script>

<style>
    .bg-blue-500 {
        min-height: 812px
    }
</style>

