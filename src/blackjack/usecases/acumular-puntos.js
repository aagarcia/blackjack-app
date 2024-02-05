import { valorCarta } from "./";

/**
 * Funcion para acumular puntos
 * Turno: 0 = primer jugador, 1 = segundo jugador y el ultimo sera la computadora
 * @param {String} carta carta seleccionada
 * @param {Number} turno turno del jugador
 * @param {Array<Number>} puntosJugadores puntos de cada jugador
 * @param {NodeListOf<HTMLElement>} puntosHTML html de cada jugador
 * @returns {[Number, NodeListOf<HTMLElement]} retorna los puntos y el html
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  if (!carta) throw new Error("La carta es obligatoria");
  if (turno < 0) throw new Error("Turno es obligatorio");
  if (!puntosJugadores) throw new Error("Puntos de jugadores son obligatorios");
  if (!puntosHTML) throw new Error("Puntos HTML son obligatorios");
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return [puntosJugadores[turno], puntosHTML];
};
