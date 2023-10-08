// Paolo Casison - 101384585
// Exercise 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello';
  
    for (const index of myArray) {
      console.log(`${greetText} ${index}`);
    }
  }
console.log("=== Exercise 1 Output ===")
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2
capitalize = (input) => {
  const [firstLetter, ...restOfLetters] = input;
  return `${firstLetter.toUpperCase()}${restOfLetters.join('').toLowerCase()}`;
}

console.log("=== Exercise 2 Output ===")
console.log(capitalize('fooBar')); // Outputs: "Foobar"
console.log(capitalize('nodeJs'))

// Exercise 3
const colors = ['red', 'green', 'blue'];

const capitalizeColor = (color) => {
  return capitalize(color);
};

const capitalizedColors = colors.map(capitalizeColor);
console.log("=== Exercise 3 Output ===")

console.log(capitalizedColors); 

// Exercise 4


const filterArray = (arr) => {
  return arr.filter((value) => value < 20);
};

const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = filterArray(values);

console.log("=== Exercise 4 Output ===")
console.log(filterLessThan20); 

// Exercise 5
var array = [1, 2, 3, 4]

const add = (arr) => {
  return arr.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = (arr) => {
  return arr.reduce((product, currentValue) => product * currentValue, 1);
};

var array = [1, 2, 3, 4];
const calculateSum = add(array);
const calculateProduct = multiply(array);

console.log("=== Exercise 5 Output ===")
console.log(`Sum: ${calculateSum}`); 
console.log(`Product: ${calculateProduct}`); 

// Exercise 6
console.log("=== Exercise 6 Output ===")
class Car{
  constructor(model, year){
    this.model = model
    this.year = year
  }

  details(){
      return `Model: ${this.model} ${this.year}`
  }
}
const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())

class Sedan extends Car{
  constructor(model, year, price){
    super(model, year)
    this.price = price
  }

  info(){
    super.details()
    return `${this.model} has a balance of $${this.price}`
  }
}

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info())