// Exercise 1 : Scope

// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 

// a = 3

// with const instead of let ?

// TypeError: Assignment to constant variable.

//#2
let b = 0;
function funcTwo() {
    b = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 

// b = 0
// b = 5

// with const instead of let ?

// TypeError: Assignment to constant variable.



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

// inside the funcFive function hello

//#4
let c = 1;
function funcSix() {
    let c = "test";
    alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 

// inside the funcSix function test

// with const instead of let ?

// inside the funcSix function test

//#5
let d = 2;
if (true) {
    let d = 5;
    alert(`in the if block ${d}`);
}
alert(`outside of the if block ${d}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 

// in the if block 5
// outside of the if block 2

// with const instead of let ?

// in the if block 5
// outside of the if block 2


//  Exercise 2 : Ternary Operator

// Instructions

// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.

const winBattle = () => true;

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// Exercise 3 : Is It A String ?

// Instructions

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = (value) => typeof value === 'string';

// Check out the example below to see the expected output
// Example:


console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


// Exercise 4 : Find The Sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const getSum = (a, b) => a + b;


// Exercise 5 : Kg And Grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function kgToGrams(weight) {
  return weight * 1000;
}

console.log(kgToGrams(2));
// Then, use function expression and invoke it.
const kgToGramsExpr = function (weight) {
  return weight * 1000;
};

console.log(kgToGramsExpr(3));
// Write in a one line comment, the difference between function declaration and function expression.
// Function declaration is hoisted and can be called before it is defined, while function expression is not hoisted and can only be called after it is assigned.
// Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = weight => weight * 1000;

console.log(kgToGramsArrow(4))


//  Exercise 6 : Fortune Teller

// Instructions

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
document.addEventListener('DOMContentLoaded', () => {
  (function (children, partner, location, job) {
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;

    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);
  })(2, 'Anna', 'Paris', 'Software Developer');
});


// Exercise 7 : Welcome

// Instructions

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (username) {
  const navbar = document.getElementById('navbar');

  const userDiv = document.createElement('div');
  userDiv.className = 'user';

  const nameSpan = document.createElement('span');
  nameSpan.textContent = username;

  const img = document.createElement('img');
  img.src = 'https://i.pravatar.cc/40'; // fake profile picture

  userDiv.appendChild(img);
  userDiv.appendChild(nameSpan);
  navbar.appendChild(userDiv);

})('John');


// Exercise 8 : Juice Bar

// Instructions

// You will use nested functions, to open a new juice bar.

// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size) {

  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(', ')}.`;

    const p = document.createElement('p');
    p.textContent = sentence;
    document.body.appendChild(p);
  }

  addIngredients('apple', 'banana', 'orange');
  addIngredients('mango', 'pineapple', 'kiwi');

  displayJuice();
}

makeJuice('medium');