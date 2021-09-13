<template>
    <div class="topBar">
        <a href="#options" class="border-l border-gray-200"><i class="fas fa-ellipsis-v"></i></a>
        <a href="#add-to-cart" class="border-l border-gray-200"><i class="fas fa-cart-arrow-down"></i></a>
        <a href="#search" class="border-l border-gray-200"><i class="fas fa-search"></i></a>
        <a href="#back" class="link" style="float:left"><i class="fas fa-arrow-left"></i></a> 
    </div>

    <div class="artist">
        <img src="../assets/Maleya.jpg" alt="X-Maleya">
        <div class="txt-block">
            <span class="block artistName">X-Maleya</span>
            <i class="fas fa-users"></i> 12k Abonnés
            <button class="btn block">S'abonner</button>
        </div>
    </div>

    <div class="pl-6 relative border-b-8 border-gray-100 collection" v-for="collection in collectiongrid" :key="collection.id">
        <span class="text-2xl mt-1 mb-4 block font-semibold heading">{{collection.heading}}</span>
        <div class="whitespace-nowrap overflow-auto pb-4 scrollbar-none scrollableDiv">
            <div class="w-56 inline-block mr-4 rounded-3xl shadow-md cursor-pointer" v-for="album in collection.albums" :key="album">
                <div class="img">
                    <img class="w-full h-48 rounded-t-3xl" :src="album.imgUrl" alt="Stanley Enow">
                </div>

                <div class="rounded-b-3xl pl-3 pt-2 pb-1 relative">
                    <div class="block text-lg font-semibold mb-4">{{album.title}}</div>
                    <div class="block text-sm mb-1">{{album.artist.name}}</div>
                    <div class="block text-sm mb-1">{{album.album}}</div>
                    <div class="block text-sm mb-1 items-center"><span>{{album.songCount}}</span>  <div class="block text-xs text-center w-6 absolute right-3 top-24 mt-1 text-black"><i class="fa fa-eye text-lg"></i><br> 1000k</div> </div>
                    <div class="block text-sm mb-1"><span>{{album.commingOutAt}}</span>  <i class="fa fa-share-alt absolute right-4 top-32 mt-2 mr-0.5 text-black"></i></div>
                    <div class="block text-sm mt-3 mb-2 text-blue-500"><span>{{album.price}} fcfa</span> <del class="ml-7">2000 fcfa</del> <i class="far fa-heart absolute right-4 top-42 mt-1 text-black"></i></div>
                </div>
            </div>
        </div>
        <div class="w-24 p-5 text-6xl absolute top-48 right-0 rounded-l-full bg-translusent-100 text-secondary-100 shadow-lg swipe"><i class="fa fa-angle-double-right"></i></div>
    </div>
</template>

<script>
import kmer from '../assets/kmer.jpg'
import micro from '../assets/micro.jpg'
import tenor from '../assets/tenor.png'
import six from '../assets/6.jpg'
import art from '../assets/art.jpg'
import jovi from '../assets/jovi.jpg'


