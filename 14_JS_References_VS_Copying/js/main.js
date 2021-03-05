// Strings, numbers and booleans are copying the values by default
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

let name = 'Daniel';
let name2 = name;
console.log(name, name2);

name = 'Leinweber';
console.log(name, name2);

// Arrays are reference types, meaning the values are not copied by default, but a reference to
// the original array will be created
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const teams = players;
console.log(players, teams);

teams[3] = 'Dan';
console.log(players, teams);

// In order to create a copy the following methods can be used
const teams2 = players.slice();
console.log(players, teams2);

players[3] = 'Julia';
console.log(players, teams2);

const teams3 = [].concat(players);

const teams4 = [...players];
teams4[3] = 'Frank';
console.log(players, teams4);

const teams5 = Array.from(players);
teams5[3] = 'Monika';
console.log(players, teams5);

// Objects are also reference types
const person = {
    name: 'Wes Bos',
    age: 80
};

const captain = person;
captain.age = 99;
console.log(person, captain);

// Copying can be done as follows (NOTE: Only the first level is a copy, a deep copy would be needed)
const captain2 = Object.assign({}, person, {age: 100});
console.log(person, captain2);

const daniel = {
    name: 'Daniel',
    age: 34,
    social: {
      twitter: '@mytwitter',
      facebook: 'daniel.leinweber'
    }
  };

  console.log(daniel);

  const dev = JSON.parse(JSON.stringify(daniel)); // This is not the most performant way for deep copying but it works