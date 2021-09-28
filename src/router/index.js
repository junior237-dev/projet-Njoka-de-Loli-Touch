import { createRouter, createWebHistory } from 'vue-router'
import accueil from '../views/accueil.vue'

const routes = [
    {
        path: '/',
        name: 'accueil',
        component: accueil
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router