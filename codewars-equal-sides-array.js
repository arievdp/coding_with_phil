// Given one array
// Find the index where the sum of int to the left is equal to the sum of int to the right
// Return -1 if none

//  Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");

// Sum total of array
// 


function findEvenIndex(arr) {
  const fromLeft = []
  const fromRight = []
  const arrTotal = arr.sum()
  
  // 

  arr.map(num => {
    if (!fromLeft.length) {
      fromLeft.push(num)
    } else {
      fromLeft.push(fromLeft[fromLeft.length - 1]  + num)
    }
  })
  arr.reverse().map(num => {
    if (!fromRight.length) {
      fromRight.push(num)
    } else {
      fromRight.push(fromRight[fromRight.length - 1]  + num)
    }
  })

  // See which index of array = arrTotal / 2

  // OR iteratate through numbers and add them together until they equal a number in the array? -- won't work.


  function movie(card, ticket, perc) {
    const normalNumberOfTickets = card / ticket

    var iterator = 0
    var ticketPrice = ticket
    var cardPrice = 0

    while (cardPrice < card) {
      ticketPrice = ticketPrice * perc
      console.log('ticketPrice', ticketPrice)
      cardPrice = cardPrice + ticketPrice
      console.log('cardPrice', cardPrice)
      iterator += 1
      console.log(iterator)
    }

    return iterator
  }

  movie(200, 10, .9)

}