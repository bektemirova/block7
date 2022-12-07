const burgerBtn = document.querySelector("#burger-menu")
const sideMenu = document.querySelector("aside")
const burgerClose = document.querySelector(".burger-close")
const overlay = document.getElementById("burger-overlay")

// заказать звонок

const modalCall = document.querySelector("#call-modal")
const openCallModal = document.querySelector(".aside__call")
const closeCallModal = document.querySelector("#close-call")

const openModal = (e) => {
  e.preventDefault()
  overlay.classList.remove("close-overlay")
  modalCall.classList.add("open")
  sideMenu.classList.remove("show-menu")
}

const closeModal = () => {
  modalCall.classList.remove('open')
}

openCallModal.addEventListener("click", openModal)
closeCallModal.addEventListener("click", closeModal)


//заполнить форму

const chatModal = document.querySelector("#chat-modal")
const openChat = document.querySelector(".aside__chat")
const closeChat = document.querySelector("#close-chat")

const openChatModal = (e) => {
  e.preventDefault()
  chatModal.classList.add("open")
  overlay.classList.remove("close-overlay")
  sideMenu.classList.remove("show-menu")

}
const closeChatModal = () => {
  chatModal.classList.remove('open')
  sideMenu.classList.remove("show-menu")
}
openChat.addEventListener("click", openChatModal)
closeChat.addEventListener("click", closeChatModal)

// open burger menu
const toggleMenu = (e) => {
  e.preventDefault()

  overlay.classList.add("close-overlay")
  //overlay.classList.toggle("modal")
  overlay.classList.toggle("open")
  sideMenu.classList.toggle("show-menu")

}


burgerBtn.addEventListener("click", toggleMenu)
burgerClose.addEventListener("click", toggleMenu)


//open tablet icons

const tabletIcons = document.querySelector(".header__icons-box_tablet-icons")
const tabletButtons = tabletIcons.querySelectorAll(".button")

tabletIcons.addEventListener("click", function (e) {

  if (e.target.title === "call") {
    modalCall.classList.add("open")
    closeCallModal.addEventListener("click", closeModal)
  }

  if (e.target.title === "chat") {
    chatModal.classList.add("open")
    closeChat.addEventListener("click", toggleChatModal)
  }

  if (e.target.title === "profile") {
    confirm("Hello there, profile page hasn't ready yet)")
  }


})

