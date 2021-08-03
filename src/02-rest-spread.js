// These two LOOK similar, but we will only ever use the rest parameter when defining functions.

// Spread Operator

const foundingMembers = ['Melissa', 'Will', 'Steph'];
const otherMembers = ['Reid', 'Dalia', 'Luis']

const members = [...foundingMembers, ...otherMembers];

const newMembers = ['Noe', 'Jason', 'Hatice', 'Dan'];


const allMembers = [...foundingMembers]

allMembers.push('Reid')
allMembers.push('Dalia')

const user = {
  username: "",
  email: "",
  password: ""
};

// const newUser = user;
// newUser.username = "dan"
// newUser.password = "password"

const newUser = {
  ...user, 
  username: 'dan',
  password: 'password',
  email: 'dan@dan.com'
}


// Objects
const user = {
  username: "",
  email: "",
  password: ""
};


// Rest Parameter
function restParam(...args) {
  let result = 0;

  for (arg of args) {
    result += arg;
  };

  return result;
};

restParam(3, 6, 9, 12, 15);
// 45

restParam(2, 4, 6);
// 12

restParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// 55

let message = "";

function wordGame(...args) {
  
  for (arg of args) {
    message += `${arg} `;
  };

  return message;
};

wordGame('apple', 'banana', 'cantalope', 'dragon fruit');
// "apple banana cantalope dragon fruit"

wordGame('elderberry', 'fig', 'grape', 'huckleberry', 'indian mango', 'jackfruit', 'kiwi');
// "apple banana cantalope dragon fruit elderberry fig grape huckleberry indian mango jackfruit kiwi"

wordGame('lemon');
// "apple banana cantalope dragon fruit elderberry fig grape huckleberry indian mango jackfruit kiwi lemon"
