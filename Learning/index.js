// To print the text inside console menu.
// console.log(`Hello`);

// To give the alert in the chrome window.
// window.alert(`This is an alert`);

//   // -> Single line comment.
//   /**/ -> Multi-line comment.

// Displaying text content
// document.getElementById("myH1").textContent = `HELLO WORLD!`;
// document.getElementById("myP").textContent = `This is a paragraph wriiten through JavaScript.`;


// Variables in JavaScript

/*
    Steps to make a variable;
    1. Declare a variable -> let x;
    2. assignning the variable -> x = 10;
*/

// let x;
// x = 100;
// oR
// let x = 100;
// console.log(x);

// let price = 10.99;
// console.log(price);

// let age = 20;
// console.log(`You are ${age} years old.`);
// console.log(typeof age); -> typeof gives the type or datatype of the variable.

// let firstName = "Bob";
// console.log(typeof firstName);
// Strings can contain numbers or special characters but cannot be used for operations and arithmetic calculations.

// let online = true;
// console.log(online);
// console.log(typeof online);

// let name = "NoName";
// let age = 77;
// let student = false;

// document.getElementById("myP1").textContent = `Your name is ${name}`;
// document.getElementById("myP2").textContent = `Your age is ${age}`;
// document.getElementById("myP3").textContent = `Student = ${student}`;

/*
    Arithmetic operators = operands -> which are values, varibales, etc.
    operators -> +, -, /, *, **, %

    increment -> students++ -> added 1.
    decrement -> students-- -> subtracted 1.

    operator precedence;
    1. parenthesis ()
    2. exponents
    3. multiplication -> division -> modulo
    4. addition -> subtraction

*/

/*

Accepting user inputs;
1. Easy way -> window prompt
2. Professional way -> HTML textbox

*/
// 1.
// let username = window.prompt("What's your name ?");
// console.log(username); 

// 2.
let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myName").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}


// Type conversion in JavaScript -> Converting one datatype variable into another.
// dataypes that are type converted are boolean, string, number.

// const -> which are constants that are the variables which can't be changed once they are declared with a value.

/*

const PI = 3.14;
let radius = window.prompt("What's the radius of the circle?");
radius = Number(radius);
let circumference = 2 * PI * radius;
console.log(circumference);

*/

// Math is a object which have different inbuilt mathematical functions.

// Random Number Generator

let randNum = Math.floor(Math.random() * 6) + 1;
console.log(randNum);

/*

Ternary operatoor -> helps to assign variable based on a condition.
condition ? codeIfTrue : codeIfFalse;

*/

/*

Switch -> Can be used for an efficient replacement of the many else if statements

*/

let day = 1;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("INVALID INPUT");
        break;
}