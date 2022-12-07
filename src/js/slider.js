import Swiper, {Pagination} from 'swiper';

const breakPoint = window.matchMedia("(max-width:768px)");
let mySwiper;


window.addEventListener("resize", function () {
  if (breakPoint) {
    mySwiper = new Swiper(".swiper", {
      modules: [Pagination],
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewhell: true,
      keyboard: true,
      allowTouchMove: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  } else {
    mySwiper.destroy()
  }
})

