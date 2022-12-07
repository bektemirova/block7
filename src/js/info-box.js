const infoBoxButton = document.querySelector(".info-box__btn")
const tabletContent = document.querySelector(".info-box__tablet-content")

export const showContent = () => {
  let textBtn = infoBoxButton.querySelector(".info-box__btn-text")
  let openContent = document.querySelector("#desktop-content")
  if (window.innerWidth < 768) {
    tabletContent.classList.toggle("content-show")
  }
  openContent.classList.toggle("content-show")
  infoBoxButton.classList.toggle("rotate")
  textBtn.textContent = openContent.classList.contains("content-show") ? "Закрыть" : "Показать больше"
}
infoBoxButton.addEventListener("click", showContent)
