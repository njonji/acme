
 /* PRELOADER */
 $(window).on("load", function() {
    $("#status").fadeOut();
    $("#preloader").fadeOut();
})



/* SMOOTH SCROLL*/
jQuery(document).ready(function () {
    
    $("a.smooth-scroll").click(function(e) {
      e.preventDefault()
      //Get section ID like #about itd...
      var section_id = $(this).attr("href");
      $("html, body").animate({
        scrollTop:$(section_id).offset().top 
      }, 1250)
  })
  }) 
  /* SMOOTH SCROLL END*/



  const navLinks = document.querySelectorAll(".nav-link ") 

/* MAIN NAV LOGIC */
var scroll = $(document).scrollTop();
var navHeight = $('.navbar').outerHeight();
$(document).ready(function() {

    $(window).on('scroll', function() {
        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight) {
            $('.navbar').addClass('animate');
            navLinks.forEach(link => {
             link.classList.add("nav-link__black")
            })
        } else {
            $('.navbar').removeClass('animate');
            navLinks.forEach(link => {
                link.classList.remove('nav-link__black')
                }) 
        }
        if(scrolled > scroll) {
            $('.navbar').removeClass('sticky');
        } else {
            $('.navbar').addClass('sticky');
        }

        scroll = $(document).scrollTop();


    })
})


/* NOVA STRANICA JS */

const whatBtns = document.querySelectorAll(".whatCard__title") 
const processBtns = document.querySelectorAll(".processCard__button") 

whatBtns.forEach(btn => {
    btn.addEventListener("click", e => {

        if(e.target.classList.contains("whatCard__title")) {
             e.target.nextElementSibling.classList.toggle("showTextWhat")
 
        }
        if(e.target.classList.contains("whatCard__title--h4")) {
             e.target.parentElement.nextElementSibling.classList.toggle("showTextWhat")
        }
        
    })
})
processBtns.forEach(btn => {
    btn.addEventListener("click", e => {

             e.target.nextElementSibling.classList.toggle("showTextProcess")
             e.target.nextElementSibling.classList.toggle("processCard__hiddenText")
             e.target.style.display = 'none';
 
        })
  

})







