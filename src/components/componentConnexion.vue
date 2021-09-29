<template>
    <div class="__containerConnexion w-auto mt-24">
        <div class="__inputGroupPhone w-80 py-3 mb-8">
            <label for="phoneNumber" class="hidden">phoneNumber</label>
            <input type="number" name="phoneNumber" id="phoneNumber" class="outline-none w-72 h-14 border border-gray-500 text-xl text-center  rounded-full focus:border-blue-700" placeholder="Numéro de téléphone" autofocus>
        </div>
        <div class="__inputGroupPassword w-80 py-2">
            <label for="password" class="hidden">password</label>
            <input type="password" name="password" id="password" class="outline-none border border-gray-500 w-72 h-14  text-xl text-center  rounded-full focus:border-blue-700" placeholder="Mot de passe">
        </div>
        <div class="__passwordForget">
            <a href="#" class="text-blue-400 text-sm">Mot de passe oublié?</a>
        </div>
        <button type="submit" class="w-72 h-14 mt-5 bg-blue-400 rounded-full  text-xl text-white font-semibold">Connectez-vous</button>
        <div class="__newOnNjoka mt-10">
            <p class="text-gray-400">
                Nouveau sur Njoka? <router-link to="/componentInscription" class="text-green-400 text-md border-b border-green-400">cliquez ici pour vous inscrire</router-link>
            </p>
        </div>  
    </div>
    <navbar />
</template>

<script>
import navbar from './navbar.vue'
export default {
  components: { navbar },
    name: "componentConnexion"
}
</script>