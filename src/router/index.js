import { createRouter, createWebHistory } from 'vue-router'
import accueil from '../views/accueil.vue'
import category from '/src/views/category.vue'
import maMusique from '/src/views/maMusique.vue'
import panier from '/src/views/panier.vue'
import monCompte from '/src/views/monCompte.vue'
import postAlbum from '/src/components/postAlbum.vue'
import pageIntrouvable from '/src/views/404.vue'
import reglage from '/src/components/reglage.vue'
import profil from '/src/components/profil.vue'
import paymentsEnCours from '../components/paymentsEnCours.vue'
import paiementsMode from '../components/paiementMode.vue'
import listDeSouhait from '../components/listDeSouhait.vue'
import compteArtist from '../components/compteArtist.vue'

const routes = [
    {
        path: '/',
        name: 'accueil',
        component: accueil
    },

        {
        path: '/category',
        name: 'category',
        component: category,
    },

    {
        path: '/panier',
        name: 'panier',
        component: panier,
    },

    {
        path: '/maMusique',
        name: 'maMusique',
        component: maMusique,
    },

    {
        path: '/monCompte',
        name: 'monCompte',
        component: monCompte,
    },

    {
        path: '/postAlbum/:itemTitle',
        name: 'postAlbum',
        component: postAlbum
    },

    {
        path: '/reglage',
        name: 'reglage',
        component: reglage
    },

    {
        path: '/profil',
        name: 'profil',
        component: profil
    },

    {
        path: '/paymentsEnCours',
        name: 'paymentsEnCours',
        component: paymentsEnCours
    },

    {
        path: '/listDeSouhait',
        name: 'listDeSouhait',
        component: listDeSouhait
    },

    {
        path: '/paiementsMode',
        name: 'paiementsMode',
        component: paiementsMode
    },

    {
        path: '/compteArtist',
        name: 'compteArtist',
        component: compteArtist
    },

    {
        path: '/:catchAll(.*)',
        name: 'pageIntrouvable',
        component: pageIntrouvable
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router