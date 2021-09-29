<template>
    <div class="max-w-lg mx-auto border shadow-sm pb-14 min-h-screen">
        <composant-retour>
            <ul class="w-76 py-5 mr-1 float-right">
                <li class="inline-block mx-2 active" @click.stop="activeClass"><a href="#" class="text-md font-light text-blue-400 text-sm">Se connecter</a></li>
                <li class="inline-block mx-3" @click.stop="activeClass"><a href="#" class="text-md font-light text-green-500 text-sm">S'enregistrer</a></li>
            </ul>
        </composant-retour>
        <main>
            <div class="__connexionAndInsciption m-12">
                <form action="" class="flex flex-row flex-wrap justify-center items-center w-3/5 mx-auto">
                    <!-- pour la connexion -->
                    <component-connexion v-if="visible" />

                   <!-- pour les inscriptions -->
                   <component-inscription v-else-if="!visible"/>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import { ref } from 'vue'
import componentConnexion from "./componentConnexion.vue"
import componentInscription from "./componentInscription.vue"
import composantRetour from './composantRetour.vue'
export default {
    name: "connexionEnregistr",
    components: {
        composantRetour,
        componentConnexion,
        componentInscription
    },
    setup () {
        let visible = ref(true),
        activeClass = function(e) {
            let parent = e.currentTarget.parentNode

            if((e.currentTarget.firstChild.innerHTML === "S'enregistrer") && !( e.currentTarget.firstChild.classList.contains('active') )) {
                visible.value = false
            } else if(e.currentTarget.firstChild.innerHTML === "Se connecter" && !( e.currentTarget.firstChild.parentNode.classList.contains('active') )) {
                visible.value = true
            }

            if (e.currentTarget.classList.contains("active")) {
                return 
            }
            parent.querySelector("li.active").classList.remove("active")
            e.currentTarget.classList.add('active')
        }
        return {
            visible,
            activeClass
        }
    }
}
</script>