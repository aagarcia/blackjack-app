import _ from 'underscore';
/**
* Esta función crea un nuevo deck
* @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
* @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
* @return {Array<String>} retorna un nuevo deck de cartas
*/
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('Tipos de carta es obligatorio');
    if (!Array.isArray(tiposDeCarta)) throw new Error('Tipos de carta debe ser un arreglo');
    if (tiposDeCarta.length === 0) throw new Error('Tipos de carta no puede ser un arreglo vacío');
    if (!tiposEspeciales) throw new Error('Tipos especiales es obligatorio');
    if (!Array.isArray(tiposEspeciales)) throw new Error('Tipos especiales debe ser un matriz');
    if (tiposEspeciales.length === 0) throw new Error('Tipos especiales no puede ser un matriz vacío');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
        deck.push(i + tipo);
    }
    }

    for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
        deck.push(esp + tipo);
    }
    }

    return _.shuffle(deck);
};