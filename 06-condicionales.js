"use strict"

//condicional if
//me gustaria agregar la opcion donde dijera cuanta es la diferencia de cada edad dependiendo
//valor


/* var edad1 = 8; 
var edad2 =15;

//si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log("Edad uno es mayor a edad dos");
}else{
    console.log("La edad uno esta mas meco");
}
*/

/*var edad = 16;
var nombre = "Luis Albertano";
*/

/* OPERADORES RELACIONALES
    MAYOR : >
    MENOR : <
    Mayor o igual : >=
    menor o igual : <=
    Igual : ==
    Distinto


if (edad >= 18) {
    //es mayor de edad
    console.log(nombre+" tiene "+edad+" años de edad");
} else {
    //es menor de edad
    console.log(nombre+" tiene "+edad+" años y es menor de edad");
}
*/

/*Operadores logicos
AND (Y) : &&
OR (O) : ||
NEGACION : !
*/



var year = 2018;
//NEGACION EJEMPLO
if (year != 2016) {
    console.log("El año no es 2016 REALMENTE ES "+year);
}
//AND
if (year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era moderna");
}

//OR
if (year == 2008|| (year >= 2018 && year ==2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no registrado");
}
