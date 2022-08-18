/** Ciclos **/
// ciclo for
for (let i = 0; i < 5; i++) {
    console.log('El valor de i es ' + i);
}

for (let i = 10; i >= 2; i--) {
    console.log('El valor de i es ' + i);
}

// ciclo while
let i = 0;
while (i < 5) {
    console.log('El valor de i es ' + i);
    i++;
}

let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?');
    respuesta = pregunta;
}

// ciclo do while
let f = 0;
do {
    console.log('El valor de i es ' + f);
    f++;
} while (f < 5);