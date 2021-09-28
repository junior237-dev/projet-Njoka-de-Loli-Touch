<template>
    <div class="header flex flex-row justify-between max-w-lg mx-auto px-4 shadow-lg h-16 mb-1">
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