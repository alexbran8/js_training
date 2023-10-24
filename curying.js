
// basics
const multiply = (x) => (y) => x * y;
const double = multiply(2); // Creates a function that doubles any number
const triple = multiply(3); // Creates a function that triples any number
console.log(double(3))
console.log(triple(3))

// functional composition
const compose = (f, g) => (x) => f(g(x));

const add2 = (x) => x + 2;
const square = (x) => x * x;

const add2AndSquare = compose(square, add2);
console.log(add2AndSquare(3)); // Square of (3 + 2) = 25
