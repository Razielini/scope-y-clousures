const person = () => {
  var saveName = 'Raziel'

  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name
    }
  }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Razielini')
console.log(newPerson.getName())