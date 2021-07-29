<template>
    <div class="maMusique bg-gray-200 pt-1 h-screen">
        <search-bar />
        <div class="GeneralContainer w-full mt-6">
            <slide-system />
        </div>
    </div>
</template>

<script>
    import searchBar from './searchBar.vue'
    import slideSystem from './slideSystem.vue'
    
    export default {
        name: "maMusique",
        components: {
            searchBar,
            slideSystem
        }
        
    }
</script>

