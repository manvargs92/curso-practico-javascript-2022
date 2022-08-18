/** Condicionales **/
// condicional if
let tipoDeSuscripción = 'Basic';

if (tipoDeSuscripción == 'Free') {
    console.log('Solo puedes tomar los cursos gratis.');
    return; // el return vacio evita que se siga ejecutando el código en una función
} else if (tipoDeSuscripción == 'Basic') {
    console.log('Puedes tomar cas todos los cursos durante un mes.');
} else if (tipoDeSuscripción == 'Expert') {
    console.log('Puedes tomar cas todos los cursos durante un año.');
} else if (tipoDeSuscripción == 'ExpertDuo') {
    console.log('Tú y alguien más pueden tomar todos los cursos durante un año.');
}

// condicional switch case
switch (tipoDeSuscripción) {
    case 'Free':
        console.log('Solo puedes tomar los cursos gratis.');
    break;
    case 'Basic':
        console.log('Puedes tomar cas todos los cursos durante un mes.');
    break;
    case 'Expert':
        console.log('Puedes tomar cas todos los cursos durante un año.');
    break;
    case 'ExpertDuo':
        console.log('Tú y alguien más pueden tomar todos los cursos durante un año.');
    break;
}