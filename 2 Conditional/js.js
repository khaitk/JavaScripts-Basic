console.log("Khai TK");

var a = 6;
var b = 7;

if (a < b) {
    console.log(a < b);
} else {
    console.log(b > a);
}

// true

var number1 = prompt("Nhap a : ");
var number2 = prompt("Nhap b : ");

console.log(number1 + number2);
console.log(typeof(number1 + number2));

console.log(parseInt(number1) + parseInt(number2));
console.log(typeof(parseInt(number1) + parseInt(number2)));

var number1 = parseInt(number1);
// console.log(number1);
var number2 = parseInt(number2);

if (number1 < number2) {
    console.log(number1 + " < " + number2);
} else if (number1 > number2) {
    console.log(number1 + " > " + number2);
} else {
    console.log(number1 + " = " + number2);
}


var Mon = prompt("Nhập các thứ trong tuần : ");

switch (Mon) {
    case 'mon':
        console.log("Monday");
        break;
    case 'tue':
        console.log("Tueday");
        break;
    case 'wed':
        console.log("Wednesday");
        break;
    case 'thu':
        console.log("Thurday");
        break;
    case 'fri':
        console.log("Friday");
        break;
    case 'sat':
        console.log("Saturday");
        break;
    case 'sun':
        console.log("Sunday");
        break;
    default:
        console.log("Vui lòng nhập mon, tue, wed, thu, fri, sat, sun");
        break;
}