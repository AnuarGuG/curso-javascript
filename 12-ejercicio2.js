'use stric'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado.
*/

var suma = 0;
var contador =0;    

do {
    var numero = parseInt(prompt("Instroduce numeros hasta que metas uno negativo", 0));
    if (isNaN(numero)) {
        numero=0;
        console.log("Ponle numero alv solo numeros SABEE");
    }else if (numero >= 0) {
        suma = suma + numero;
        //suma += numero;este es igual al de arriba , checar despues

        contador++;

    }
    console.log(suma);
    console.log(contador);
}
while (numero >= 0) {
    alert("La suma de todos los numero es: "+suma);
    alert("La media de todos los numero es: "+ (suma/contador));
}