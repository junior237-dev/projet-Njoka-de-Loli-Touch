<template>
    <div>
        <composant-retour />
        <ul class="__tabs  h-20 w-full  border ">
            <li class="tab-1 inline-block w-auto h-auto border px-12">Vérifier</li>
            <li class="tab-2 inline-block w-auto h-auto border px-12">Payer</li>
            <li class="tab-3 inline-block w-auto h-auto border px-12">Valider</li>
        </ul>
    </div>
</template>

<script>
    import composantRetour from './composantRetour.vue'
    export default {
        name: "verifArtPanier",
        components: {
            composantRetour
        }
    }
</script>