import acer from "../img/acer.svg";
import hp from "../img/hp.svg";
import lenovo from "../img/lenovo.svg";
import apple from "../img/apple.svg";
import sony from "../img/sony.svg";
import viewsonic from "../img/viewsonic.svg";
import samsung from "../img/samsung.svg";
import bosch from "../img/bosch.svg";

const brandList = document.querySelector(".brands");

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

for (let keys in images) {
  let item = createBrands(images[keys], keys);
  brandList.appendChild(item);
}

//<--show more brands-->

const showBtn = document.querySelector(".brands-btn");
const sliderContainer = document.querySelector(".slider-brands");
const textBtn = document.querySelector(".brands-text");
showBtn.addEventListener("click", function () {
  let text;
  sliderContainer.classList.toggle("open");
  text = sliderContainer.classList.contains("open")
    ? "Скрыть"
    : "Показать больше";
  textBtn.textContent = text;
  showBtn.classList.toggle("rotate");
});