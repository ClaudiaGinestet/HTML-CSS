// EJE 11.Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

function palabrota(frase) {
    const palabras = frase.split(' ');
    let palabrota = '';
    for (const palabra of palabras) {
        if (palabra.length > palabrota.length) {
            palabrota = palabra;

        };

    }
    return palabrota;

}
const fraseIngresada = prompt("Ingresa una frase:");
const resultado = palabrota(fraseIngresada);
console.log("la palabra mas larga de la frase es: ", resultado);

