var carro = document.querySelector("#carro")

function activarborde() {

    if (carro.style.border) {
        carro.style.border = "none"
    }
    else {
        carro.style.border = "solid 2px red"
    }
    setInterval(activarborde, 10000);
}

/* desafio 2 */