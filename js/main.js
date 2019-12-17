/* MAIN NAV LOGIC */
var scroll = $(document).scrollTop();
var navHeight = $('.navbar').outerHeight();
$(document).ready(function() {

    $(window).on('scroll', function() {
        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight) {
            $('.navbar').addClass('animate');
        } else {
            $('.navbar').removeClass('animate');
        }
        if(scrolled > scroll) {
            $('.navbar').removeClass('sticky');
        } else {
            $('.navbar').addClass('sticky');
        }

        scroll = $(document).scrollTop();


    })
})

/* NO SCROLL WHEN MODAL IS OPEN */
const body = document.querySelector("#body")

/* 
ADING TRANSPARENT BACKGROUND TO NAV */


const navbar = document.querySelector(".navbar")

const toggler = document.querySelector(".navbar-toggler")
const barOne = document.querySelector(".bar1")
const barTwo = document.querySelector(".bar2")
const barTre = document.querySelector(".bar3")


toggler.addEventListener("click", e => {
    barOne.classList.toggle("change1")
    barTwo.classList.toggle("change2")
    barTre.classList.toggle("change3")
    navbar.classList.toggle('transparentNav')
    barOne.classList.toggle('barsWhite')
    barTre.classList.toggle('barsWhite')
 
})
 /*  SHOWING NAV ON SCREEN */
 function stickyNav() {
    if(window.scrollY >= 50) {
      navbar.classList.add("maliNavNone")
        
    } else {
      navbar.classList.remove("maliNavNone")
      
    }
}
window.addEventListener("scroll", stickyNav);

/* MAIN NAV LOGIC END*/


/* POPUPS START */
const closeBtn = document.querySelectorAll('.services__popup--close');
const homeOwnerBtn = document.querySelector('#homeowners');
const homeOwnerPopup = document.querySelector('#popup--1');

const buildersBtn = document.querySelector('#builders');
const buildersPopup = document.querySelector('#popup--2');

const carpetBtn = document.querySelector('#carpet');
const carpetPopup = document.querySelector('#popup--3');

const archiBtn = document.querySelector('#archi');
const archiPopup = document.querySelector('#popup--4');

const devBtn = document.querySelector('#dev');
const devPopup = document.querySelector('#popup--5');

const busiBtn = document.querySelector('#busi');
const busiPopup = document.querySelector('#popup--6');

closeBtn.forEach(btn => btn.addEventListener('click', () => {
    homeOwnerPopup.style.display = 'none'
    buildersPopup.style.display = 'none'
    carpetPopup.style.display = 'none'
    archiPopup.style.display = 'none'
    devPopup.style.display = 'none'
    busiPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
}))



homeOwnerBtn.addEventListener('click', () => {
    homeOwnerPopup.style.display = 'block'
    navbar.classList.toggle("noDisplayNav")
    body.classList.add("bodyFixed")

})

homeOwnerPopup.addEventListener('click', e => {
    if(e.target === homeOwnerPopup )
    homeOwnerPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})



buildersBtn .addEventListener('click', () => {
    buildersPopup.style.display = 'block'
    body.classList.add("bodyFixed")
    
})
buildersPopup.addEventListener('click', e => {
    if(e.target === buildersPopup )
    buildersPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})


carpetBtn .addEventListener('click', () => {
    carpetPopup.style.display = 'block'
    body.classList.add("bodyFixed")
})
carpetPopup.addEventListener('click', e => {
    if(e.target === carpetPopup )
    carpetPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})


archiBtn .addEventListener('click', () => {
    archiPopup.style.display = 'block'
    body.classList.add("bodyFixed")
})
archiPopup.addEventListener('click', e => {
    if(e.target === archiPopup )
    archiPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})


devBtn .addEventListener('click', () => {
    devPopup.style.display = 'block'
    body.classList.add("bodyFixed")
})
devPopup.addEventListener('click', e => {
    if(e.target === devPopup )
    devPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})


busiBtn.addEventListener('click', () => {
    busiPopup.style.display = 'block'
    body.classList.add("bodyFixed")
})
busiPopup.addEventListener('click', e => {
    if(e.target === busiPopup )
    busiPopup.style.display = 'none'
    body.classList.remove("bodyFixed")
})
/* POPUPS END */


/* DESIGN SERVICE MODALS START */

const closeBtnModals = document.querySelectorAll('.design__wrapper--close');
const twoDplan = document.querySelector('#twodplan');
const twoDplanModal = document.querySelector('#twodplan--modal');

const allServices = document.querySelectorAll(".designServices")
const allWrappers = document.querySelectorAll('.design__wrapper');


allServices.forEach(service => service.addEventListener('click', () => {
    body.classList.add("bodyFixed")
}))
allWrappers.forEach(wrap => wrap.addEventListener('click', () => {
    body.classList.remove("bodyFixed")
}))
closeBtnModals.forEach(btn => btn.addEventListener('click', () => {
    twoDplanModal.style.display = 'none'
    body.classList.remove("bodyFixed")
}))


twoDplan.addEventListener('click', () => {
    twoDplanModal.style.display = 'block'
   
})

twoDplanModal.addEventListener('click', e => {
    if(e.target === twoDplanModal )
    twoDplanModal.style.display = 'none' 
})







/* DESIGN SERVICE MODALS END */


/* info accordian start */

const accBtnOne = document.querySelector('#button--1');
const panelOne = document.querySelector('#panel--1');

