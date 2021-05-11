function Factorial(f, g = 1) {
  if (g === 1) {
    var fact = 1;
    var newNum = '';
  } else {
    fact = g;
  }
  fact = fact * f; newNum = f - 1;
  if (newNum === 0) {
    return console.log(fact);
  }
  else {
    Factorial(newNum, fact);
  }
}

// WTF is g=1 in param?
//throws error when passed string in parameter
// Try to rewrite with less complexity