export default {
    name: 'compteArtist',
    data() {
        return {
            collectiongrid: [
                {

                    id: 1,
                    heading: 'Album',
                    albums: [
                        {
                            imgUrl: kmer,
                            title: 'Soldier Like Ma Papa',
                            vue: '110k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'Tranches 2 vie',
                            vue: '5k',
                            artist: {
                                name: "Mink's",
                            },
                            album: 'Album',
                            songCount: '11 titre / 1h',
                            commingOutAt: '02/03/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: micro,
                            title: 'Stanley VS Enow',
                            vue: '15k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '01/05/2021',
                            price: 1500,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: tenor,
                            title: 'je fais ce que je veux',
                            vue: '45k',
                            artist: {
                                name: 'Tenor',
                            },
                            album: 'Album',
                            songCount: '1 titre / 03:45',
                            commingOutAt: '02/05/2021',
                            price: 200,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'Soldier Like Ma Papa',
                            vue: '58k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: kmer,
                            title: 'Tranches 2 vie',
                            vue: '75k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: jovi,
                            title: 'God don kam',
                            vue: '51k',
                            artist: {
                                name: 'jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                    ]
                },

                {
                    id: 2,
                    heading: 'Single',
                    albums: [
                        {
                            imgUrl: tenor,
                            title: 'Soldier Like Ma Papa',
                            vue: '15k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: micro,
                            title: 'Tranches 2 vie',
                            vue: '52k',
                            artist: {
                                name: "Mink's",
                            },
                            album: 'Album',
                            songCount: '11 titre / 1h',
                            commingOutAt: '02/03/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'Stanley VS Enow',
                            vue: '65k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '01/05/2021',
                            price: 1500,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'je fais ce que je veux',
                            vue: '126k',
                            artist: {
                                name: 'Tenor',
                            },
                            album: 'Album',
                            songCount: '1 titre / 03:45',
                            commingOutAt: '02/05/2021',
                            price: 200,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: jovi,
                            title: 'Soldier Like Ma Papa',
                            vue: '56k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: kmer,
                            title: 'Tranches 2 vie',
                            vue: '105k',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'God don kam',
                            vue: '55k',
                            artist: {
                                name: 'jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                    ]
                }, 
                
                {
                    id: 3,
                    heading: 'EP',
                    albums: [
                        {
                            imgUrl: jovi,
                            title: 'Soldier Like Ma Papa',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: "Mink's",
                            },
                            album: 'Album',
                            songCount: '11 titre / 1h',
                            commingOutAt: '02/03/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'Stanley VS Enow',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '01/05/2021',
                            price: 1500,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: kmer,
                            title: 'je fais ce que je veux',
                            artist: {
                                name: 'Tenor',
                            },
                            album: 'Album',
                            songCount: '1 titre / 03:45',
                            commingOutAt: '02/05/2021',
                            price: 200,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: micro,
                            title: 'Soldier Like Ma Papa',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: tenor,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'God don kam',
                            artist: {
                                name: 'jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                    ]
                },

                {
                    id: 4,
                    heading: 'Recommadation',
                    albums: [
                        {
                            imgUrl: six,
                            title: 'YAJE vol 2',
                            artist: {
                                name: 'Jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: micro,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: "Mink's",
                            },
                            album: 'Album',
                            songCount: '11 titre / 1h',
                            commingOutAt: '02/03/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: tenor,
                            title: 'Stanley VS Enow',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '01/05/2021',
                            price: 1500,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'je fais ce que je veux',
                            artist: {
                                name: 'Tenor',
                            },
                            album: 'Album',
                            songCount: '1 titre / 03:45',
                            commingOutAt: '02/05/2021',
                            price: 200,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'Soldier Like Ma Papa',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: kmer,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: jovi,
                            title: 'God don kam',
                            artist: {
                                name: 'jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                    ]
                },

                {
                    id: 5,
                    heading: 'Nouveauté',
                    albums: [
                        {
                            imgUrl: tenor,
                            title: 'Cardio',
                            artist: {
                                name: 'X Maleya',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: micro,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: "Mink's",
                            },
                            album: 'Album',
                            songCount: '11 titre / 1h',
                            commingOutAt: '02/03/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: art,
                            title: 'Stanley VS Enow',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '01/05/2021',
                            price: 1500,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: six,
                            title: 'je fais ce que je veux',
                            artist: {
                                name: 'Tenor',
                            },
                            album: 'Album',
                            songCount: '1 titre / 03:45',
                            commingOutAt: '02/05/2021',
                            price: 200,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: jovi,
                            title: 'Soldier Like Ma Papa',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: kmer,
                            title: 'Tranches 2 vie',
                            artist: {
                                name: 'Stanley Enow',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                        {
                            imgUrl: tenor,
                            title: 'God don kam',
                            artist: {
                                name: 'jovi',
                            },
                            album: 'Album',
                            songCount: '12 titre / 1h',
                            commingOutAt: '02/05/2021',
                            price: 1000,
                            currency: {
                                name: 'fcfa',
                            }
                        },
                    ]
                },
            ]
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

@media screen and (max-width: 350px) {
    .artist .txt-block .artistName {
        font-size: 45px;
    }

    .artist .txt-block {
        padding: 30px;
    }
}

@media screen and (max-width: 250px) {
    .artist .txt-block .artistName {
        font-size: 35px;
    }

    .artist .txt-block {
        padding: 20px;
    }
}
</style>