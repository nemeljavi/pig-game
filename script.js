// seleccionar elementos del DOM

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')

// const btnHold = document.getElementsByClassName('btn--hold')[0]

console.log(btnNew, btnRoll, btnHold)

btnRoll.addEventListener('click', () => {
  // sacas un número del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  // mostrar el dado
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    // pierdes turno
  } else {
    // sumar el dado al current score
  }
})

btnNew.addEventListener('click', () => {
  console.log('New game')
})

btnHold.addEventListener('click', () => {
  console.log('Pasar turno')
})

// TODO:
// llamar a función init que haga lo siguiente:
// el dado por defecto es invisible
// score1 y score2 a 0
// currentScore1 y currentScore2 a 0

// TODO:
// cuando se hace click en el botón roll:
// el dado se pone visible
