Inside of our functions, when they're being executed -- we get access to an object called 'this'.

`this` & `self` are SIMILAR -- but they are NOT the same.
only really applies when we're dealing with function declarations (anything except arrow functions)


# Implicit 'this' & Classic Functions

* Anytime we use the `function` keyword
* Determined by what that function was invoked on
* Instance methods in Ruby -- self is whatever to the left of the dot - applies to javascript `this`


# Explicit 'this' & Classic Functions
* In Ruby, we cannot control the value of `self`
* We can in JS if we choose to
* If we want to control that value - we can use `.call()`, `.apply()` or `.bind()`
* Overrides the implicit value of `this`
  * `.call()` - invokes a method while manually defining `this`
    * Additional arguments are passed in as comma-separated values.
    * Came after the rest parameter was implimented.
  * `.apply()` - - invokes a method while manually defining `this`
    * Additonal arguments are passed in as an array.
    * Came before the rest parameter was implemented.
  * `.bind()` - allows us to lock in a value for `this`
    * DOES NOT invoke a function.
    * Creates a copy of that function with an explicit value for `this`.


Classic functions default to getting the global scope as their execution context when called with nothing to the left of the dot.
  * does not get its parent's execution context automatically

# Arrow Functions 
- function expression - NEVER a declaration
  * DO NOT have their own execution context
  * automatically bound to its parent's context and does not create a context of it's own.
  * Hoists differently than function declarations!!! 

In order for arrow functions to be use asynchronously, they need to use the async/await syntax.