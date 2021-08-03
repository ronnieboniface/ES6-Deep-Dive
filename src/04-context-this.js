// Context & 'this'

// Implicit 'this' & Classic Functions
let wizard = {
  name: 'Merlin',
  health: 50,
  heal: function() {
    return this.health += 50;
  }
};

// How would I invoked the sayHello method?
// We have to call it on the object it belongs to.
wizard.heal();
// wizard.health === 100

// IMPLICIT value determined by what is to the left of the dot.
// What is the value of 'this' here?
// 'this' is equal to the 'person' object.

// 'this' is IMPLICITLY determined with our classic function syntax

function myFunc() {
  console.log(this);
};

myFunc();
// What will the value of 'this' be when this function is invoked?
// When there is nothing to the left of the function/method -- window is the implcit 'this'
// Anytime a function is called in the global scope, it's being called on the window object




// Explicit 'this' & Classic Functions
// .call(), .apply(), .bind()

let archer = {
  name: 'RobinHood',
  health: 30
};

let paladin = {
  name: 'Derek',
  health: 15
};

let rogue = {
  name: 'Shadow',
  health: 40
};

wizard.heal.call(archer);
// archer.health === 80

wizard.heal.apply(paladin);
// archer.health === 65

// Since .bind does not invoked the function & it is non-destructive, we need to save the value of the bound function in order to use it later.

let healRogue = wizard.heal.bind(rogue)
healRogue()
  // rogue.health === 90


function whoAmI(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
};

whoAmI.call(wizard, 'zap!', 'thunder!');
whoAmI.apply(wizard, ['zap!', 'thunder!']);