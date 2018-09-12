var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(element, array) {
  var newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
} 

function accessElementInArray(array, index) {
  return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop();
return array;
}
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
  return array;
}
