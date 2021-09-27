<template>
    <div>
        <category />  
        <navbar />
        <!-- <paiement-mode /> -->
        <!-- <panier /> -->
        <!-- <verif-art-panier />  -->
        <!-- <most-popular /> -->
        <!-- <connexion-enregistr /> -->
        <!-- <profil /> -->
        <!-- <reglages /> -->
        <!-- <mon-compte /> -->
        <!-- <ma-musique /> -->
        <!-- <exemple /> -->
        <!-- <home /> -->
        <!-- <post-album /> -->
        <!-- <compteArtist /> -->
    </div>
</template>

<script>
import profil from './profil.vue'
import exemple from './exempleComponent.vue'
import connexionEnregistr from './connexionEnregistr.vue'
import verifArtPanier from './verifArtPanier.vue'
import category from "./category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'
import panier from './panier.vue'
import mostPopular from './mostPopular.vue'
import reglages from './reglage.vue'
import monCompte from './monCompte.vue'
import maMusique from './maMusique.vue'
import home from './accueil.vue'
import postAlbum from './postAlbum.vue'
import compteArtist from './compteArtist.vue'

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
       monCompte,
       maMusique,
       exemple,
       home,
       postAlbum,
       compteArtist

   }

  
}
</script>

<style lang="postcss">
    
</style>
