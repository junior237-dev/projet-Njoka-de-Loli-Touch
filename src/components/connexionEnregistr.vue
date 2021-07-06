<template>
    <div>
        <composant-retour>
            <ul class="w-76 py-5 mr-1  float-right">
                <li class="inline-block mx-2 active"><a href="#" class="text-md font-light  text-blue-400">Se connecter</a></li>
                <li class="inline-block mx-3 "><a href="#" class="text-md font-light text-green-400">S'enregistrer</a></li>
            </ul>
        </composant-retour>
        <main>
            <div class="__connexionAndInsciption m-12">
                <form action="" class="flex flex-row flex-wrap justify-center items-center">
                    <!-- pour la connexion -->
                   <div class="__containerConnexion w-auto mt-24" v-if="visible">
                        <div class="__inputGroupPhone w-80 py-3 mb-8">
                            <label for="phoneNumber" class="hidden">phoneNumber</label>
                            <input type="number" name="phoneNumber" id="phoneNumber" class="outline-none bg-blue-50 w-72 h-14  text-xl text-center  rounded-full active" placeholder="Numéro de téléphone">
                        </div>
                        <div class="__inputGroupPassword w-80 py-2">
                            <label for="password" class="hidden">password</label>
                            <input type="password" name="password" id="password" class="outline-none bg-blue-50 w-72 h-14  text-xl text-center  rounded-full" placeholder="Mot de passe">
                        </div>
                        <div class="__passwordForget">
                            <a href="#" class="text-blue-400 text-sm">Mot de passe oublié?</a>
                        </div>
                        <button type="submit" class="w-72 h-14 mt-5 bg-blue-400 rounded-full  text-xl text-white font-semibold">Connectez-vous</button>
                        <div class="__newOnNjoka mt-10">
                            <p class="text-gray-400">
                                Nouveau sur Njoka? <a href="#" class="text-green-400 text-md underline">cliquez ici pour vous inscrire</a>
                            </p>
                        </div>  
                   </div>

                   <!-- pour les inscriptions -->
                   <div class="__containerInscription w-auto mt-12" v-else if="!visible">
                       <div class="flex flex-row flex-wrap">
                            <div class="__contry w-80 py-2 mb-8 bg-blue-50 rounded-full p-4">
                                <span class="inline-block float-left py-3 pl-3">
                                    <img src="../assets/cameroun.png" alt="country" class="w-7 h-7 rounded-full">
                                </span>
                                <!-- <label for="country" class="hidden">country</label>
                                <select name="country" id="country" class="w-40 h-10 text-lg bg-blue-50 shadow-none">
                                    <option value="Cameroun">Cameroun</option>
                                    <option value="Cote d'Ivoire">Côte d'Ivoire</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Congo">Congo</option>
                                </select> -->
                                <div class="relative self-center float-right">
                                    <svg class="text-white bg-blue-400 h-7 w-7 absolute top-0 right-0 m-3 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 38 22" version="1.1">
                                        <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                        <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#ffffff" fill-rule="nonzero">
                                                <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                    <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <select class="text-xl text-gray-600 font-light h-12 w-60 pt-1 pl-3 pr-10 bg-blue-50 hover:border-gray-400 focus:outline-none appearance-none">
                                        <option>Cameroun</option>
                                        <option>Congo</option>
                                        <option>Guinnée equatoriale</option>
                                        <option>$ote d'ivoire</option>
                                    </select>
                                </div>

                            </div>
                            <div class="__idAndPhoneNumber">
                                <div class="inline-block w-16 py-3 mr-2 bg-blue-50 rounded-full text-center text-xl">+237</div>
                                <div class="__inputGroupPhone inline-block py-3 ml-2 mb-8">
                                        <label for="phoneNumber" class="hidden">phoneNumber</label>
                                        <input type="number" name="phoneNumber" id="phoneNumber" class="outline-none bg-blue-50 w-60 h-14 text-xl text-center rounded-full active" placeholder="Numéro de téléphone">
                                </div>
                            </div>
                            <div class="__inputGroupPassword py-2">
                                <label for="password" class="hidden">password</label>
                                <input type="password" name="password" id="password" class="outline-none bg-blue-50 w-80 h-14 text-xl rounded-full text-center" placeholder="Entrer un mot de passe">
                            </div>
                            <div class="__inputGroupPassword2 pt-6">
                                <label for="passwordConfirm" class="hidden">passwordConfirm</label>
                                <input type="password" name="passwordConfirm" id="passwordConfirm" class="outline-none bg-blue-50 w-80 h-14 text-xl text-center rounded-full" placeholder="Confirmer le mot de passe">
                            </div>
                            <button type="submit" class="w-80 h-16 mt-7 bg-blue-400 rounded-full  text-xl text-white font-semibold">Créer un compte</button>
                            <div class="__confidentialConditions mt-10">
                                <p class="text-gray-400">
                                    En vous inscrivant vous acceptez <a href="#" class="text-blue-400 text-md underline">les conditions de confidentialité</a>
                                </p>
                            </div>
                       </div>
                   </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import composantRetour from './composantRetour.vue'
export default {
    name: "connexionEnregistr",
    components: {
        composantRetour
    },
    setup () {
        let visible = !true
        return {
            visible
        }
    }
}
</script>

<style lang="postcss">
     li.active a{
        @apply font-semibold text-lg border-b rounded-none shadow-md p-2
    }

</style>