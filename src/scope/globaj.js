/**
 * SCOPE GLOBAL
 * Solo VAR puede ser reasignada con palabra reservada
 */

var hello = 'Hello'
let world = 'World'
const helloWorld = 'Hello World!!'

console.log(hello)

const anotherFunction = () => {
  console.log('hello :: ', hello)
  console.log('world :: ', world)
  console.log('helloWorld :: ', helloWorld)
}

anotherFunction()

const helloWorld = () => {
  globalVar = 'Im Global'
}

helloWorld()
console.log(globalVar)


const anotherFunction = () => {
  var localVar = globalVar = 'Im Global'
}

anotherFunction()
console.log(globalVar)