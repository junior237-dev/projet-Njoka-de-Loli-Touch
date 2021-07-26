<template>
    <div class="componentContainer w-full h-auto bg-red-600 mb-12">
        <div class="blockTitle w-full text-black text-2xl text-left font-semibold ml-10 mt-10 mb-10">Mes Playlists</div>
        <div class="carousselSysteme w-auto px-10 ">
            <div class="carousel w-auto">
                <div class="item rounded-xl border-1 shadow-7xl">
                    <div class="image">
                        <img src="../assets/experts.jpg" alt="profil" class="w-full rounded-t-xl">
                    </div>
                    <div class="contenu w-full h-auto bg-gray-50 px-4 border-2 border-b-4  border-gray-300 shadow-sm rounded-b-3xl">
                        <span class="playlistTitle block text-black text-tiny text-left mt-3">La njoka des z'experts</span>
                        <div class="informations flex justify-between items-start mt-6">
                            <div class="info inline-block text-left text-tiny text-gray-400">
                                titres: <span class=" text-gray-700 font-semibold">50</span>
                                <br>
                                durée: <span class=" text-gray-700 font-semibold">3heures</span>
                                <br>
                                <span class="text-xs text-red-500 font-semibold">créée le 20-06-2021</span>
                            </div>
                            <!-- <div class="appreciations">
                                <div class='views block w-auto h-auto mb-1'>
                                    <img src="../assets/icones/eye.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500  font-light mx-auto hidden">100</a>
                                </div>
                                <div class='views block w-10 h-10 mb-1'>
                                    <img src="../assets/icones/share.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500 font-semibold mx-auto hidden">100</a>
                                </div>
                                <div class='views block w-10 h-10'>
                                    <img src="../assets/icones/heart.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500 font-semibold mx-auto hidden">100</a>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="item rounded-xl border-1 shadow-7xl">
                    <div class="image">
                        <img src="../assets/experts.jpg" alt="profil" class="w-full rounded-t-xl">
                    </div>
                    <div class="contenu w-full h-auto bg-gray-50 px-4 border-2 border-b-4  border-gray-300 shadow-sm rounded-b-3xl">
                        <span class="playlistTitle block text-black text-tiny text-left mt-3">La njoka des z'experts</span>
                        <div class="informations flex justify-between items-start mt-6">
                            <div class="info inline-block text-left text-tiny text-gray-400">
                                titres: <span class=" text-gray-700 font-semibold">50</span>
                                <br>
                                durée: <span class=" text-gray-700 font-semibold">3heures</span>
                                <br>
                                <span class="text-xs text-red-500 font-semibold">créée le 20-06-2021</span>
                            </div>
                            <!-- <div class="appreciations">
                                <div class='views block w-auto h-auto mb-1'>
                                    <img src="../assets/icones/eye.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500  font-light mx-auto hidden">100</a>
                                </div>
                                <div class='views block w-10 h-10 mb-1'>
                                    <img src="../assets/icones/share.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500 font-semibold mx-auto hidden">100</a>
                                </div>
                                <div class='views block w-10 h-10'>
                                    <img src="../assets/icones/heart.png" alt="views" class="h-5 w-5 mx-auto ">
                                    <a href="#" class="text-xs text-blue-500 font-semibold mx-auto hidden">100</a>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'slideSystem',
    }
</script>

<style lang="postcss">

    .item {
        @apply mx-2
    }

    @media screen and (max-width: 642px)  { 
        span.playlistTitle {
            font-size: .55em;
            font-weight: bold;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        }

        .item {
            width: auto
        }

        div.informations {
            flex-flow: row wrap
        }

        div.info {
            font-size: .7em;
            width: 100%;
        }

        div.info span {
            font-size: .9em
        }

        div.info span:last-child {
            font-size: .7em;
            color: rgba(138, 9, 9, 0.589)
        }

        div.appreciations{
            width: 100%;
            display: flex;
            align-items: center;

        }

        div.appreciations div {
            display: block;
            margin: 0 8px;
            width: auto;
            padding: 0
        }

        
        div.appreciations div img {
            height: 10px;
            width: 10px
        }

        

        div.appreciations div a {
            display: none
        }
        
    }

    
    .carouselContainer {
        @apply relative
    }

    .panorama {
        /* background-color: rgb(114, 124, 93); */
        transition: transform .5s;
        transform: translate3d(0, 0, 10px)
    }
    .panorama::after {
        content: '';
        clear: both;
        display: table
    }

    .caroussel__item {
        @apply float-left
    }

    .carousel__prev:hover, .carousel__next:hover {
        transform: scale(1.2)
    }

    .carousel__prev, .carousel__next {
        position: absolute;
        width: 40px;
        height: 40px;
        background: rgb(240, 219, 219);
        border-radius: 50%;
        top: 50%;
        right: 0;
        margint-top: -20px;
        cursor: pointer;
        border: 1px solid rgba(163, 163, 163, 0.24);
        box-shadow: 0 15px 35px #3232321a, 0 5px 15px #0000001a;
        transition: transform .3s, opacity .3s;

    }

    .carousel__prev {
        right: auto;
        left: -20px;
    }
    .carousel__prev__hidden {
        @apply hidden
    }
</style>
