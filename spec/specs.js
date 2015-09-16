describe('romanNumeralsMap', function() {
  it("returns basic symbol associated with a number when .get(number) is called on it", function() {
    expect(romanNumeralsMap().get(5)).to.equal("V");
  });

  it("returns basic number associated with a symbol when .get(symbol) is called on it", function() {
    expect(romanNumeralsMap().get("V")).to.equal(5);
  });
});

describe('getThousands', function() {
  it("returns how many thousands are in input number", function() {
    expect(getThousands(2805)).to.equal(2);
  });
});

describe('getFiveHundreds', function() {
  it("returns how many five hundreds are in input number", function() {
    expect(getFiveHundreds(805)).to.equal(1);
  });
});

describe('getHundreds', function() {
  it("returns how many hundreds are in input number", function() {
    expect(getHundreds(305)).to.equal(3);
  });
});

describe('getFifties', function() {
  it("returns how many fifties are in input number", function() {
    expect(getFifties(42)).to.equal(0);
  });
});

describe('getTens', function() {
  it("returns how many tens are in input number", function() {
    expect(getTens(42)).to.equal(4);
  });
});

describe('getFives', function() {
  it("returns how many fives are in input number", function() {
    expect(getFives(9)).to.equal(1);
  });
});

describe('getOnes', function() {
  it("returns how many ones are in input number", function() {
    expect(getOnes(2)).to.equal(2);
  });
});

describe('convertNumberToNumerals', function() {
  it("converts number into roman numerals without following subtraction rule i.e. can have four in a row", function() {
    expect(convertNumberToNumerals(90)).to.equal("LXXXX");
  });

  it("converts number into roman numerals without following subtraction rule i.e. can have four in a row", function() {
    expect(convertNumberToNumerals(66)).to.equal("LXVI");
  });
});

describe('fourInARow', function() {
  it("returns true when there's more than three of the same character in a row", function() {
    expect(fourInARow("IIII")).to.equal(0);
  });

  it("returns true when there's more than three of the same character in a row", function() {
    expect(fourInARow("LXXXXVII")).to.equal(1);
  });

  it("returns false for less than four of the same character in a row", function() {
    expect(fourInARow("XXVII")).to.equal(null);
  });
});

describe('convertFourInARow', function() {
  it("converts IIII to IV", function() {
    expect(convertFourInARow("IIII")).to.equal("IV");
  });
  it("converts VIIII to IX", function() {
    expect(convertFourInARow("VIIII")).to.equal("IX");
  });
});
