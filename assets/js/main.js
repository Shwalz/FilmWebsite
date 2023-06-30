// Show menu 
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,        
      },

    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    coverflowEffect: {
        rotate: 0,
    },
});


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home_data, .home_info,
           .place_card,
           .discover_container,
           .experience_data, .experience_overlay,
           .footer_rights`,{
    origin: 'top',
    interval: 100,
})


sr.reveal(`.about_data, 
           .video_description`,{
    origin: 'left',
})

sr.reveal(`.about_img-overlay, 
           .video_content`,{
    origin: 'right',
    interval: 100,
})
