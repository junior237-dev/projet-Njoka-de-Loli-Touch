<template>
    <div>
        <composant-retour />
        <main class="container mt-10">
            <p class="text-center text-base px-3 text-gray-400">
                Sélectionner un opérateur pour voir les directives (optionnel)
            </p>
            <div class="__momoAndOm  mt-32 px-14  flex justify-between items-center">
                <a href="#" class="inline-block">
                    <img src="../../public/Momo.jpg"  class="mom  object-cover"  alt="transfert Momo">
                </a>
                <a href="#" class="inline-block">
                    <img src="../../public/orange-money-logo.png"  class="mo  object-cover"  alt="transfert orange-money">
                </a>
            </div>
            <div>
                <form action="">
                    <div class="pt-6  flex flex-row flex-wrap justify-center items-center">
                        <div>
                            <label for="tel" class="hidden">telephone</label>
                            <input type="number" name="tel" id="tel" class="w-64 h-12  mx-auto pl-2  outline-none  text-center  border rounded-lg shadow-md" placeholder="votre numéro de téléphone" required>
                        </div>
            
                        <div class="mt-2">
                            <label for="montant" class="hidden">montant</label>
                            <input type="text" name="montant" id="montant" class="w-64 h-12  mx-auto pl-2  outline-none  text-center text-lg  border  rounded-lg" v-model="montant" required disabled>
                        </div>

                        <button type="submit" class="w-64 h-10  mt-7   rounded-full  bg-purple-600 text-white text-xl">Payez</button>
                    </div>
                    <p class="w-72  mx-auto pt-4  text-center text-sm text-gray-400">
                        Artisan Pay
                        <a href="#" class="block">
                            <img src="../../public/artisan pay.jpg" alt="Artsan Pay" class="w-16 mx-auto mt-4 rounded-lg">
                        </a>   
                    </p>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
    import composantRetour from './composantRetour.vue'
    export default {
        name: "paiementMode",
        components: {
            composantRetour
        },
        setup () {
            let montant = "500 XAF"

            return {
                montant
            }
        }
    }
</script>

<style lang="postcss">
    a.inline-block img {
        @apply w-28 h-16  shadow-sm   rounded-md  border  border-gray-300
    }

    
    @media only screen and (max-height: 667px){

        div.mt-32 {
            margin-top: 80px
        }
    }

    @media only screen and (min-width: 410px) and (max-width: 415px) {

         a.inline-block:first-child {
            margin-left: 1.2rem;
        }

        a.inline-block:last-child {
            margin-right: 1.2rem;
        }
       
    }

    @media only screen and (max-width: 360px) {
        div.mt-32 {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        div.mt-32 a {
            max-width: 100px;
            margin-bottom: 2px;
            margin-right: 41px;
            height: auto;
        }

        div.mt-32 img {
            height: 50px;
            width: 75px
        }
    }



     @media only screen and (height: 568px){

        div.mt-32 {
            margin-top: 30px;
            padding-right: 10px
        }
    }
</style>