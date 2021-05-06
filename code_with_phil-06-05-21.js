var philip = {
    height: "176.5 cm",
    weight: "92.8 kg",
    age: "30"
}

var arie = {
  height: "196 cm",
  weight: "91 kg",
  age: "31"
}


function sortPhotos(pics) {
  // Capture numbers in string and sort resulting array
  sortedPics = pics.map(pic => {
    return pic.match(/\d+/g)
  }).sort().slice(pics.length -5)

  // Duplicate last array element
  sortedPics.push(sortedPics[sortedPics.length -1])

  // Join array elements with ".img", increment last array elements value
  return sortedPics.map((pic, i) => {
    if (i === sortedPics.length -1) {
      pic[1] = parseInt(pic[1]) + 1
    }
    return pic.join(".img")
  })
}

// Old code:
    // nameArray[1] = parseInt(nameArray[1]) + 1

    // sortedArray = pics.sort().slice(pics.length -5)

    // Under here is wrong:
    // fileNameArray = sortedArray[sortedArray.length -1].split(".")
    // imgNameArray = fileNameArray[1].split("")
    // imgNum = parseInt(imgNameArray[imgNameArray.length -1]) + 1
    // imgNameArray.pop()
    // imgNameArray.push(imgNum)
    // newImgName = imgNameArray.join("")
    // fileNameArray[1] = newImgName
    // sortedArray.push(fileNameArray.join("."))

describe("Basic Tests",() =>{
  Test.assertSimilar(sortPhotos(["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5"]),["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]);
  Test.assertSimilar(sortPhotos(["2016.img4","2016.img5","2016.img1","2016.img3","2016.img2"]),["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]);
  Test.assertSimilar(sortPhotos(["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5"]),["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5","2016.img6"]);
  Test.assertSimilar(sortPhotos(["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img4","2013.img5"]),["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]);
  Test.assertSimilar(sortPhotos(["2016.img7","2016.img2","2016.img3","2015.img3","2012.img8","2016.img4","2016.img5"]),["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]);
})

  







// input "[a,b,a]"
// output {
//  'a': 2,
//  'b': 1
// }

function count (string) {
  const letterArray = string.split("")
  var letterCount = {
    // letterMain: counter
    //  'a': 2,
    //  'b': 1
  }
  var counter = 0

  letterArray.forEach(letterMain => {
    counter = 0
    letterArray.forEach(letterIterate => {
      if (letterMain === letterIterate) {
        counter += 1
      }
      letterCount[letterMain] = counter
    })
  })
  return letterCount;
}



