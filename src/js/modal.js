const sideMenu = document.querySelector("aside")
const buttons = document.querySelectorAll(".button")
const chatModal = document.querySelector(".chat-modal")
const modalCall = document.querySelector(".call-modal")
const overlay = document.querySelector(".modal")

document.addEventListener("click", function (e) {


  if (e.target.classList.contains("modal")) {
    modalCall.classList.remove('open')
    sideMenu.classList.remove("open")
    overlay.classList.remove("open")
    chatModal.classList.remove('open')
  }

  if (e.target.classList.contains("overlay")) {
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

