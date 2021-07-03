<template>
    <div  class="__infoArticlePanier  w-ll h-auto   bg-white  mt-1">
        <div class="__Body">
            <div class="flex items-center py-5">
                <div class="__toDeleteGroup  inline-block w-10 h-10  mr-5">
                    <label for="toDelete" class="hidden">ToDelete</label>
                    <input type="checkbox" name="toDelete" id="toDelete" class="h-5 w-5">
                </div>
                <div class="__infoGroup  inline-block  w-60">
                    <div class="flex justify-center item-center">
                        <img :src="image" class="w-28 h-28  rounded-md  shadow-md  object-cover" alt="photoXmaleya">
                        <p class="text-left pl-2">
                            <span class="inline-block  font-bold  text-lg">{{intitule}}</span>
                            <br>
                            <span class="font-light  text-gray-300">{{nomArtiste}}</span>
                            <span class="inline-block  mt-9  text-sm  font-semibold">{{montant}}</span>
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "infoArticlePanier",

    props: {
        intitule: {
            type: String,
            default: 'Intitulé'
        },
        nomArtiste:  {
            type: String,
            default: 'Nom Artiste'
        },
        montant:  {
            type: String,
            default: 'Montant'
        },
        image: {
            type: String
        }
    },

    setup (props, context) {
        let intitule = props.intitule
        let nomArtiste = props.nomArtiste
        let montant = props.montant
        let image = props.image

        console.log(intitule)
        console.log(nomArtiste)
        console.log(montant)

        return {
            intitule,
            nomArtiste,
            montant,
            image
        }
    }

}
</script>