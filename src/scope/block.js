const fruits = () => {
  if (true) {
    var fruits1 = 'apple'
    let fruits2 = 'banana'
    const fruits3 = 'kiwi'
    
    console.log('fruits2 ::', fruits2)
    console.log('fruits3 ::', fruits3)
  }

  console.log('fruits1 ::', fruits1)
}

fruits()




var x = 1
{
  var x = 2
  console.log('bloque::', x)
}

console.log('global ::', x)


/**
 * SCOPE DE BLOQUE LET
 */
const anotherFunction = () => {
  for(let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log('for ::', i)
    }, 1000)
  }
}

anotherFunction()