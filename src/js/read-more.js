let readMoreBtn = document.querySelector(".info-box__btn");

readMoreBtn.addEventListener("click", function () {
  let textBtn = readMoreBtn.querySelector(".info-box__btn-content");
  let text;
  let expandText = document.querySelector(".expand-text");
  expandText.classList.toggle("opened");
  text = expandText.classList.includes("opened") ? "Закрыть" : "Показать все";
  textBtn.textContent = text;
  readMoreBtn.classList.toggle("rotate-arrow");
});


let showMoreTech = document.querySelector("#show-more__tech")
showMoreTech.addEventListener("click", function () {
  const box = document.querySelector(".tech")
  let textBtn = readMoreBtn.querySelector("#show-more__text2");
  let text;

  box.classList.toggle("open")


  showMoreTech.classList.toggle("rotate");

});