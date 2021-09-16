<template>
    <div class="artist">
        <img src="../assets/xmaleya.jpg" class="object-cover" alt="X-Maleya">
        <div class="txt-block">
            <span class="block artistName">X-Maleya</span>
            <i class="fas fa-users"></i> 12k Abonnés
            <button class="btn block">S'abonner</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bannerArtist',
}
</script>

<style lang="postcss" scoped>
.artist {
    position: relative;
}

.artist img {
    @apply w-full max-h-72
    
}

.artist .txt-block {
    padding: 40px;
    color: white;
    position: absolute;
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    bottom: 0;
    width: 100%;
}

.artist .txt-block .artistName {
    font-size: 2rem;
}

.artist .txt-block .btn {
    @apply p-2 mt-3 text-xl rounded-xl bg-blue-500
}

.artist .txt-block {
    padding: .4rem;
}

.artist .txt-block .artistName {
    font-size: 2rem;
}

</style>