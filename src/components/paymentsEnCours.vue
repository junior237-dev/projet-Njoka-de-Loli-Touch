<template>
  <ComposantRetour />
  <div class="tabs">
        <div class="verifier active">
            <span class="num">1</span>
            <span class="text ml-1">Verifier</span>
        </div>

        <div class="payer">
            <span class="num">2</span>
            <span class="text ml-1">Payer</span>
        </div>

        <div class="valider">
            <span class="num">3</span>
            <span class="text ml-1">Valider</span>
        </div>
    </div>
    
    <div class="body">

        <div class="details">
            <div class="img">
                <img src="../assets/xmaleya.jpg" alt="X MAleya">
            </div>
            <div class="text">
                <span class="title">Cardio</span>
                <span class="artist">X-maleya</span>
                <span class="price">500 fcfa</span>
            </div>
        </div>

        <span class="times">x1</span>
    </div>

    <div class="footer">
      <div class="total">
        <div class="text"><span>Total: </span> <span class="text-black">500 fcfa</span></div>
      </div>
      <div class="confirm">
        <span>CONFIRMER LE PAIEMENT</span>
      </div>
    </div>
</template>

<script>
import ComposantRetour from "./composantRetour.vue";

export default {
    name: 'paymentsEnCours',

    components: {
        ComposantRetour
    }
}
</script>

<style scoped>
.tabs {
    display: flex;
    margin-top: 10px;
}

.tabs .active {
    color: black;
}

.tabs .active .num {
    background-color: black;
}

.tabs .num {
    padding: 3px;
    background-color: rgb(165, 165, 165);
    display: block;
    height: 30px;
    margin-left: 30%;
    width: 30px;
    border-radius: 50px;
    color: white;   
}

.tabs div {
    padding: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: rgb(165, 165, 165);
    border: 1px solid rgba(187, 184, 184, 0.877);
    width: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
}

.tabs .payer {
    margin-left: -45px;
    border-left: 0;
}

.tabs .valider {
    margin-left: -45px;
    border-left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.details {
    padding: 25px;
    padding-left: 5px;
    display: flex;
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

.body .times {
    float: right;
    margin-right: 10px;
    font-weight: bold;
}

.footer {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    align-items: center;
}

.footer .total {
    color: rgb(165, 165, 165);
}

.footer .confirm {
    background-color: blue;
    padding: 15px;
    color: white;
}

@media screen and (max-width: 334px) {
    .footer {
        flex-direction: column;
    }

    .footer .total {
        margin-bottom: 5px;
    }

    .tabs {
        flex-direction: column;
    }

    .tabs .num {
        margin: 0;
    }

    .tabs div {
        text-align: center;
        margin-bottom: 10px;
    }

    .tabs .payer {
        margin-left: 0;
    }

    .tabs .valider {
        margin-left: 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .tabs .verifier {
        border-left: 0;
    }
}
</style>