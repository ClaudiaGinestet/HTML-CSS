//Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
//solicite números al usuario hasta que la suma de los números introducidos supere el
//límite inicial.

var limite = parseInt(prompt("Ingrese un limite positivo"));
var contador = 0;



do {
    var num1 = parseInt(prompt("Ingrese un numero a sumar"));
    contador = contador + num1
} while (contador<= limite);

alert ("Anda pa alla bobo....")

