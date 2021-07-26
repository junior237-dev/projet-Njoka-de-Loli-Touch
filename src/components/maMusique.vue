<template>
    <div class="maMusique bg-gray-50 pt-1">
        <search-bar />
        <div class="container w-full">
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

