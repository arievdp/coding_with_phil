// Hello! Type a comment below if you can see this! :)

// Your job is to change the given string s using a non-negative integer n.

// Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

// You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

// swap("gOOd MOrniNg", 7864)  -->  "GooD MorNIng"
// swap("", 11345)  -->  ""
// swap("the lord of the rings", 0)  -->  "the lord of the rings"

// swap("Hello world!", 11)  -->  "heLLO wORLd!"
// ...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

// .toUpperCase() .toLowerCase()
// if letter.toLowerCase() === letter

function swap(s, n){
  // split the string (s) into an array of letters
  const stringArray = s.split("")
  const stringLength = stringArray.length
  const binaryNum = (n).toString(2)
  const binaryArray = binaryNum.split("")

  let bIt = 0

  for (let sIt = 0; sIt < stringLength; sIt++) {
    if (binaryArray[bIt] === '1') {
        if (stringArray[sIt].toLowerCase() === stringArray[sIt]) {
          
          stringArray[sIt] = stringArray[sIt].toUpperCase()
          console.log(stringArray[sIt], binaryArray[bIt])
        } else {
          stringArray[sIt] = stringArray[sIt].toLowerCase()
        }
      }
    if (bIt === binaryArray.length - 1) {
      bIt = 0
    } else {
      bIt++
    }
  }
  return stringArray.join("")
}

console.log(swap("Hello world!", 11))

  //helper method to turn decimal into binary. Return list
  //IF INDEX OF THE BINARY LIST IS AT THE END, MAKE ITS ITERATOR ZERO AGAIN
  // n = 11
  
  
  
  
  

  //iterate over binary and string on same index

  //if we have reached end of string, break
  
  //do check
  //do thing
  return s; //code me!
}





















// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

// (powersOfTwo(0), [1])

// Examples:
// n = 0  ==> [1]
// n = 1  ==> [1, 2]
// n = 2  ==> [1, 2, 4]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

function powersOfTwo(n){
  final_list = []
  for (i = 0; i <= n; i++) {
      value = 2**i
      final_list.push(value)
      // append value onto to our list
  }
  return final_list;
}

console.log(powersOfTwo(2))