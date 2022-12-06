
const chatModal = document.querySelector(".chat-modal")
const callModal = document.querySelector(".call-modal")
const toggleBtn = document.querySelector(".aside__chat")
const toggleBtnCall = document.querySelector(".aside__call")
const closeBtn = document.querySelector("#close-chat")
const closeBtnCall = document.querySelector("#close-call")
const formBtn = document.querySelector(".form__btn")


const toggleChat = (e) => {
  e.preventDefault()
  chatModal.classList.toggle("open-modal")
}



toggleBtn.addEventListener("click", toggleChat)
closeBtn.addEventListener("click", toggleChat)

formBtn.addEventListener("submit", toggleChat)


const toggleCall = (e) => {
  e.preventDefault()
  callModal.classList.toggle("open-modal")
}


toggleBtnCall.addEventListener("click", toggleCall)
closeBtnCall.addEventListener('click', toggleCall)
