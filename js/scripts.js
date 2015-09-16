var romanNumeralsMap = function() {
  var romanNumerals = new Map();
  romanNumerals.set(1, "I");
  romanNumerals.set(5, "V");
  romanNumerals.set(10, "X");
  romanNumerals.set(50, "L");
  romanNumerals.set(100, "C");
  romanNumerals.set(500, "D");
  romanNumerals.set(1000, "M");
  return romanNumerals;
};

var getThousands = function(number) {
  var thousands = 0;
  while (number >= 1000) {
    thousands++;
    number -= 1000;
  }
  return thousands;
}

var getFiveHundreds = function(number) {
  var fiveHundreds = 0;
  while (number >= 500) {
    fiveHundreds++;
    number -= 500;
  }
  return fiveHundreds;
}

var getHundreds = function(number) {
  var hundreds = 0;
  while (number >= 100) {
    hundreds++;
    number -= 100;
  }
  return hundreds;
}

var getFifties = function(number) {
  var fifties = 0;
  while (number >= 50) {
    fifties++;
    number -= 50;
  }
  return fifties;
}

var getTens = function(number) {
  var tens = 0;
  while (number >= 10) {
    tens++;
    number -= 10;
  }
  return tens;
}

var getFives = function(number) {
  var fives = 0;
  while (number >= 5) {
    fives++;
    number -= 5;
  }
  return fives;
}

var getOnes = function(number) {
  var ones = 0;
  while (number >= 1) {
    ones++;
    number -= 1;
  }
  return ones;
}

var convertNumberToNumerals = function(number) {
  var thousands = getThousands(number);
  number -= (thousands * 1000);
  var fiveHundreds = getFiveHundreds(number);
  number -= (fiveHundreds * 500);
  var hundreds = getHundreds(number);
  number -= (hundreds * 100);
  var fifties = getFifties(number);
  number -= (fifties * 50);
  var tens = getTens(number);
  number -= (tens * 10);
  var fives = getFives(number);
  number -= (fives * 5);
  var ones = getOnes(number);

  var numeralString = "";
  for (var i = 0; i < thousands; i++) {
    numeralString += romanNumeralsMap().get(1000);
  }
  for (var i = 0; i < fiveHundreds; i++) {
    numeralString += romanNumeralsMap().get(500);
  }
  for (var i = 0; i < hundreds; i++) {
    numeralString += romanNumeralsMap().get(100);
  }
  for (var i = 0; i < fifties; i++) {
    numeralString += romanNumeralsMap().get(50);
  }
  for (var i = 0; i < tens; i++) {
    numeralString += romanNumeralsMap().get(10);
  }
  for (var i = 0; i < fives; i++) {
    numeralString += romanNumeralsMap().get(5);
  }
  for (var i = 0; i < ones; i++) {
    numeralString += romanNumeralsMap().get(1);
  }
  return numeralString;
}

var fourInARow = function(numeralString) {
  var sameSymbolInARow = 1;
  for (var i = 0; i < numeralString.length - 1; i++) {
    if (numeralString[i] === numeralString[i+1]) {
        sameSymbolInARow++;
      if (sameSymbolInARow > 3) {
        return true;
      }
    } else {
      sameSymbolInARow = 1;
    }
  }
  return false;
}


// $(document).ready(function() {
//
// });
