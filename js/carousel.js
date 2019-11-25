$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText : ["",""],
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:3,
            nav:true
        },
        768:{
            items:5,
            nav:true
        },
        992: {
            items:7,
            nav: true
        },
        1200: {
            items: 7,
            nav: true
        }
    }
});
          