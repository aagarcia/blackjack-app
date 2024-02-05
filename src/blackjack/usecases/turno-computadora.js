import { pedirCarta } from "./";
import { acumularPuntos } from "./";
import { crearCarta } from "./";

/**
 * Funcion que corre la logica para determinar el ganador
 * @param {Array<Number>} puntosJugadores
 */
const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora Gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};

/**
 * turno computadora
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {Array<Number>} puntosJugadores Puntos de los jugadores
 * @param {NodeListOf<HTMLElement>} puntosHTML
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores = [],  deck = [], puntosHTML, divCartasJugadores) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!deck) throw new Error("El deck es necesario");
  if (!puntosHTML) throw new Error("Puntos HTML son necesarios");
  if (!divCartasJugadores) throw new Error("Div cartas jugadores son necesarios");
  if (!puntosJugadores || puntosJugadores.length === 0) throw new Error("Puntos de jugadores son necesarios");

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    [puntosComputadora, puntosHTML] = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
