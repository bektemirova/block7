import Swiper, {Pagination} from 'swiper';
const swiper = document.querySelector(".swiper")

let mySwiper;


const enableSwiper = function () {

  if (window.innerWidth <= 768) {
    if (!swiper.classList.contains("swiper-initialized")) {
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



      })

    }
  } else {
    if (swiper.classList.contains("swiper-initialized") && !mySwiper[0].destroyed) {

      for (let slider of mySwiper) {
        slider.destroy();
      }
    }


  }
}
enableSwiper()


window.addEventListener("resize", function () {
  enableSwiper()
})

