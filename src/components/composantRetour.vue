<template>
    <div class="header h-16 max-w-lg mx-auto shadow-lg bg-white">
        <a href="#" class="inline-block float-left w-10 ml-3 mt-5">
            <i class="bi bi-arrow-left text-2xl"></i>
        </a>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "composantRetour"
}
</script>