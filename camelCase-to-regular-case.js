/*
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/


function solution(string) {
  letterArray = string.split("")
  spacedArray = letterArray.map(letter => {
    if (letter === letter.toUpperCase()) {
      return " " + letter
    } else {
      return letter
    }
  })
  return spacedArray.join("")
}
