import Swiper, {Pagination} from 'swiper';
//Swiper.use([Navigation, Pagination]);



const breakPoint = window.matchMedia("(min-width:768px)");
let mySwiper;

export const breakpointChecker = () => {
  if (breakPoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
  } else {
    return turnOnSwiper();
  }
};

export const turnOnSwiper = () => {
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
  return mySwiper;
};

breakPoint.addEventListener("change", breakpointChecker);
breakpointChecker();

