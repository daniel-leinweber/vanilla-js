// ## Array Cardio 2

const people = [
    { name: 'Wes', born: 1988 },
    { name: 'Kait', born: 1986 },
    { name: 'Irv', born: 1970 },
    { name: 'Lux', born: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAtLeastOnePersonNineteenOrOlder = people.some(person => ((new Date()).getFullYear()) - person.born >= 19);
console.log(`Is at least one person 19 or older: ${isAtLeastOnePersonNineteenOrOlder ? "yes" : "no"}`);

// Array.prototype.every() // is everyone 19 or older?
const isEveryoneNineteenOrOlder = people.every(person => ((new Date()).getFullYear()) - person.born >= 19);
console.log(`Is everyone 19 or older: ${isEveryoneNineteenOrOlder ? "yes" : "no"}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log('Comment with ID of 823423:');
console.table(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(`Comment index of comment with ID of 823423: ${commentIndex}`);

const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
];
console.log('Comments after deleting comment with ID of 823423:');
console.table(newComments);