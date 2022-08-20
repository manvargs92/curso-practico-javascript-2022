function validarTipoSuscripcion(tipoSuscripcion) {
    if (tipoSuscripcion == 'Free') {
        console.log('Solo puedes tomar los cursos gratis.');
        return;
    }
    if (tipoSuscripcion == 'Basic') {
        console.log('Puedes tomar cas todos los cursos durante un mes.');
        return;
    }
    if (tipoSuscripcion == 'Expert') {
        console.log('Puedes tomar cas todos los cursos durante un año.');
        return;
    }
    if (tipoSuscripcion == 'ExpertDuo') {
        console.log('Tú y alguien más pueden tomar todos los cursos durante un año.');
        return;
    }
    
    console.warn('Este tipo de suscripción no existe');
}

validarTipoSuscripcion('Super');

// Bonus
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis.',
    basic: 'Puedes tomar cas todos los cursos durante un mes.',
    expert: 'Puedes tomar cas todos los cursos durante un año.',
    expertduo: 'Tú y alguien más pueden tomar todos los cursos durante un año.'
}

// console.log(tiposDeSuscripciones.expert); // acceder a una propiedad de un objeto
// console.log(tiposDeSuscripciones['expert']); // acceder a una propiedad de un objeto

function validarTipoSuscripcion2(tipoSuscripcion) {
    if (tiposDeSuscripciones[tipoSuscripcion]) {
        console.log(tiposDeSuscripciones[tipoSuscripcion]);
        return;
    }
    console.warn('Este tipo de suscripción no existe');
}

validarTipoSuscripcion2('expert');