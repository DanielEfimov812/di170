//  Exercise 3: File Management Using CommonJS Syntax

// Instructions

// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.

const fs = require('fs');
const path = require("path");

function readFile(filename) {
    const filePath = path.join(__dirname, filename);

    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log(`Content of ${filename}:`);
        console.log(data);
        return data;
    } catch (err) {
    console.error(`Error reading file ${filename}:`, err);
  }
}

function writeFile(filename, content) {
  const filePath = path.join(__dirname, filename);

  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Successfully wrote to ${filename}`);
  } catch (err) {
    console.error(`Error writing to file ${filename}:`, err);
  }
}

module.exports = {
  readFile,
  writeFile
};