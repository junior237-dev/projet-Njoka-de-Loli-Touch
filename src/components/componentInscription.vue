<template>
    <div class="__containerInscription w-auto mt-12">
        <div class="flex flex-row flex-wrap">
            <div class="__contry w-80 py-2 mb-8 bg-blue-50 rounded-full p-4">
                <span class="inline-block float-left py-3 pl-3">
                    <img src="../assets/cameroun.png" alt="country" class="w-7 h-7 rounded-full">
                </span>
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
                    <select class="text-xl text-gray-600 font-light h-12 w-60 pt-1 pl-3 pr-10  hover:border-gray-400 focus:outline-none appearance-none">
                        <option>Cameroun</option>
                        <option>Congo</option>
                        <option>Guinnée equatoriale</option>
                        <option>Côte d'ivoire</option>
                    </select>
                </div>

            </div>
            <div class="__idAndPhoneNumber">
                <div class="inline-block w-16 py-3 mr-2 border border-gray-500 rounded-full text-center text-xl">+237</div>
                <div class="__inputGroupPhone inline-block py-3 ml-2 mb-8">
                    <label for="phoneNumber" class="hidden">phoneNumber</label>
                    <input type="number" name="phoneNumber" id="phoneNumber" class="outline-none border border-gray-500 w-60 h-14 text-xl text-center rounded-full focus:border-blue-700" placeholder="Numéro de téléphone">
                </div>
            </div>
            <div class="__inputGroupPassword py-2">
                <label for="password" class="hidden">password</label>
                <input type="password" name="password" id="password" class="outline-none border border-gray-500 w-80 h-14 text-xl rounded-full text-center focus:border-blue-700" placeholder="Entrer un mot de passe">
            </div>
            <div class="__inputGroupPassword2 pt-6">
                <label for="passwordConfirm" class="hidden">passwordConfirm</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" class="outline-none border border-gray-500 w-80 h-14 text-xl text-center rounded-full focus:border-blue-700" placeholder="Confirmer le mot de passe">
            </div>
            <button type="submit" class="w-80 h-16 mt-7 bg-blue-400 rounded-full  text-xl text-white font-semibold">Créer un compte</button>
            <div class="__confidentialConditions mt-10">
                <p class="text-gray-400">
                    En vous inscrivant vous acceptez <a href="#" class="text-blue-400 text-md underline">les conditions de confidentialité</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "componentInscription"
}
</script>