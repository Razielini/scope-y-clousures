/**
 * SCOPE LOCAL
 */

const helloWorld = () => {
  const hello = 'Hello World!'
  console.log('helloWorld :: hello :: ', hello)
}

helloWorld()
console.log('console :: hello :: ', hello)

/**
 * Ambito Lexico
 * Se trabaja sobre la variable local antes de la global
 */
var scope = 'Im Global'
const functionScope = () => {
  var scope = 'Im a local var'
  const func = () => {
    return scope
  }

  console.log('functionScope :: ', func())
}

functionScope()
console.log('global :: scope :: ', scope)