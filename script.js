'use strict'

const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.nav-close');
const navList = document.querySelector('.nav__links');
const section1 = document.querySelector('#section--1');
const logo = document.querySelector('.logo-link');
const sections = document.querySelectorAll('.section');
const titleNameTag = document.querySelector('.title_name');
const profileImg = document.querySelector('.img');
const h3_title = document.querySelector('.h3_title');
const h2_title = document.querySelector('.h2_title');
const heroBtn = document.querySelector('.hero-btn');
const nav_items = document.querySelectorAll('.nav__item');



// --- Responsive navigation ---
let isMenuOpen = false;

const openMenu = function() {
    navList.style.right = '0';
    menuBtn.style.opacity = 0;
    // isMenuOpen = true
}

const closeMenu = function() {
    navList.style.right = '-100%';
    menuBtn.style.opacity = 1;
    // isMenuOpen = false;
}

menuBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

document.addEventListener('click', (e) => {
    if (e.target != menuBtn && e.target != navList && !e.target.classList.contains('nav_item')) {
        closeMenu()
    }
})


// document.addEventListener('click', () => {
//     if (isMenuOpen) {
//         closeMenu();
//     }
// });

// let isMenuOpen = false;

// const openMenu = function() {
//     navList.style.right = '0';
//     menuBtn.style.opacity = 0;
//     isMenuOpen = true;
// }

// const closeMenu = function() {
//     navList.style.right = '-100%';
//     menuBtn.style.opacity = 1;
//     isMenuOpen = false;
// }

// menuBtn.addEventListener('click', openMenu);
// closeBtn.addEventListener('click', closeMenu);

// document.addEventListener('click', () => {
//     if (isMenuOpen) {
//         closeMenu();
//     }
// });



// --- Smooth Scrolling ---
section1.scrollIntoView({behavior: 'smooth'});

navList.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
})



// --- Sticky nav ---
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky');
}


const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});

headerObserver.observe(section1);




// --- Reveal sections ---
const revealSection = function(entries) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return

    entry.target.classList.remove('section-hidden');
}


const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});


sections.forEach(section => {
    sectionObserver.observe(section)
})




// --- Animation ---

let splittedName = titleNameTag.textContent.split('');
// console.log(splittedName);

titleNameTag.textContent = '';

splittedName.forEach(el => {
    // console.log(el);
    if (el === ' ') el = '&nbsp'
    titleNameTag.innerHTML += `<span>${el}</span>`;
})




let k = 0;
const spans = titleNameTag.querySelectorAll('span');
// spans.forEach(el => console.log(el.innerText))


const animatedText = setInterval(function() {

    spans[k].classList.add('fadeMove');
    
    k++
    if (k === spans.length){
        clearInterval(animatedText);  // Funkcija za ciscenje intervala kada dodje do zadnjeg slova
    }
}, 90);


window.addEventListener('load', () => {
    profileImg.classList.add('img-animation');

    h3_title.classList.add('h3_animation');

    h2_title.classList.add('h2_animation');

    heroBtn.classList.add('hero-btn-animation');

    nav.classList.add('nav-animation')
})