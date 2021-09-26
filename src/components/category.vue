<!-- voici le composant "categorie" que j'ai commencé -->
<template>
    <div class="max-w-lg mx-auto h-screen bg-blue-500 pt-16"> <!-- son contenant principal dont j'ai mis le background en bleu -->
        <search-bar :classApply="['z-10','right-0','left-0','top-0','fixed', 'shadow-md','bg-white']"/>
        <div class="categories w-4/6 mx-auto grid grid-cols-2 gap-1">
            <div class="category-element w-full h-20 shadow-lg mb-1 bg-white" v-for="item in 6" :key="item">
                {{item}}
                <div class="illustration w-2/3 bg-yellow-600 float-right h-full  rounded-tl-full rounded-r-2xl shadow-lg"></div>
            </div>
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
 import searchBar from './searchBar.vue'
 
export default {
    name: "category",
    components: {
        //category-element,
        searchBar
    }
}
</script>


