 require("jquery")

    document.addEventListener('DOMContentLoaded', function () {

        (function($){
            $('div.carousel').owlCarousel({
                items: 3
            })
        })(jQuery)
    })