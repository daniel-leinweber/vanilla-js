const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {

    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';

}

// Regular
console.log('Hello from the console!');

// Interpolated
console.log('Hello I am a %s string', 'interpolated');

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('Console warning');

// Error :|
console.error('Console error');

// Info
console.info('Console info');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('someClass'), 'Class not present!');

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// console.clear();

// Grouping together
dogs.forEach(dog => {
    
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);

});

// Counting
console.count('Dan');
console.count('Dan');
console.count('Steve');
console.count('Steve');
console.count('Dan');
console.count('Steve');
console.count('Dan');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// Timing
console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {

        console.timeEnd('fetching data');
        console.log(data);

    });

// Table
console.table(dogs);