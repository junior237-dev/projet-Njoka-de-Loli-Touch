<template>
    <nav class="navbar">
        <div class="py-2">
            <a href="#">
                <svg class="icon">
                    <use xlink:href="../../public/icones/sprite.svg#home"></use>
                </svg>
                Accueil
            </a>
            <a href="#">
                <svg class="icon">
                    <use xlink:href="../../public/icones/sprite.svg#menu (1)"></use>
                </svg>
                Catégories
            </a>
            <a href="#">
                <svg class="icon">
                    <use xlink:href="../../public/icones/sprite.svg#add-to-cart"></use>
                </svg>
                Panier
            </a>
            <a href="#">
                <svg class="icon">
                    <use xlink:href="../../public/icones/sprite.svg#music-note-on-folder"></use>
                </svg>
                Ma musique
            </a>
            <a href="#" :class="Active">
                <svg class="icon">
                    <use xlink:href="../../public/icones/sprite.svg#profile-user"></use>
                </svg>
                Mon compte
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    setup () {

       /* "Active" est la propriété que j'utilise
        *pour habiller un élément de la navbar 
         *sur lequel on clique */

       let Active = [
                "bg-gray-100", 
                "mb-5", 
                "shadow-md",
                "opacity-100",
                "px-1",
                "py-1",
                "h-auto",
                "text-blue-300"   
            ]


       return {
           Active
       }
   }
}
</script>

<style lang="postcss">
    .navbar {
        @apply fixed bottom-0  h-16 w-full   pt-1  bg-white  border-t
    }
    .navbar a {
        @apply text-xs inline-block h-11 mx-2.5
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