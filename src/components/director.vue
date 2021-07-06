<template>
    <div>
        <!-- <category />   -->
        <!-- <navbar /> -->
        <!-- <paiement-mode /> -->
        <!-- <panier /> -->
        <!-- <verif-art-panier />  -->
        <most-popular />
        <!-- <connexion-enregistr /> -->

    </div>
</template>

<script>
import connexionEnregistr from './connexionEnregistr.vue'
import verifArtPanier from './verifArtPanier.vue'
import category from "./category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'
import panier from './panier.vue'
import mostPopular from './mostPopular.vue'

export default {
   name: "director",

   components: {
       category,
       navbar,
       paiementMode,
       panier,
       verifArtPanier,
       mostPopular,
       connexionEnregistr
   }

  
}
</script>

<style lang="postcss">
    
</style>
