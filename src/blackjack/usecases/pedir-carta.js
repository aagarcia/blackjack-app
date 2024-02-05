/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de carts
 * @return {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck && deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop();
};
