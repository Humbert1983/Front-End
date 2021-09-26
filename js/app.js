console.log("Arranca la página...ahora desde un archivo js");

//let
var soyUnaVariable = "Un string con comillas 'Esto es un string' "; // Una cadena de carácteres

var SoyUnNumeroEntero = 123131313; // Números Enteros

var SoyUnNuneroFlotante = 23.54; // Números reales o con coma

const ESTO_ES_UNA_CONSTANTE = "Soy una constante..."; // Una constante

const PI = 3.141528;

console.log(ESTO_ES_UNA_CONSTANTE + PI); // Usar log en la consola
console.log(PI);

console.dir(document.body); // Usar dir en la consola...

// Definí mi variable myInput y llamé a una función prompt y le pasé datos
let myInput = prompt("Ingrese su edad..."); //Esto captura string

myInput = Number.parseInt(myInput); // Vuelvo a asignar un valor a la misma variable

console.log("Cambié el valor de mi variable", myInput);

console.log("¿Mi valor fue un número" + Number.isInteger(myInput));

CalcularEdadMínima (myInput); //Con esto invoqué a la función
CalcularEdadMínima (myInput);
CalcularEdadMínima (myInput);
CalcularEdadMínima (myInput);
if (CalcularEdadMínima (myInput)) {
    console.log ("Lo dejo ingresar a la página")
}


function CalcularEdadMínima(parámetro) {
    if (parámetro >= 18) {
        console.log("Cumple con la edad mínima...")
    } else {
        console.log("No cumple con la edad mínima...");
        return false;
    }
    return true;
}
