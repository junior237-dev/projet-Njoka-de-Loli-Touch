export default class Carousel {
    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll pour définir le nombre d'éléments à slider
     * @param {Object} options.slidesisible pour définir le nombre d'éléments visibles
     * @param {Object} options.loop 
     */

    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1, 
            loop: false
        }, options)

        this.isMobile = false
        this.currentItem = 0
        this.moveCallbacks = []
        let children = [].slice.call(this.element.children)
        this.root = this.createDivWithClass('carousel')
        
        this.panorama = this.createDivWithClass('carousel__panorama')
        this.root.appendChild(this.panorama)
        this.element.appendChild(this.root)
        this.items = children.map(child => {
            let item = this.createDivWithClass("carousel__item")
            item.appendChild(child)
            this.panorama.appendChild(item)
            return item
        })

        this.setStyle()
        this.createNavigation()
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))

    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */

    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    setStyle () {
        let ratio = this.items.length / this.slidesVisible
        this.panorama.style.width = (100 * ratio) +'%'
        this.items.forEach (item => item.style.width = ((100 / this.slidesVisible) / ratio) +"%" )
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel__next'), prevButton = this.createDivWithClass('carousel__prev')
        
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)

        nextButton.addEventListener("click", this.next.bind(this))
        prevButton.addEventListener("click", this.prev.bind(this))
 
        if(this.options.loop === true) {
            return
        }

        this.onMove (index => {
            if (index == 0) {
                prevButton.classList.add("carousel__hidden")
            } else {
                prevButton.classList.remove("carousel__hidden")
            }

            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add("carousel__hidden")
            } else {
                nextButton.classList.remove("carousel__hidden")
            }
        })
    }

    next() {
        this.goToItem(this.currentItem + this.slidesToScroll)
    }

    prev() {
        this.goToItem(this.currentItem - this.slidesToScroll)
    }

    goToItem (index) {
        if (index < 0) {
            index = 0
        } else if (index > this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && (index > this.currentItem) )){
            index = 0
            
        }
        
        let translateX = -(100/this.items.length) * index
        this.panorama.style.transform = "translateX("+translateX+"%)"
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    onMove (cb) {
        this.moveCallbacks.push(cb)
    }

    onWindowResize () {
        let mobile = window.innerWidth < 600
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    get slidesToScroll() {
        return this.isMobile ? 2:this.options.slidesToScroll
    }

    get slidesVisible () {
        return this.isMobile ? 2: this.options.slidesVisible
    }
}


// document.addEventListener('DOMContentLoaded', function () {

//     new Carousel (document.querySelector("div.carousel1"), {
//         slidesToScroll: 2,
//         slidesVisible: 3,
//         loop: true
//     })

// })
