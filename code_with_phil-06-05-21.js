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


// input  ["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"])
// output ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

// sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]

function sortPhotos(pics){
  //Make room for an amazing photo!

  return pics.map(pic => {
    // nameArray = // regex pattern to extract numbers in array like [num1, num2]
    // sort by the join(".") of nameArray [num1.num2]
    // [num1.num2]split.(".").join(".img")
    // return nameArray
  }).slice(pics.length -5)

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

  return sortedArray
};


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



