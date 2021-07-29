<template>
    <div class="container">
        <div class="carouselTitle">Playlist</div>
        <div class="carousel1">
            <div class="item">
                <div class="containerImage1"></div>
                <div class="description">
                    <div class="itemTitle mt-2 text-left text-tiny font-semibold leading-none">La Ndjoka des experts  <span class="viewNumber block mt-1 text-xs text-blue-400  font-light">320 vues</span></div>
                    <div class="info text-left mt-3 flex items-end justify-between">
                        <span class="info inline-block text-left text-tiny">
                            titres: 50
                            <br>
                            durée: 3h
                            <br>
                            créé le 28-07-2021
                        </span>
                        <span class="appreciations inline-block">
                            <img src="../assets/icones/points-verticaux.png" alt="point-verticaux" class="h-4 w-4">
                        </span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="containerImage2"></div>
                <div class="description">
                    <h4>Mon titre</h4>
                    <p>Ici la description pour tester le carroussel</p>
                </div>
            </div>
            <div class="item">
                <div class="containerImage3"></div>
                <div class="description">
                    <h4>Mon titre</h4>
                    <p>Ici la description pour tester le carroussel</p>
                </div>
            </div>
            <div class="item">
                <div class="containerImage4"></div>
                <div class="description">
                    <h4>Mon titre</h4>
                    <p>Ici la description pour tester le carroussel</p>
                </div>
            </div>
            <div class="item">
                <div class="containerImage5"></div>
                <div class="description">
                    <h4>Mon titre</h4>
                    <p>Ici la description pour tester le carroussel</p>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    import image from '../assets/aveiroDjess.jpg'
    export default {
        name: 'slideSystem',
        data () {
            return {
                image
            }
        }
    }
</script>

<style lang="postcss">
    @import '../../dossierCss/slideSystemCss.css';
</style>
