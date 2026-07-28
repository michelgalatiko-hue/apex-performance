const counters = document.querySelectorAll(".counter");

const iniciarContador = (contador) => {

    const valorFinal = Number(contador.dataset.target);

    let valorAtual = 0;

    const velocidade = valorFinal / 100;


    const atualizar = () => {

        valorAtual += velocidade;


        if(valorAtual < valorFinal){

            contador.innerText = Math.floor(valorAtual);

            requestAnimationFrame(atualizar);

        } else {

            contador.innerText = valorFinal;

        }

    };


    atualizar();

};



const observadorContador = new IntersectionObserver((entradas, observer)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            iniciarContador(entrada.target);


            observer.unobserve(entrada.target);


        }


    });


},{


    threshold: 0.5


});



counters.forEach((contador)=>{

    observadorContador.observe(contador);

});