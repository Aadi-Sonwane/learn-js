// Primitive Data Types

// **Number:** Represents numeric values, both integers and decimals.
// Examples: 42, 3.14, -123.45
let age = 30;
let pi = 3.14159;
console.log(age, pi);
// **String:** An ordered sequence of characters, used for text.
// Examples: "Hello, world!", 'Single quotes work too', `Backticks for multiline`
let greeting = "Hi there!";
let name = 'John Doe';
let multiline = `This is
a multiline string`;

// **Boolean:** Represents true or false values.
// Examples: true, false
let isLoggedIn = true;
let isAdmin = false;

// **Undefined:** Indicates the absence of a value.
// Example: let x; // x is undefined

// **Null:** Represents an intentional absence of any value.
// Example: let y = null; // y is intentionally empty

// **Symbol:** A unique and immutable data type used for object properties.
// Examples: let sym1 = Symbol('unique');
//           let sym2 = Symbol('unique'); // sym2 !== sym1

// **BigInt:** Represents integers beyond the limits of Number (2^53-1).
// Examples: let bigInt = 9007199254740992n;

// Composite Data Type

// **Object:** A collection of key-value pairs, used to store and organize data.
// Examples:
let person = {
  name: "Alice",
  age: 25,
  hobbies: ["coding", "reading"]
};
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2023
};

// Arrays: An ordered list of values (of any data type).
// Examples:
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// Additional Notes

// * JavaScript is dynamically typed, so data types are not explicitly declared.
// * The `typeof` operator can be used to check the data type of a variable.
// * Type coercion can occur in certain operations, so be aware of implicit conversions.
