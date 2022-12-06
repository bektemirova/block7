import "swiper/swiper-bundle.css";
import Swiper, {Pagination} from "swiper";
// import { Pagination } from "swiper/modules/pagination";

Swiper.use([Pagination]);
import acer from "../img/acer.svg";
import hp from "../img/hp.svg";
import lenovo from "../img/lenovo.svg";
import apple from "../img/apple.svg";
import sony from "../img/sony.svg";
import viewsonic from "../img/viewsonic.svg";
import samsung from "../img/samsung.svg";
import bosch from "../img/bosch.svg";

const brandList = document.querySelector(".brands");
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

// slide items render
export const images = {
  "lenovo-logo": lenovo,
  "samsung-logo": samsung,
  "apple-logo": apple,
  "bosch-logo": bosch,
  "hp-logo": hp,
  "acer-logo": acer,
  "viewsonic-logo": viewsonic,
  "sony-logo": sony,
};

export const createBrands = (imageSrc, altName) => {
  let brandsBox = document.createElement("div");
  brandsBox.classList.add("brands__box");
  brandsBox.classList.add("swiper-slide");
  let image = document.createElement("img");
  image.src = imageSrc;
  image.alt = altName;
  brandsBox.appendChild(image);
  let btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("button");
  btn.classList.add("button__show");
  brandsBox.appendChild(btn);
  return brandsBox;
};
export const names = [
  "Ремонт ноутбуков",
  "Ремонт планшетов",
  "Ремонт ПК",
  "Ремонт мониторов",
];
export const createTech = (title) => {
  let techBox = document.createElement("div");
  techBox.classList.add("swiper-slide");
  techBox.classList.add("tech__box");
  techBox.textContent = title;
  let btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("button");
  btn.classList.add("button__show");
  techBox.appendChild(btn);
  return techBox;
};
for (let keys in images) {
  let item = createBrands(images[keys], keys);
  brandList.appendChild(item);
}

const techList = document.querySelector(".tech");
for (let el of names) {
  let name = createTech(el);
  techList.appendChild(name);
}
//show more

const showBtn = document.querySelector(".show-more__btn");
const sliderContainer = document.querySelector(".slider");
const textBtn = document.querySelector(".show-more__text");
showBtn.addEventListener("click", function () {
  let text;
  sliderContainer.classList.toggle("open");
  text = sliderContainer.classList.contains("open")
    ? "Скрыть"
    : "Показать больше";
  textBtn.textContent = text;
  showBtn.classList.toggle("rotate");
});
