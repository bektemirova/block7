let readMoreBtn = document.querySelector(".info-box__btn");

readMoreBtn.addEventListener("click", function () {
  let textBtn = readMoreBtn.querySelector(".info-box__btn-content");
  let text;
  let expandText = document.querySelector(".expand-text");
  expandText.classList.toggle("open");
  text = expandText.classList.contains("open") ? "Свернуть" : "Читать далее";
  textBtn.textContent = text;
  readMoreBtn.classList.toggle("rotate-arrow");
});
