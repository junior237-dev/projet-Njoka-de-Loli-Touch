<template>
    <div>
        <!-- <category />
        <navbar /> -->
        <paiement-mode />
    </div>
</template>

<script>
import category from "./category.vue"
import navbar from "./navbar.vue"
import paiementMode from './paiementMode.vue'

export default {
   name: "director",

   components: {
       category,
       navbar,
       paiementMode
   }

  
}
</script>

<style lang="postcss">
    
</style>
