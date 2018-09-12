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
  array.push();
  return array;
} 

function accessElementInArray(array, index) {
  return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}