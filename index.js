const log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");

function sumar(x,y){
    return x + y;
}

module.exports = sumar;

let variable_uno = 20;

//Nuevo comentario para probar push