function decimalToHex(d) {
  let roundedD = d
  if (roundedD < 0) {
    roundedD = 0
  }
  
  if (roundedD > 255) {
    roundedD = 255
  }
  const hex = roundedD.toString(16).toUpperCase()
  return hex.length === 1 ? "0" + hex : hex;
}

function rgb(r, g, b){
  return decimalToHex(r) + decimalToHex(g) + decimalToHex(b)
}

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });
});
