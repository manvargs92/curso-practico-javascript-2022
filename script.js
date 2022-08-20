/** Conectar JavaScript con HTML **/
console.log('Hello, world!!');

/** Leyendo HTML desde JavaScript **/
const h1 = document.querySelector('h1');
// const h1 = document.getElementById('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrafId = document.querySelector('#parrafId');
const input = document.querySelector('input');

console.log(h1);
console.log(h1.value);

console.log({
    h1,
    p,
    parrafito,
    parrafId,
    input
});
