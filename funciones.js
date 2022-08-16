/** Funciones **/
function nombreCompleto(nombre, apellido) { // definimos parámetros en la función
    return nombre + ' ' + apellido;
}

nombreCompleto('Luisa', 'Alcachofa'); // enviamos argumentos cuando ejecutamos la función

function saludo(nombre, apellido) {
    const completeName = nombreCompleto(nombre, apellido); // llamamos una función dentro de otra función
    console.log('Hola ' + completeName + ' que tengas un buen día.');
}

saludo('Manuel', 'Vargas');