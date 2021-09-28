<template>
    <div>
        <!-- <category />-->  
        <!-- <navbar /> -->
        <!-- <ListDeSouhait />  -->
        <!-- <PaymentsEnCours /> -->
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
import category from "../views/category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'
import panier from '../views/panier.vue'
import mostPopular from './mostPopular.vue'
import reglages from './reglage.vue'
import monCompte from '../views/monCompte.vue'
import maMusique from '../views/maMusique.vue'
import home from '../views/accueil.vue'
import postAlbum from './postAlbum.vue'
import compteArtist from './compteArtist.vue'
import ListDeSouhait from './listDeSouhait.vue'
import PaymentsEnCours from './paymentsEnCours.vue'

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
       compteArtist,
       ListDeSouhait,
       PaymentsEnCours

   }

  
}
</script>

<style>
    
</style>
