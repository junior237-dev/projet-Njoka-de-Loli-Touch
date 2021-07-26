
class Caroussel {

    /**
     * 
     * @callback moveCallbacks
     * @param {number} index 
     */

    /**
     * @param {HTMLelement} element
     * @param {object} options
     * @param {object} options.slidesToScroll qui définit le nombre d'éléments sur lesquels on scroll
     * @param {object} options.slidesVisible qui définit le nombre d'éléments visibles
     * @param {Boolean} [options.loop = false] doit-on boucler en fi de carousel
     */

    constructor (element, options = {}) {

        this.element = element
        this.options = Object.assign({},{
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let elementChildren = [].slice.call(element.children)
        this.currentItem = 0
        this.moveCallbacks = []
        this.isMobile = false
       
        this.carouselContainer = this.createDivWithClass('carouselContainer') //ceci représente root dans le tutoriel que je suis
        this.panorama = this.createDivWithClass('panorama') //ceci représente caroussel__container dans le même tutoriel
        
        

        this.carouselContainer.appendChild(this.panorama) 
        this.element.appendChild(this.carouselContainer)
        this.carouselContainer.setAttribute('tabindex', '0')
        
        
        this.items = elementChildren.map(element => {
            let item = this.createDivWithClass('caroussel__item')
            item.appendChild(element)
            this.panorama.appendChild(item)
            return item
        });

        this.setStyle()
        this.createNavigation()
        this.moveCallbacks.forEach(cb =>cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.carouselContainer.addEventListener('keyup', e => {
            if(e.key == "ArrowRight" || e.key == "Right") {
                this.next()
            } else if(e.key == "ArrowLeft" || e.key == "Left") {
                this.prev()
            }
        })
    }

    /**
     * 
     * @param {string} className
     * @returns {HTMLelement}
     * 
     */

    createDivWithClass (className) {
        
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * 
     * Applique les bonnes dimensions aux élémeents
     * 
     */

    setStyle () {
        let ratio = this.items.length /  this.slidesVisible
        this.panorama.style.width = (ratio*100)+'%'
        this.items.forEach(item => item.style.width = (100/this.slidesVisible) / ratio +"%");
    }

    /**
     * permet de créer des boutons de navigation pour le carousel
     */

    createNavigation(){
        let nextButton = this.createDivWithClass('carousel__next'), prevButton = this.createDivWithClass('carousel__prev')

        this.carouselContainer.appendChild(nextButton)
        this.carouselContainer.appendChild(prevButton)

        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))

        this.onMove (index => {
            if(index == 0) {
                prevButton.classList.add("carousel__prev__hidden")
            } else {
                prevButton.classList.remove("carousel__prev__hidden")
            }

            if (this.items[this.currentItem + this.slidesVisible] == undefined) {
                nextButton.classList.add("carousel__prev__hidden")
            } else {
                nextButton.classList.remove("carousel__prev__hidden")
            }
        })
    }

   

    next() {

        this.goToItem(this.currentItem + this.slidesToScroll)

    }

    prev() {
        this.goToItem(this.currentItem - this.slidesToScroll)
 
    }

    

    /**
     * 
     * permet de déplacer le carousel vers l'élément ciblé
     * @param {number} index 
     * 
     */
    goToItem (index) {
    
        if (index < 0) {
            index = this.items.length - this.options.slidesVisible
        } else if(index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] == undefined) {
            index = 0
        }
        let translateX = index * (-100 / this.items.length)
        this.panorama.style.transform = 'translate3D('+ translateX+'%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
        
    }

    /**
     * 
     * @param {moveCallbacks} cb 
     */

    onMove (cb) {
        this.moveCallbacks.push(cb)
        
    }

    onWindowResize () {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    /**
     * @returns {number}
     */

    get slidesToScroll () {
        return this.isMobile ? 1:this.options.slidesToScroll
    }

    /**
     * @returns {number}
     */

    get slidesVisible () {
        return this.isMobile ? 1:this.options.slidesVisible
    }

}




document.addEventListener('DOMContentLoaded', function(){
    let carousel = document.querySelector('.carousel')
    if(carousel){
        new Caroussel(carousel, {
            slidesToScroll: 1,
            slidesVisible: 3,
            loop: false
        })
        
    } else {
        return ''
    }
   
})

