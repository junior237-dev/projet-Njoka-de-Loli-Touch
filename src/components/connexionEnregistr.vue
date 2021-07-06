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
                                Nouveau sur Njoka? <a href="#" class="font-bold text-green-400 text-lg">cliquez ici pour vous inscrire</a>
                            </p>
                        </div>  
                   </div>

                   <!-- pour les inscriptions -->
                   <div class="__containerInscription w-auto mt-20" v-else if="!visible">
                       <div class="flex flex-row flex-wrap">
                            <div class="__contry w-80 py-3 mb-8 bg-blue-50 rounded-full">
                                <!-- <img src="../assets/cameroun.png" alt="country" class="w-7 h-7 "> -->
                                <label for="country" class="hidden">country</label>
                                <select name="country" id="country" class="w-40 h-10 text-lg bg-blue-50 shadow-none">
                                    <option value="Cameroun">Cameroun</option>
                                    <option value="Cote d'Ivoire">Côte d'Ivoire</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Congo">Congo</option>
                                </select>
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
        let visible = true
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