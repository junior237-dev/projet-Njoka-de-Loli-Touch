<template>
    <div class="header shadow-lg h-16 mb-1">
        <span class="back inline-block text-3xl text-black py-2">
            <i class="bi bi-arrow-left"></i>
        </span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "composantRetour"
}
</script>

<style>
    .header {
        display: flex;
        justify-content: space-around;
    }

    @media screen and (max-width: 301px) {
        .header i {
            font-size: 25px;
        }
    }
</style>