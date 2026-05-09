// Exercise 1 : Change The Article

// Instructions

// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.querySelector("h1");
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector("article");
const lastParagraph = article.lastElementChild;

lastParagraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    h3.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.createElement("button");
button.textContent = "Make paragraphs bold";

document.body.appendChild(button);

button.addEventListener("click", function(){
    let paragraphs = document.querySelectorAll("p");
    for (let p of paragraphs)
        p.style.fontWeight = "bold";
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener("mouseover", function () {
    let rundom = Math.floor(Math.random() * 101);
    h1.style.fontSize = rundom + "px";
});

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let secondPar = document.querySelectorAll("article p")[1];
secondPar.addEventListener("mouseover", function () {
    secondPar.style.transition = "opacity 0.5s ease";
    secondPar.style.opacity = "0";
});




// Exercise 2 : Work With Forms

// Instructions

// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

let form = document.querySelector("form");
console.log(form);

// Retrieve the inputs by their id and console.log them.

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const submitButton = document.getElementById("submit");

console.log(firstNameInput);
console.log(lastNameInput);
console.log(submitButton);

// Retrieve the inputs by their name attribute and console.log them.

const firstName = document.getElementsByName("firstname")[0];
const lastName = document.getElementsByName("lastname")[0];


console.log(firstName);
console.log(lastName);


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const usersAnswer = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    if (firstName === "" || lastName === "") {
        alert("Full the form");
        return; 
    }

    const li1 = document.createElement("li");
    li1.textContent = firstName;
    usersAnswer.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = lastName;
    usersAnswer.appendChild(li2);

    form.reset()
});


// Exercise 3 : Transform The Sentence

// Instructions

// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems()
console.log(allBoldItems);


// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
    for (let item of allBoldItems){
        item.style.color = "blue"
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = "black"
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const p = document.querySelector("p");
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault)
