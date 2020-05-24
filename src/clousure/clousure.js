const moneyBox = (coins) => {
  var saveCoins = 0
  saveCoins+= coins

  console.log(`MoneyBox :: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)


/**
 * Clousure
 * Una funcion interna que recuerda la asignacion de un valor anterior
 */

const moneyBox = () => {
  var saveCoins = 0

  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`MoneyBox :: $${saveCoins}`)
  }

  return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4)   // $4
myMoneyBox(6)   // $10 => 4 + 6
myMoneyBox(10)  // $20 => (4 + 6) + 10
