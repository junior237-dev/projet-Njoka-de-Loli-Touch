/**
 * permet de créer automatiquement et dynamiquement un élément de carousel
 * @param {string} className
 * @param {object} params
 */

export default function (className, params) {

   
    
    window.addEventListener('DOMContentLoaded', function(){
        let containerG =  document.querySelector(className)
        let containerCloned = containerG.cloneNode(true)
        let components = []
        let carousels = []
        for (let param in params) {
            components.push(params[param])
        }
        for (let i = 0; i < components.length; i++) {
            carousels.push(components[i][i])
        }

        let carouselTitle = containerG.firstElementChild.firstElementChild//containerG.firstChild.firstChild equivaut à div.carouselTitle
        carouselTitle.innerText = carousels[0].carouselTitle
        carouselTitle.nextElementSibling.setAttribute("class", "carousel"+carousels[0].carouselNumber) // carouselTitle.nextElementSibling equivaut à div.carousel1
        let divItem = carouselTitle.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild // carouselTitle.nextElementSibling.nextElementSibling equivaut à div.item
        // console.log(divItem)
        // let divItemClone = divItem.cloneNode(true)
        let itemsContent = []
        for (let i = 0; i < carousels[0].items.length; i++)  {
            itemsContent.push(carousels[0].items[i])
        }
        // console.log(itemsContent)
        for (let i = 0; i < itemsContent.length-1; i++) {

            if (i == 0) {

                divItem.firstElementChild.setAttribute('class', 'containerImage1')
                divItem.firstElementChild.style.background = "no-repeat center center / cover url('"+itemsContent[0].containerImageUrl+"')"
                let item_title = divItem.querySelector("div.itemTitle")
                item_title.innerHTML = ""+itemsContent[0].itemTitle+"  <span class='viewNumber block mt-1 text-xs text-blue-400  font-light'>"+itemsContent[0].views+" vues</span>"
                
                let span_info = item_title.nextElementSibling.firstElementChild
                span_info.innerHTML = "titres: "+itemsContent[0].titles+"<br> durée:"+itemsContent[0].duration+"<br> créé le "+itemsContent[0].creationDate.getMonth()
            
            } else if (i > 0) {

                let divItemClone = divItem.cloneNode(true)
                divItemClone.firstElementChild.setAttribute('class', 'containerImage'+itemsContent[i].containerImageNumber)
                divItemClone.firstElementChild.style.background = "no-repeat center center / cover url('"+itemsContent[i].containerImageUrl+"')"

                let carouselItemClone = divItem.parentElement.cloneNode(true)
                carouselItemClone.removeChild(carouselItemClone.firstChild)
                carouselItemClone.appendChild(divItemClone)
                // console.log(carouselItemClone)
                
                divItem.parentElement.parentElement.appendChild(carouselItemClone)

                let item_title = divItemClone.querySelector("div.itemTitle")
                item_title.innerHTML = ""+itemsContent[i].itemTitle+"  <span class='viewNumber block mt-1 text-xs text-blue-400  font-light'>"+itemsContent[i].views+" vues</span>"
                
                let span_info = item_title.nextElementSibling.firstElementChild
                span_info.innerHTML = "titres: "+itemsContent[i].titles+"<br> durée: "+itemsContent[i].duration+"<br> créé le "+itemsContent[i].creationDate
                
                // let carouselItemClone = divItem.parentElement.cloneNode(true)
                // carouselItemClone.removeChild(carouselItemClone.firstChild)
                // carouselItemClone.appendChild(divItemClone)
                // console.log(carouselItemClone)
                
                // divItem.parentElement.parentElement.appendChild(carouselItemClone)
                
                
                
            }
        }
    })

}