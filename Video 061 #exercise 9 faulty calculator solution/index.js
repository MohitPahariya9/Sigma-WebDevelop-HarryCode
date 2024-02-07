/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.1) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
// }

// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }

////instead of eval;
let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

let result;

if (random > 0.1) {
    // Perform correct calculation
    switch (c) {
        case "+":
            result = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            result = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            result = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            result = parseFloat(a) / parseFloat(b);
            break;
        default:
            alert("Invalid operation");
            break;
    }

    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${result}`);
} else {
    // Perform wrong calculation
    c = obj[c];
    
    switch (c) {
        case "+":
            result = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            result = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            result = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            result = parseFloat(a) / parseFloat(b);
            break;
        default:
            alert("Invalid operation");
            break;
    }

    alert(`The result is ${result}`);
}
