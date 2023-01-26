'use strict'

//bucle while
//

var year = 2018;

/*
while(year <= 2051 ){
    //ejecuta esto
    console.log("Estamos en el año "+year);

    year++;//si le pongo este incrementador va a iterar hasta la condicion en este caso 2051
}
*/

while (year != 1991) {
    console.log("Estamos en el año: "+year);

    if (year  == 2015) {
        break
    }
    year--;
}

//Do While
var years = 20;

do {
    alert ("Solo cuando sea diferente a 20");
    years =20;
} while (years != 20);{

}

