<template>
    <div class="category-element w-full h-28 rounded-3xl mb-1 bg-red-700" v-for="item in 18" :key="item">
        <div class="title-category w-2/5 float-left pl-3 pt-2">
            <span class="align-top text-white font-semibold text-sm leading-none">
                Bikutsi du Kmer
            </span>
        </div>
        <div class="illustration w-3/5 bg-yellow-700 float-right h-full shadow-lg">
            <img src="../assets/jovi.jpg" alt="tenor" class="object-cover w-full h-full" >
        </div>
    </div>
</template>
<script>
export default {
    name: "categoryElement"
}
</script>
<style>
    .illustration, .illustration img {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
    }

    .category-element {
        box-shadow: 0 1px 8px black;
    }
</style>