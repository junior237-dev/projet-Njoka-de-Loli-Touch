const nameSpace = {
    "slidePlaylist": { 

       'aveiroDjess': { 
           name: "aveiro djess",
           url: '../src/assets/aveiroDjess.jpg',
           extension: '.jpg',
           likes: 23,
           views: 44,
           shares: 35
        },
        'charlotte': { 
            name: "charlotte dipanda",
            url: '../src/assets/charlotteDipanda.jpg',
            extension: '.jpg',
            likes: 87,
            views: 103,
            shares: 98
        },
        'kmer237': { 
            name: "kmer237",
            url: '../src/assets/kmer237.jpg',
            extension: '.png',
            likes: 87,
            views: 103,
            shares: 98
         },
         'cysoul': { 
            name: "cysoul",
            url: '../src/assets/cysoul.jpg',
            extension: '.jpg',
            likes: 87,
            views: 103,
            shares: 98
         },
         'experts': { 
            name: "experts",
            url: '../src/assets/experts.jpg',
            extension: '.jpg',
            likes: 87,
            views: 103,
            shares: 98
         },
        
    }
}

/**
 * permet de placer valablement des images dans les items d'un élément transformé en carousel 
 * @param {string} carouselDiv qui est un sélecteur css
 */

let carouselPictures =  function (carouselDiv) {

    let carousel = document.querySelector(carouselDiv)
    let carouselChildren = [].slice.call(carousel.children)
    let containerImages = carouselChildren.map(item => item.firstChild) //récupère les div qui contiendront les images à présenter
    let slidePlayslist = nameSpace.slidePlaylist
    let uri = []
    for (let item in slidePlayslist) {
        uri.push(slidePlayslist[item].url)
    }

    for (let i = 0; i < uri.length; i++) {
        containerImages[i].style.background = "no-repeat center center / cover url('"+uri[i]+"')"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    carouselPictures('.carousel1')
})
    