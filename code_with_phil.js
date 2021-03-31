// Psudo code
// Problem 1

const input = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

const numberOfSheep = input.filter(sheep => {
  return sheep === true
}).length

// Problem 2

function highAndLowAttempt1(numbers){
  const arrayNum = numbers.split(" ").map(num => {
    return parseInt(num)
  }).filter(Boolean)

  return `${Math.max.apply(null, arrayNum)} ${Math.min.apply(null, arrayNum)}`
}
  
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

// Problem 3

