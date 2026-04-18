// Exercise 1 : Promise.all()

// Instructions

// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3])
    .then(result => {console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
// // expected output: Array [3, 42, "foo"]

/*
How Promise.all works:

1. It takes an array of promises (or values).
2. It waits until ALL promises are resolved.
3. It returns a new promise that resolves with an array of results (in the same order).
4. If ANY promise rejects, Promise.all immediately rejects.

Why this output?

- promise1 resolves immediately with 3
- promise2 is not a promise, but Promise.all treats it as Promise.resolve(42)
- promise3 resolves after 3 seconds with "foo"

Final output after 3 seconds:
[3, 42, "foo"]

Order is preserved based on array position, not resolution speed.
*/


// Exercise 2 : Analyse Promise.all()

// Instructions

// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// the output is: [2, 4, 6]