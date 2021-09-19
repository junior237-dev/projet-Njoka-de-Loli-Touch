<template>
    <div class="max-w-md mx-auto min-h-screen overflow-auto bg-blue-500 mt-0">
            <search-bar class="fixed top-0 z-10 left-0 right-0"/>
        <main class="mt-20">
            <div class="px-3">
                <div class="grid grid-cols-2 text-center  pt-6">
                    <div class="mb-5">
                        <span class="inline-block">
                            <img src="../assets/xmaleya.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">X-maleya</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/tenor.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Tenor</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/Lydol.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Lydol</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/cysoul.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Cysoul</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/charlotteDipanda.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Charlotte Dipanda</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/happy.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Happy</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/jovi.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Jovi</span>
                    </div>
                    <div class=" mb-5">
                        <span class="inline-block">
                            <img src="../assets/aveiroDjess.jpg" alt="artiste" class="object-cover rounded-full w-full max-h-40 shadow-md border-2 border-blue-400">
                        </span>
                        <br>
                        <span class="text-center text-white text-light text-md">Aveiro Djess</span>
                    </div>
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

