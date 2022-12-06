// заказать звонок

const modalCall = document.querySelector("#call-modal")
const openCallModal = document.querySelector(".aside__call")
const closeCallModal = document.querySelector("#close-call")

const openModal = (e) => {
  e.preventDefault()
  modalCall.classList.add("open")
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

const toggleChatModal = (e) => {
  e.preventDefault()
  chatModal.classList.toggle("open")
}

openChat.addEventListener("click", toggleChatModal)
closeChat.addEventListener("click", toggleChatModal)

// open burger menu

const burgerBtn = document.querySelector("#burger-menu")
const sideMenu = document.querySelector("aside")
const burgerClose = document.querySelector(".burger-close")
const toggleMenu = () => {
  const overlay = document.getElementById("burger-overlay")
  overlay.classList.toggle("modal")
  overlay.classList.toggle("open")
  sideMenu.classList.toggle("show-menu")

}

burgerBtn.addEventListener("click", toggleMenu)
burgerClose.addEventListener("click", toggleMenu)