const plusOne = document.querySelector('#plus--1');
const minusOne = document.querySelector('#minus--1');


accBtnOne.addEventListener('click', () => {
    panelOne.classList.toggle("panelActive")
    plusOne.classList.toggle("plusClass")
    minusOne.classList.toggle("minusClass")
    accBtnOne.classList.toggle("noBorder")
    panelOne.classList.toggle("zInd--100")
    accBtnOne.classList.toggle("zInd--150")
})

const accBtnTwo = document.querySelector('#button--2');
const panelTwo = document.querySelector('#panel--2');

const plusTwo = document.querySelector('#plus--2');
const minusTwo = document.querySelector('#minus--2');


accBtnTwo.addEventListener('click', () => {
    panelTwo.classList.toggle("panelActive")
    plusTwo.classList.toggle("plusClass")
    minusTwo.classList.toggle("minusClass")
    accBtnTwo.classList.toggle("noBorder")
    panelTwo.classList.toggle("zInd--100")
    accBtnTwo.classList.toggle("zInd--150")
})

const accBtnThree = document.querySelector('#button--3');
const panelThree = document.querySelector('#panel--3');

const plusThree = document.querySelector('#plus--3');
const minusThree = document.querySelector('#minus--3');


accBtnThree.addEventListener('click', () => {
    panelThree.classList.toggle("panelActive")
    plusThree.classList.toggle("plusClass")
    minusThree.classList.toggle("minusClass")
    accBtnThree.classList.toggle("noBorder")
    panelThree.classList.toggle("zInd--100")
    accBtnThree.classList.toggle("zInd--150")
})

const faqs = document.querySelectorAll(".info__accordion--btn-FAQ")
const faqsPanels = document.querySelectorAll(".info__accordion--FAQ")
const accBtnFor = document.querySelector('#button--4');

const plusFor = document.querySelector('#plus--4');
const minusFor = document.querySelector('#minus--4');

accBtnFor.addEventListener('click', () => {
    plusFor.classList.toggle("plusClass")
    minusFor.classList.toggle("minusClass")
    faqs.forEach(faq => {
        faq.classList.toggle("panelActive")
    })
    faqs.forEach(faq => {
        faq.classList.toggle("collapsed")
    })
    faqsPanels.forEach(faq => {
        faq.classList.remove("show")
    })
})





/* ACCORDION RIGHT */
const accBtnFive = document.querySelector('#button--5');

const plusFive = document.querySelector('#plus--5');
const minusFive = document.querySelector('#minus--5');


accBtnFive.addEventListener('click', () => {
    plusFive.classList.toggle("plusClass")
    minusFive.classList.toggle("minusClass")
})


const accBtnSix = document.querySelector('#button--6');

const plusSix = document.querySelector('#plus--6');
const minusSix = document.querySelector('#minus--6');


accBtnSix.addEventListener('click', () => {
    plusSix.classList.toggle("plusClass")
    minusSix.classList.toggle("minusClass")
})


const accBtnSeven = document.querySelector('#button--7');

const plusSeven = document.querySelector('#plus--7');
const minusSeven = document.querySelector('#minus--7');


accBtnSeven.addEventListener('click', () => {
    plusSeven.classList.toggle("plusClass")
    minusSeven.classList.toggle("minusClass")
})
/* info accordian end */


/* services cards start */
const briefBtn = document.querySelector('#brief');
const briefContent = document.querySelectorAll(".serviceDisplay")

const briefPlus = document.querySelector("#briefPlus")
const briefMinus = document.querySelector("#briefMinus")

briefBtn.addEventListener('click', e => {
   e.target.classList.toggle("serviceBtnBorder")
    briefContent.forEach(brief => {
        brief.classList.toggle("activeFlex")
    })
    briefPlus.classList.toggle("plusClass")
    briefMinus.classList.toggle("minusClass")

})

const startBtn = document.querySelector('#start');
const startContent = document.querySelectorAll(".startDisplay")

const startPlus = document.querySelector("#startPlus")
const startMinus = document.querySelector("#startMinus")

startBtn.addEventListener('click', e => {
   e.target.classList.toggle("serviceBtnBorder")
    startContent.forEach(start => {
        start.classList.toggle("activeFlex")
    })
    startPlus.classList.toggle("plusClass")
    startMinus.classList.toggle("minusClass")

})

const bespokeBtn = document.querySelector('#bespoke');
const bespokeContent = document.querySelector(".bespokeDisplay")

const bespokePlus = document.querySelector("#bespokePlus")
const bespokeMinus = document.querySelector("#bespokeMinus")

bespokeBtn.addEventListener('click', e => {
   e.target.classList.toggle("serviceBtnBorder")
    bespokeContent.classList.toggle("activeFlex")
    bespokePlus.classList.toggle("plusClass")
    bespokeMinus.classList.toggle("minusClass")

})


/* services cards end */

/* about logic */

const aboutText = document.querySelector('.about__text');
const expand = document.querySelector('.about__text--expand');
const expandText = document.querySelector('.about__text--info');

expand.addEventListener('click', e => {
    e.preventDefault();
    expandText.classList.add("displayText")
    e.target.style.display = "none"
 })
expandText.addEventListener('click', e => {
    e.preventDefault();
 })
 aboutText.addEventListener('click', e => {
    e.preventDefault();
 })
/*  about logic end */









