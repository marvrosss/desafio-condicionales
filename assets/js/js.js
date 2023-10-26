var carro = document.querySelector("#carro")

function activarborde() {

    if (carro.style.border) {
        carro.style.border = ""
    }
    else {
        carro.style.border = "solid 2px red"
    }
}
/* desafio 2 */
var inputElement1 = document.querySelector("#input1")
var inputElement2 = document.querySelector("#input2")
var inputElement3 = document.querySelector("#input3")

var boton = document.querySelector("#miBoton")
var total = document.querySelector("#totalStikers")
var cantidadStikers = document.querySelector("cantidad")

var valorInput1 = inputElement1.value;
var numeroEnteroInput1 = parseInt(valorInput1);
var valorInput2 = inputElement2.value;
var numeroEnteroInput2 = parseInt(valorInput2);
var valorInput3 = inputElement3.value;
var numeroEnteroInput3 = parseInt(valorInput3);

var totalInput = numeroEnteroInput1 + numeroEnteroInput2 + numeroEnteroInput3;

function verificar(){
    if( totalInput <= 10 ){ 
        total.innerHTML = "Llevas " + totalInput + " Stikers"
    }
    else if(totalInput >10 ){
        total.innerHTML = "Llevas demasiados Stikers"
    }
    else{
        total.innerHTML = "Tienes que llevar al menos un Stikers de cada uno"
    }
}

/* desafio 3 */

var s1 = document.querySelector("#s1")
var s2 = document.querySelector("#s2")
var s3 = document.querySelector("#s3")

var s10 = s1.value;
var s100 = parseInt(s10);
var s20 = s2.value;
var s200 = parseInt(s20);
var s30 = s3.value;
var s300 = parseInt(s30);
