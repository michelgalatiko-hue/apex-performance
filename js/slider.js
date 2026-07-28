const slides = document.querySelectorAll(".slide");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let slideAtual = 0;


function mostrarSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}



function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);

}



function slideAnterior() {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);

}



if (nextButton) {
    nextButton.addEventListener("click", proximoSlide);
}


if (prevButton) {
    prevButton.addEventListener("click", slideAnterior);
}




// CARROSSEL AUTOMÁTICO

setInterval(() => {

    proximoSlide();

}, 4000);