<template>
    <div class="w-full min-h-screen bg-blue-400 mt-0">
        <search-bar />
        <main>
            <div class="px-3  mt-10">
                <div class="flex justify-between flex-wrap flex-row pt-6">
                    <button class="mb-5">
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">X-maleya</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/tenor.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Tenor</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/Lydol.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Lydol</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/cysoul.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Cysoul</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/charlotteDipanda.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Charlotte Dipanda</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/happy.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Happy</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/jovi.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Jovi</span>
                    </button>
                    <button class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/aveiroDjess.jpg" alt="artiste" class="object-cover rounded-full w-40 h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Aveiro Djess</span>
                    </button>
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

