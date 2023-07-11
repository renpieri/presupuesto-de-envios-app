function calcularPorcentaje(peso){
    let porcentaje

    switch (peso) {
        case '0-1':
            porcentaje = 1.00
            break;
        case '1-3':
            porcentaje = 1.10
            break;
        case '3-5':
            porcentaje = 1.20
            break;
        case '5-7':
            porcentaje = 1.30
            break;
        case '7-10':
            porcentaje = 1.40    
            break;
        default:
            break;
    }


    return porcentaje
}

function calcularSeguro(seguro){
    
    let seguroValor

    switch (seguro) {
        case 'no':
            seguroValor = 1.00
            break;
        case 'si':
            seguroValor = 1.50
            break;
        default:
            break;
    }


    return seguroValor
}

export {
    calcularPorcentaje,
    calcularSeguro
}