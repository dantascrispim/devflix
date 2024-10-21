

let buttonSom = document.querySelector('.botao-som')
let video = document.querySelector('.video')
let botao = document.querySelector('.link-info')
let modal =document.querySelector(".modal")

//LIGAR O SOM
buttonSom.addEventListener('click', ligarSom )

function ligarSom() {
    video.muted = false
}

// MOSTRA MODAL

botao.addEventListener('click', mostraModal)


function mostraModal() {
    modal.style.display ="block"

}

// ESCONDER MODAL
modal.addEventListener("click", esconderModal)

function esconderModal() {
    modal.style.display ="none"
}