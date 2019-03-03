/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){
  var p = document.querySelector('p')
  if (p.className.indexOf(' highlight') >= 0) {
    p.className = p.className.replace(' highlight', ' ')
  } else {
    p.className += ' highlight'
  }  

}
// toggleHighlight(); //uncomment me to test


/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){
  var p = document.querySelector('.introduction')
  console.log(p.textContent)
}
// getText(); //uncomment me to test


/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(testString){
  var p = document.querySelector('.introduction')
  console.log(p.innerText.indexOf(testString) > -1)
}
// containsString('Lorem'); //uncomment me to test


/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
  var input = document.querySelector('input[name="firstName"]')
  console.log(input.value)
}
// getFirstNameValue(); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){
  var input = document.querySelector('input[name=' + inputName + ']')
  console.log(input.value)
  return input.value
}
// getValue('firstName'); //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName){
  var input = document.querySelector('input[name=' + inputName + ']')
  var clone = Object.assign({}, formState)
  clone.inputName = input.value
  console.log(clone)
}
// updateStateValue({ test: 'hello' }, 'firstName'); //uncomment me to test


/*
Write a function which takes an object,`formState`, and an array of string
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputNames){
  var clone = Object.assign({}, formState)
  var inputValues = inputNames.map(function(inputName) {
    return getValue(inputName)
  })
  clone.inputValues = inputValues
  console.log(clone)
}
// updateStateValues({ test: 'hello' }, ['firstName', 'lastName']); //uncomment me to test


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){
  var inputs = document.querySelectorAll('input.' + className)
  console.log(Array.from(inputs).map(function(i) {
    return i.value
  }))
}
// getInputValues('test'); //uncomment me to test


/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){
  var ul = document.createElement('ul')
  document.body.appendChild(ul)

  array.map(function(s) {
    var li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = s
  })
  console.log(ul)
  return ul
}
// generateUl(['one', 'two', 'three']); //uncomment me to test
