// Seleciona o elemento do cabeçalho
const header = document.querySelector(".header");

// Verifica se o cabeçalho existe na página antes de adicionar o evento
if (header) {
    window.addEventListener("scroll", () => {
        // Se a rolagem for maior que 50px, adiciona a classe 'scrolled', senão remove
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

// Forçar tentativa de autoplay no iPhone

const video = document.querySelector(".video-bg");

if (video) {

    video.play().catch(() => {

        console.log("Autoplay bloqueado pelo navegador");

    });

}