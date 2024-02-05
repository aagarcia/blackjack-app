import { crearDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCarta } from "./usecases";

/**
  * Esta función crea el juego
  * @return {array}
  */
  const juego = (() => {
    "use strict";
    
    let deck = [];
    const tipos = ["C", "D", "H", "S"], 
          especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    // Referencias de HTML
    const btnPedir = document.querySelector("#btnPedir"), 
          btnDetener = document.querySelector("#btnDetener"), 
          btnNuevo = document.querySelector("#btnNuevo");

    let puntosHTML = document.querySelectorAll("small"),
        divCartasJugadores = document.querySelectorAll(".divCartas");
    /**
    * esta función inicializa el juego
    * @param {number} numJugadores
    */
    const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];

      for (let index = 0; index < numJugadores; index++) {
        puntosJugadores.push(0);
      }

      puntosHTML.forEach((small) => (small.innerText = 0));

      divCartasJugadores.forEach((div) => (div.innerHTML = ""));

      btnPedir.disabled = false;
      btnDetener.disabled = false;
    };

    // Eventos
    /**
    * Evento para pedir una nueva carta
    */
    btnPedir.addEventListener("click", () => {
      const carta = pedirCarta(deck);
      let puntosJugador = 0;
     [puntosJugador, puntosHTML] = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
      crearCarta(carta, 0, divCartasJugadores);

      if (puntosJugador > 21) {
        console.log("Lo siento, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores);
      } else if (puntosJugador === 21) {
        console.log("21, genial!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores);
      }
    });

    /**
    * Evento para detener el juego
    */
    btnDetener.addEventListener("click", () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      if (puntosJugadores[0] > 0) {
        turnoComputadora(puntosJugadores[0], puntosJugadores, deck, puntosHTML, divCartasJugadores);
      }
    });

    /**
    * Evento para iniciar un nuevo juego
    */
    btnNuevo.addEventListener("click", () => {
      inicializarJuego();
    });

    return {
      nuevoJuego: inicializarJuego
    };

  })();