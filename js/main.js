/* MAIN NAV LOGIC */
const toggler = document.querySelector(".navbar-toggler")
const barOne = document.querySelector(".bar1")
const barTwo = document.querySelector(".bar2")
const barTre = document.querySelector(".bar3")



toggler.addEventListener("click", e => {
    barOne.classList.toggle("change1")
    barTwo.classList.toggle("change2")
    barTre.classList.toggle("change3")
})
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
}))



homeOwnerBtn.addEventListener('click', () => {
    homeOwnerPopup.style.display = 'block'
})

homeOwnerPopup.addEventListener('click', e => {
    if(e.target === homeOwnerPopup )
    homeOwnerPopup.style.display = 'none'
})



buildersBtn .addEventListener('click', () => {
    buildersPopup.style.display = 'block'
    
})
buildersPopup.addEventListener('click', e => {
    if(e.target === buildersPopup )
    buildersPopup.style.display = 'none'
})


carpetBtn .addEventListener('click', () => {
    carpetPopup.style.display = 'block'
})
carpetPopup.addEventListener('click', e => {
    if(e.target === carpetPopup )
    carpetPopup.style.display = 'none'
})


archiBtn .addEventListener('click', () => {
    archiPopup.style.display = 'block'
})
archiPopup.addEventListener('click', e => {
    if(e.target === archiPopup )
    archiPopup.style.display = 'none'
})


devBtn .addEventListener('click', () => {
    devPopup.style.display = 'block'
})
devPopup.addEventListener('click', e => {
    if(e.target === devPopup )
    devPopup.style.display = 'none'
})


busiBtn.addEventListener('click', () => {
    busiPopup.style.display = 'block'
})
busiPopup.addEventListener('click', e => {
    if(e.target === busiPopup )
    busiPopup.style.display = 'none'
})
/* POPUPS END */