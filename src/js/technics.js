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


const techList = document.querySelector(".tech");
for (let el of names) {
  let name = createTech(el);
  techList.appendChild(name);
}
//show more

const showBtn = document.querySelector("#technics-btn");
const sliderContainer = document.querySelector("#slider-technics");
const textBtn = document.querySelector("#technics-text");
showBtn.addEventListener("click", function () {
  let text;
  sliderContainer.classList.toggle("open");
  text = sliderContainer.classList.contains("open")
    ? "Скрыть"
    : "Показать все";
  textBtn.textContent = text;
  showBtn.classList.toggle("rotate");
});
