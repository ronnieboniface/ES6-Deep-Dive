// Destructuring

// Arrays 

const inviteList = ["Grampa", "Ghost", "Goblin", "Gamora"];

const guestOfHonor = inviteList[0];
const guestOne = inviteList[1];
const guestTwo = inviteList[2];
const guestThree = inviteList[3];

const [honoredGuest, firstGuest, secondGuest, thirdGuest] = inviteList;

// Uninvite Goblin
const [honoredGuest, firstGuest, , thirdGuest] = inviteList;


// Objects

const party = {
  occasion: "Birthday",
  guestCount: 15
};

const occasion = party.occasion;
const guestCount = party.guestCount;

// variable names MUST be the same as the keys in our objects.
const { occasion, guestCount } = party;

// Destructuring to create objects
const lead = "ronnie";
const startDate = "PT-011121";
const phase = "javascript";

const cohort = {
  lead,
  startDate,
  phase
};

// Nested Objects
let employee = {
  id: 1001,
  name: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
// const {name} = employee;
// name.firstName
// name.lastName

const {
  name: {
    firstName,
    lastName
  },
  name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }


// Function Arguments

let person = {
  firstName: 'Jane',
  lastName: 'Doe'
};

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

display(person);

let displayDestructured = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

displayDestructured(person);