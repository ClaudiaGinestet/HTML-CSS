// Escribir un programa que lea números enteros hasta 
// teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, 
// el mínimo, y el promedio de todos ellos.

var i = 0;
var j = 0;
var min = Number.MAX_SAFE_INTEGER;
var max = Number.MIN_SAFE_INTEGER;
//var numentero = 1;
// do {  
//   numentero = parseInt(prompt("Ingrese numeros enteros y luego ingrese 0 para salir"));
//   i = i + numentero
//   j = j++ 
   

//   if (numentero>max) {
//     max = numentero
//   }
//   if (numentero<min) {
//     min = numentero
//   }

// } while (numentero != 0);
while (numentero != 0) { 
    
    var numentero = parseInt(prompt("Ingrese numeros enteros y luego ingrese 0 para salir"));
    i = i + numentero;
    
    if (numentero === 0) {
        break; // Terminar el bucle cuando se ingrese el valor 0.
    }   
    j = ++j;
    if (numentero>max) {
     max = numentero;
    }
    if (numentero<min) {
     min = numentero;
     }
}

console.log(j);
console.log(i);
alert("El numero maximo ingresado es " + max);
alert("El numero minimo ingresado es " + min);
alert("El promedio de todos los numeros ingresado es " + (i / j));
