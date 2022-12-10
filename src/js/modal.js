const sideMenu = document.querySelector("aside")
const side = document.querySelector("#aside-form")
const buttons = document.querySelectorAll(".button")
const chatModal = document.querySelector("#chat-modal")
const modalCall = document.querySelector("#call-modal")
const overlay = document.querySelector(".modal")

document.addEventListener("click", function (e) {

  if (e.target.id === "call-modal") {
    modalCall.classList.remove('open')
    sideMenu.classList.remove("open")
    overlay.classList.remove("open")
  }

  if (e.target.id === "chat-modal") {
    chatModal.classList.remove('open')
    sideMenu.classList.remove("open")
    overlay.classList.remove("open")
  }
  if (e.target.id === "overlay") {
    sideMenu.classList.remove("open")
    overlay.classList.remove("open")
  }

})


for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    if (e.target.title === "menu") {
      overlay.classList.add("open")
      sideMenu.classList.add("open")
    }
    if (e.target.title === "close-menu") {
      chatModal.classList.remove("open")
      modalCall.classList.remove("open")
      sideMenu.classList.remove("open")
      overlay.classList.remove("open")

    }
    if (e.target.title === "call") {
      modalCall.classList.add("open")
      sideMenu.classList.remove("show-menu")
    }
    if (e.target.title === "chat") {
      chatModal.classList.add("open")
      sideMenu.classList.remove("show-menu")
    }
  })
}

