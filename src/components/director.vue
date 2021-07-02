<template>
    <div>
        <!-- <category /> -->
        <!-- <navbar /> -->
        <paiement-mode />
        <!-- <panier /> -->
        <verit-art-panier />
    </div>
</template>

<script>
import veritArtPanier from './verifArtPanier.vue'
import category from "./category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'
import panier from './panier.vue'

export default {
   name: "director",

   components: {
       category,
       navbar,
       paiementMode,
       panier,
       veritArtPanier
   }

  
}
</script>

<style lang="postcss">
    
</style>
