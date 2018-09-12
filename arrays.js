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
 