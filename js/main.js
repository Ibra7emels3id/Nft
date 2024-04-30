
// star wow
new WOW().init();

// star slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        100: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

// star icon top
let IconTop = document.querySelector(`.Icon-Top`)

window.scroll = addEventListener(`scroll`, ()=>{
    if(window.scrollY >= 500){
        IconTop.style.right = `30px`
    }
    else{
        IconTop.style.right = `-20%`
    }
});
IconTop.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
}
