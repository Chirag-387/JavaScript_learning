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

let name = "NoName";
let age = 77;
let student = false;

document.getElementById("myP1").textContent = `Your name is ${name}`;
document.getElementById("myP2").textContent = `Your age is ${age}`;
document.getElementById("myP3").textContent = `Student = ${student}`;