$('.owl-carousel').owlCarousel({
  loop:true,
  margin:50,
  autoplay: true,
  responsiveClass:true,
  nav: false,
  responsive:{
      0:{
          items:1,

      },
      600:{
          items:7,

      },
      1000:{
          items:7,
      }
  }
});

$('.g-automated').owlCarousel({
  loop:true,
  margin:50,
  autoplay: true,
  responsiveClass:true,
  nav: false,
  navContainer: false,
  dots: false,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

$('.save-money').owlCarousel({
  loop: true,
  margin:0,
  autoplay: true,
  responsiveClass: true,
  nav: false,
  navContainer: false,
  dots: false,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:3,
      }
  }
});

$('.testimonials').owlCarousel({
  loop: false,
  margin: 40,
  autoplay: false,
  responsiveClass: true,
  nav: false,
  navContainer: false,
  dots: false,
  responsive:{
      0:{
          items:1,
          margin: 10,
      },
      600:{
          items:1,
          margin: 10,
      },
      1000:{
          items:2,
      }
  }
});