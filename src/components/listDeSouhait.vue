<template>
    <ComposantRetour>
        <span class="name">List de Souhaits</span>
        <span class="option">Editer</span>
    </ComposantRetour>

    <div class="details" v-for="i in 2" :key="i">
        <div class="img">
            <img src="../assets/xmaleya.jpg" alt="X MAleya">
        </div>
        <div class="text">
            <span class="title">Cardio</span>
            <span class="artist">X-maleya</span>
            <span class="price">500 fcfa</span>
        </div>

        <i class="fas fa-ellipsis-v"></i>
    </div>
    <navbar />
</template>

<script>
import ComposantRetour from "./composantRetour.vue";
import Navbar from './navbar.vue';
export default {
    name: 'listDeSouhait',
    components: {
        ComposantRetour,
        Navbar
    }
}
</script>

<style scoped>
.details {
    padding: 25px;
    padding-left: 5px;
    display: flex;
    position: relative;
}

.details .img {
    width: 120px;
    margin-right: 15px;
}

.details .text span {
    display: block;
    width: fit-content;
}

.details .text span.title {
    font-weight: bold;
    font-size: 23px;
}

.details .text span.artist {
    font-weight: bold;
    color: rgb(165, 165, 165);
}

.details .text span.price {
    margin-top: 35px;
}

.details i {
    font-size: 25px;
    position: absolute;
    right: 10px;
}

.header {
    justify-content: space-around;
    padding-left: 0;
}

.header span {
    display: block;
    padding: 17px;
    font-weight: bold;
}

.header span.name {
    font-size: 20px;
}

.header span.option {
    border-left: 1px solid rgb(165, 165, 165);
    padding-top: 18px;
}

@media screen and (max-width: 332px) {
    .header span.option, .header span.name {
        font-size: 5vw;
        padding-top: 19px;
    }
}

@media screen and (max-width: 310px) {
    .header span.option, .header span.name {
        font-size: 4.85vw;
    }
}

@media screen and (max-width: 301px) {
    .header span.option, .header span.name {
        font-size: 4.2vw;
    }
}
</style>