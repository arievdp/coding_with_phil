function deathStar(week) {
  var message = "The station is completed!"
  const materials = [100, 75, 50]
  const shipments = [0, 0, 0]

  week.forEach((day, index) => {
    if (index >= week[week.length -1]) { return }
    day.forEach((n, i) => {
      shipments[i] += n
    })
  })

  shipments.forEach((s, i) => {
    if (s < materials[i]) {
       message = `The station is destroyed! It needed ${materials[0] - shipments[0]} iron, ${materials[1] - shipments[1]} steel and ${materials[2] - shipments[2]} chromium for completion.`
    }
  })

  return message
}

const week = [[100,75,49],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],3]

deathStar([[100,75,49],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],3])

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
}


// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(nA => !b.includes(nA))
}

function arrayDiff(a, b) {
  return b.map(nA => {
     return a.filter(nB => nA !== nB)
  }).shift()
}