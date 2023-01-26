"use strict"
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

//switch

var edad = 25
var imprime = "";
switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad"; 
        break;
    case 25:
        imprime = "Ya eres un adulto";
    
        break;
    case 40:
        imprime ="Crisis de los 40";
        break;
    case 75:
        imprime = "Eres ya un anciano";
        default:
        imprime = "Tu edad es neutra"
        break;
}
console.log(imprime);
