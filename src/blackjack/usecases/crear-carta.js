/**
 * Para mostrar las cartas
 * @param {String} carta
 * @param {Number} turno
 * @param {NodeListOf<HTMLElement>} divCartasJugadores
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
  if (!carta) throw new Error("La carta es obligatoria");
  if (turno < 0) throw new Error("Turno es obligatorio");
  if (!divCartasJugadores) throw new Error("Div cartas jugadores es obligatorio");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
