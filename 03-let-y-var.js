`use strict`
//Prueba con var
var numero = 40;
console.log(numero); //valor aqui 40

    if(true){
        var numero = 50;
        console.log(numero); //valor 50
    }

    console.log(numero); //valor 50


    //prueba con let

        var texto = "Curso Js Anuar";
        console.log(texto); //Valor igual

            if(true){
                let texto = "Curso de otro";
                console.log(texto); //valor otro curso
            }
         
        console.log(texto);
        