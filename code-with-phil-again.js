// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
}


// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.map(nA => {
    return b.filter(nB => nA === nB)
  })
}