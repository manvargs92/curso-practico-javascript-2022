/** Arrays y Objetos**/
// arrays
const arreglo = [1, 'Fulanito', true, {nombre: 'Juanito', edad: 5}, ['chocolate', 'coco', 'vainilla']];

function imprimirPrimerElementoDelArray (array) {
    console.log(array[2]);
}
imprimirPrimerElementoDelArray(['perro', 'conejo', 'gato']);

function imprimirElementoPorElemento(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
imprimirElementoPorElemento(arreglo);

// objetos
const objeto = {
    name: 'Fulanito',
    edad: 18,
    miArreglo: ['abc', 123, false],
    miObjeto: {color: 'rojo', cantidad: 3}
}

function imprimirElementoPorElementoDelObjeto (obj) {
    let arreglo = Object.values(obj);
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
imprimirElementoPorElementoDelObjeto(objeto);
