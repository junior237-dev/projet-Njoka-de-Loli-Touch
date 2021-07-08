<template>
    <div class="__header  w-full h-16  shadow-lg bg-white">
        <a href="#" class="inline-block float-left  w-10  ml-3 mt-5">
            <svg class="icon w-7 h-7">
                <use xlink:href="../../public/icones/sprite (1).svg#arrow"></use>
            </svg>
        </a>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "composantRetour"
}
</script>