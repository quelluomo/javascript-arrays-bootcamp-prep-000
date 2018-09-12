var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
]
var superheroines = ["catwoman", "she-hulk", "mystique"]
superheroines.push("wonder woman")

var cities = ["New York", "San Francisco"]
cities.unshift("Philadelphia")

function addElementToBeginningOfArray() {
  const array = [1];
  array.unshift('foo');
  return array
}

function destructivelyAddElementToBeginningOfArray() {
  const array = [1];
  const newArray = array.unshift('foo');
  return array
}

function addElementToEndOfArray() {
  const array = [1];
  array.push('foo');
  return array
}

function destructivelyAddElementToEndOfArray() {
  const array = [1];
  const newArray = array.push('foo');
  return array;
} 

function accessElementInArray() {
  var array = [1, 2, 3];
  return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(){
  const array = [1, 2, 3];
  array.shift();
  return array
}
function removeElementFromBeginningOfArray() {
  const array = [1, 2 , 3];
  array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray() {
  const array = [1, 2, 3]
  array.slice(-2);
  
}