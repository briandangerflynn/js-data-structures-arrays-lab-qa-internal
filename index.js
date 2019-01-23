// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = function(name){
  drivers.push(name)
  console.log(drivers)
}

const destructivelyPrependDriver = function(name){
  drivers.unshift(name)
}

const destructivelyRemoveLastDriver = function(){
  drivers.pop()
}

const destructivelyRemoveFirstDriver = function(){
  drivers.shift();
}

const appendDriver = function(name){
  const newDrivers = drivers.slice().push(name)
  return newDrivers
}
