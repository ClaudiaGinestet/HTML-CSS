// Realizar un programa que pida una frase y 
//el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se 
//mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().

//var frase = prompt("Ingrese una frase");

// let frase = prompt("Ingrese una frase");
// //let arr = frase.split('.');
// let i = 0;
// for (i == 0; i< frase.length; ++i) {
//     var letra 
// console.log(frase.substring (i, (i + 1)));
// alert(frase.substring)
// } Esto separa por letra una abajo de la otra.

let frase = prompt("Ingresa una frase");
let letras = frase.split("");
let fraseConEspacios = letras.join(" ");
console.log(fraseConEspacios);

// var fraseConEspacios = ""; 
// for (var i = 0; i < frase.length; i++) {
//     fraseConEspacios += frase.charAt(i);

//     if (i < frase.length - 1) {
//         fraseConEspacios += " ";
//     }
//     console.log(fraseConEspacios);
// } Esto separa por largo de la palabra y posicion.
