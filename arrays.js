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

function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  [array, ...element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
} 

function accessElementInArray(array, element) {
  [1, 2, 3];
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
  array.pop();
  return array
}