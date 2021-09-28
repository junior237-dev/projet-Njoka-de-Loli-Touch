<template>
    <div class="header max-w-lg mx-auto shadow-lg h-16 mb-1">
        <span class="back inline-block text-3xl cursor-pointer text-black py-2" @click="back">
            <i class="bi bi-arrow-left float-left"></i>
        </span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "composantRetour",
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
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