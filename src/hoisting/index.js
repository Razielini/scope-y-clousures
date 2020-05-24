/**
 * Hoisting
 * Se eleva la asignación al compilar
 */

a = 2
var a
console.log(a)


console.log(a)
var a = 2


nameOfDog('Firulais')

function nameOfDog(name) {
  console.log(name)
}