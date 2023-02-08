const sumar = require("../index");

const assert = require('assert');

//Pruebas unitarias, funcionales, integracion y estres.
// Como se escribe una prueba?
// 50 % -> 1 prueba correcta y 1 prueba que falle.
// Asserts = Afirmacion

describe("Probar la suma de dos numeros", ()=>{
    //Afirmamos que cinco mas cinco son 10
    it("Cinco mas cinco es 10", ()=>{
        assert.equal(10,sumar(5,5))
    });
    it("Cinco mas cinco no son 55",()=>{
        assert.notEqual(55,sumar(5,5))
    });
    //Afirmamos que 5 mas 5 no son 55
});

//Funcion anonima () => {} ------ en JS

//Comentario agregado para la prueba de commits