<template>
    <div class="w-full min-h-screen  bg-blue-400">
        <search-bar />
        <main>
            <div class="px-3  mt-10">
                <div class="List">
                    <a href="#" class="inline-block">
                        <img src="../assets/Maleya.jpg" alt="artiste" class="object-cover">
                    </a>
                     <a href="#" class="inline-block">
                        <img src="../assets/Maleya.jpg" alt="artiste" class="object-cover">
                    </a>
                    <a href="#" class="inline-block">
                        <img src="../assets/Maleya.jpg" alt="artiste" class="object-cover">
                    </a>
                    <a href="#" class="inline-block">
                        <img src="../assets/Maleya.jpg" alt="artiste" class="object-cover">
                    </a>
                    <a href="#" class="inline-block">
                        <img src="../assets/Maleya.jpg" alt="artiste" class="object-cover">
                    </a>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import searchBar from './searchBar.vue'

    export default {
        name: "mostPopular",
        components: {
            searchBar
        }
    }
</script>

<style>
    .List {

        display: flex;
        min-width: 300px;
        flex-flow: row wrap;
    }

    a {

        width: 160px;
        height: 160px;
        border-radius: 160px;

    }

    img {
        width: 180px;
        height: 180px;
        /* border-radius: 40px; */
    }
</style>