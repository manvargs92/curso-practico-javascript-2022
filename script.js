/** Conectar JavaScript con HTML **/
console.log('Hello, world!!');

/** Leyendo HTML desde JavaScript **/
const h1 = document.querySelector('h1');
// const h1 = document.getElementById('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrfId = document.querySelector('#parrfId');
const input = document.querySelector('input');

console.log(h1);
console.log(h1.value);

console.log({
    h1,
    p,
    parrafito,
    parrfId,
    input
});

/** Escribir HTML desde JS **/
h1.innerHTML = 'Patito <br /> Feo';
h1.innerText = 'Patito <br /> Feo';

console.log(h1.getAttribute('licuadora')); // lee alguno de los atributos que tiene el elemento html
h1.setAttribute('mi_color', 'morado'); // agrega o reemplaza un atributo al elemento html

h1.classList.add('miClase'); // agrega una clase al elemento HTML sin remover o reemplazar clases
h1.classList.add('miOtraClase'); // agrega una clase al elemento HTML sin remover o reemplazar clases
h1.classList.remove('clase_default'); // elimina una clase del elemento HTML

input.value = 'Nuevo Valor 0000'; // cambia el valor del elemento HTML input

console.log(document.createElement('span')); // crea un elemento HTML

const imagen = document.createElement('img');
// imagen.setAttribute('src', 'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg');
console.log(imagen);

// parrfId.innerHTML = ''; 
parrfId.append(imagen);

/** Eventos en JavaScript **/
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const botonCalcular = document.querySelector('#botonCalcular');
const parrResultado = document.querySelector('#parrResultado');

// escuchar eventos
function escucharBoton() {
    const suma = Number(input1.value) + Number(input2.value);
    console.log('Botón pulsado...');
    console.log(suma);
    parrResultado.innerText = 'El resultado de la suma es: ' + suma;
}
