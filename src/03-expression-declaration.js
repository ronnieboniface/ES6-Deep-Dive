// Function Declaration
// Hoisted
// Good for standalone functions

function sayHello() {
  console.log("Hello!");
};


// This is because of FUNCTION HOISTING.
// JavaScript puts all function declarations before other statements, so it doesn't matter WHERE we make the function call.


// Function Expression
// Not Hoisted
// We can limit where the function is available
// Forces us to keep code organized

const sayHiThere = function(){
  console.log("Hi there!")
};

// Function Expressions are HOISTED just like variables. 
// The variable itself is hoisted, but the VALUE is not.