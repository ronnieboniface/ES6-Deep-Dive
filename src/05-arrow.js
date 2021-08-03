const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');
// Arrow Functions

// Classic Function
let add = function (x, y) {
	return x + y;
};

console.log(add(10, 20));

// Arrow Function w/o Curly Braces
let add = (x, y) => x + y;

console.log(add(10, 20));

// Arrow Function w/ Curly Braces
let add = (x, y) => { return x + y; };

// No parentheses if only one argument.
const showNum = num => `${num} is my favorite number.`;


// Arrow Functions & The Value of 'this'
// Arrow functions inherit their value of 'this' from the parent scope (Lexical Scoping)
const myArrowFunc = () => {
  console.log(this);
};

// What will the value of 'this' be when we call this function?
// window
myArrowFunc();

// When NOT to use Arrow Functions
// Event Handlers
username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value;
});

username.addEventListener('keyup', function () {
  greeting.textContent = 'Hello ' + this.value;
});

// Object Methods
const counter = { // <-- what is the scope of the object?
  count: 0,
  next: () => ++this.count,
  current: () => this.count
};

console.log(counter.next()) // NaN

// inherits the this value from the enclosing lexical scope which is the global scope in this example.

const counter = {
  count: 0,
  next() {
      return ++this.count;
  },
  current() {
      return this.count;
  }
};

console.log(counter.next())  // 1
