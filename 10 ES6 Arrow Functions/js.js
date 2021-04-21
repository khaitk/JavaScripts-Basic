// function greeting(name) {
//     return ('welcome' + name);
// }

const greetings = (name, age) => {
    return `Hello ${name} - Age : ${age}`;
}

console.log(greetings('Khai', 21));

const mSum = (num1, num2) =>
    console.log(num1 + num2);
mSum(10, 2)

const mSum1 = (num1, num2, ...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    console.log(sum);
}

mSum1(1, 2, 3, 4, 5, 6, 7)