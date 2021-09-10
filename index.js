
let menuBar = document.getElementById('menu-bar');
let navbar = document.querySelector('.navbar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-times')
    navbar.classList.toggle('actives');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
window.onscroll = () => {
    menuBar.classList.remove('fa-times')
    navbar.classList.remove('actives');
    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };

    });
}


// search section 


let searchIcon = document.getElementById('search-icon');

let closes = document.getElementById('close');
console.log(searchIcon, closes);
searchIcon.onclick = () => {
    document.getElementById('search-form').classList.toggle('search-actives');
}
closes.onclick = () => {
    document.getElementById('search-form').classList.remove('search-actives');
}



// slider 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        loop: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

