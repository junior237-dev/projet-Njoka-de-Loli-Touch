<template>
    <nav class="navbar">
        <div class="py-2">
            <a href="#" @click.stop="activeClass">
                <svg class="icon"><use xlink:href="../assets/icones/sprite.svg#home"></use></svg>
                Accueil
            </a>
            <a href="#" @click.stop="activeClass">
                <svg class="icon"><use xlink:href="../assets/icones/sprite.svg#menu (1)"></use></svg>
                Catégories
            </a>
            <a href="#" @click.stop="activeClass">
                <svg class="icon"><use xlink:href="../assets/icones/sprite.svg#add-to-cart"></use></svg>
                Panier
            </a>
            <a href="#" @click.stop="activeClass">
                <svg class="icon"><use xlink:href="../assets/icones/sprite.svg#music-note-on-folder"></use></svg>
                Ma musique
            </a>
            <a href="#" class="active" @click.stop="activeClass">
                <svg class="icon"><use xlink:href="../assets/icones/sprite.svg#profile-user"></use></svg>
                Mon compte
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    setup (props, context) {
        console.log()
        return {
        
       }
   },
   methods: {
       activeClass (e) {
            let parent = e.currentTarget.parentNode
            if (e.currentTarget.classList.contains("active")) {
                return 
            }
            parent.querySelector("a.active").classList.remove("active")
            e.currentTarget.classList.add('active')
        }
   }
}
</script>

<style lang="postcss">

    .active {
        @apply bg-gray-100 mb-5 shadow-md opacity-100 p-1 h-auto text-blue-300 rounded-none
    }
    .navbar {
        @apply fixed z-50 bottom-0  h-16 w-full  pt-1  bg-white  border-t
    }
    .navbar a {
        @apply inline-block h-11 w-auto  mx-2.5  text-xs 
    }

    .navbar svg {
        @apply w-6  h-6  mx-auto  opacity-70  
    }

    @media only screen and (max-width: 360px) {
        .navbar svg {
            width: 1rem;
            height: 1rem;
        }

        .navbar a {
            font-size: 9px;
        }
    }
</style>