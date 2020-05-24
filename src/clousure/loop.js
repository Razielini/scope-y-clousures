/**
 * SCOPE DE BLOQUE LET
 * PUEDEN SER INVOLUNTARIOS
 */
const anotherFunction = () => {
  for(var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log('for ::', i)
    }, 1000)
  }
}

anotherFunction()