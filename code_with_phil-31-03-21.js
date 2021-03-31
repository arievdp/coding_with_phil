// Problem 1
// Return qhat quarter of a year a month is in when given an integer

const quarterOf = (month) => {
  return Math.ceil(month/3)
}

// Problem 2
function numberToString(num) {
    // Return a string of the number here!

    return `${num}`
  }

// Problem 3

const input = "TEST"

function tapCodeTranslation(text) {
  const splitText = text.split("")
  const dotArray = ['.', '..', '...', '....', '.....']
  const horizontal = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
    [null, null, 'K', null, null]
  ]
  const vertical = [
      ['A', 'F', 'L', 'Q', 'V'],
      ['B', 'G', 'M', 'R', 'W'],
      ['C', 'H', 'N', 'S', 'X'],
      ['D', 'I', 'O', 'T', 'Y'],
      ['E', 'J', 'P', 'U', 'Z'],
      ['K', null, null, null, null]
  ]
  const storageArray = []

  splitText.map(letter => {
    vertical.map(vArray => {
        storageArray.push(dotArray[vArray.indexOf(letter.toUpperCase())])
      })
    horizontal.map(hArray => {
        storageArray.push(dotArray[hArray.indexOf(letter.toUpperCase())])
      })
    })
  return storageArray.filter(Boolean).join(" ");
}

tapCodeTranslation(input)