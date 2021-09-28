<!-- voici le composant "categorie" que j'ai commencé -->
<template>
    <div class="max-w-lg mx-auto min-h-screen bg-blue-500 pt-20 px-3"> <!-- son contenant principal dont j'ai mis le background en bleu -->
        <search-bar :classApply="['z-10','right-0','left-0','top-0','fixed', 'shadow-md','bg-white']"/>
        <div class="categories w-full mx-auto grid grid-cols-2 gap-2">
            <category-element />
        </div>
    </div>
</template>

<script>
/* 
 *il faut créer un composant nommé "category-element.vue"
 * qui représentera une catégorie comme sur le prototype de figma
 * et enlever ce commentaire si tout est ok
 * et laisser juste la dernière ligne
 * import category-element from "./category-element.vue" */
import searchBar from '../components/searchBar.vue'
import categoryElement from '../components/categoryElement.vue'
 
export default {
    name: "category",
    components: {
        categoryElement,
        searchBar
    }
}
</script>
