const name = 'Khai';

const myName = `Hello ${name}`;

console.log(myName);

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName('Khai', 'TK'));

const Greetings = `Hello ${getFullName('Khai', 'Dev')}`;
console.log(Greetings);