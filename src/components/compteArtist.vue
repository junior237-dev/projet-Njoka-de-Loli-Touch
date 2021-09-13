<template>
    <div class="topBar">
        <a href="#options" class="border-l border-gray-200"><i class="fas fa-ellipsis-v"></i></a>
        <a href="#add-to-cart" class="border-l border-gray-200"><i class="fas fa-cart-arrow-down"></i></a>
        <a href="#search" class="border-l border-gray-200"><i class="fas fa-search"></i></a>
        <a href="#back" class="link" style="float:left"><i class="fas fa-arrow-left"></i></a> 
    </div>

    <div class="artist">
        <img src="../assets/Maleya2.jpg" class="object-cover" alt="X-Maleya">
        <div class="txt-block">
            <span class="block artistName">X-Maleya</span>
            <i class="fas fa-users"></i> 12k Abonnés
            <button class="btn block">S'abonner</button>
        </div>
    </div>

    <div>
        <slide-system :itemInformations="music"/>
    </div>
</template>

<script>
import slideSystem from './slideSystem.vue'
import carouselParams from "../../dossiersJs/carouselParams"

export default {
    name: 'compteArtist',
    components: {
        slideSystem
    },

    setup () {
        let music = carouselParams.MyMusic[0]
        console.log(music)

        return {
            music
        }
    }
}
</script>

<style scoped>
.topBar {
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.topBar a{
    float: right;
    padding: 15px 25px 15px;
    font-size: 25px;
}

.topBar a:hover {
    cursor: pointer;
}

@media screen and (max-width: 300px) {
    .topBar a {
        padding: 15px 20px 15px;
    }
}

@media screen and (max-width: 248px) {
    .topBar a {
        padding: 15px 18px 15px;
    }
}

.artist {
    position: relative;
}

.artist img {
    width: 100%;
    max-height: 80vh;
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
    font-size: 55px;
}

.artist .txt-block .btn {
    padding: 8px;
    margin-top: 10px;
    font-size: 20px;
    border-radius: 10px;
    background-color: rgba(76, 0, 255, 0.952);
}

@media screen and (max-width: 414px) {
    .artist .txt-block .artistName {
        font-size: 45px;
    }

    .artist .txt-block {
        padding: 30px;
    }
}

@media screen and (max-width: 356px) {
    .artist .txt-block .artistName {
        font-size: 35px;
    }

    .artist .txt-block {
        padding: 20px;
    }
}

@media screen and (max-width: 290px) {
    .artist .txt-block .artistName {
        font-size: 25px;
    }

    .artist .txt-block {
        padding: 10px;
    }

    .artist .txt-block .btn {
        padding: 8px;
        font-size: 17px;

    }
}
</style>