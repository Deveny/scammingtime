$(document).ready(function () {

    $(".nav").on({
        mouseenter: function(){
          gsap.to('.nav img', {
          duration: 0.3,
          marginTop: "-2.2vw",
          x:-10,
          ease: "Expo. easeOut"
        });
      },
    
        mouseleave: function(){
            gsap.to('.nav img', {
          duration: 0.3,
          marginTop: "-2.9vw",
          x:0,
          ease: "Expo. easeOut"
        });     }
    });

  });