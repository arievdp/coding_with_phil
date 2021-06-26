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

/*
  What is base 16? or toString(16)

  Hexadecimal (or base 16) is numeral system that represent numbers. Hexadecimal uses 16 distinct symbols, most often the symbols 0-9 represent that values 0-9, and A to F represent values 10 to 15.

  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
  1 2 3 4 5 6 7 8 9 A  B  C  D  E  F

  example:
  231 = E7
  E = 16 to the 1st power (E sixteens OR 14 * 16 -- 224)
  7 = 16 to the 0 power (7 ones OR 7 * 1 --- 7)

  Benefit - You need less symbols to represent a value compared to decimal number system.

  FYI:
  Base 2 = binary
  Base 10 = decimal number system
  Base 16, multiply the power of 16

  AF3 = 2803

  16(2) 16(1) 16(0)
  A     F     3
  2560  240   3
*/