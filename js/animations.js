window.addEventListener("load", () => {

    const elementos = document.querySelectorAll(".fade-up");

    console.log("ELEMENTOS:", elementos.length);


    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });


    setTimeout(() => {

        elementos.forEach((elemento) => {

            observer.observe(elemento);

        });

    }, 800);


});