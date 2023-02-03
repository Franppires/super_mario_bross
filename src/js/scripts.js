
const modal = document.querySelector(".modal")
const openModal = document.querySelector(".button-trailler") 
const closeModal = document.querySelector(".close-modal")
const video = document.getElementById("video")
const linkVideo = video.src

function alternarModal() { 
    modal.classList.toggle("open")
}

openModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkVideo)
});

closeModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})

