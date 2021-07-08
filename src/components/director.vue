<template>
    <div>
        <!-- <category />   -->
        <!-- <navbar /> -->
        <!-- <paiement-mode /> -->
        <!-- <panier /> -->
        <!-- <verif-art-panier />  -->
        <!-- <most-popular /> -->
        <!-- <connexion-enregistr /> -->
        <!-- <profil /> -->
        <!-- <reglages /> -->
        <mon-compte />

    </div>
</template>

<script>
import profil from './profil.vue'
import connexionEnregistr from './connexionEnregistr.vue'
import verifArtPanier from './verifArtPanier.vue'
import category from "./category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'
import panier from './panier.vue'
import mostPopular from './mostPopular.vue'
import reglages from './reglage.vue'
import monCompte from './monCompte.vue'

export default {
   name: "director",

   components: {
       category,
       navbar,
       paiementMode,
       panier,
       verifArtPanier,
       mostPopular,
       connexionEnregistr,
       profil,
       reglages,
       monCompte
   }

  
}
</script>

<style lang="postcss">
    
</style>
