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

var inputElement1 = document.querySelector("#input1")
var inputElement2 = document.querySelector("#input2")
var inputElement3 = document.querySelector("#input3")
var boton = document.querySelector("#miBoton")
var total = document.querySelector("#totalstikers")
var cantidadStikers = document.querySelector("cantidad")


var valorInput1 = inputElement1.value;
var numeroEnteroInput1 = parseInt(valorInput1, 10);
var valorInput2 = inputElement2.value;
var numeroEnteroInput2 = parseInt(valorInput2, 10);
var valorInput3 = inputElement3.value;
var numeroEnteroInput3 = parseInt(valorInput3, 10);

var totalInput = numeroEnteroInput1 + numeroEnteroInput2 + numeroEnteroInput3;


boton.onclick = function(){
    totalInputStikers.totalInput = cantidadStikers;

}


