// What you will create

// Build a Random Quote Generator with React


// image



// Instructions

// You can check out the demo here

// Download this file containing a list of quotes and authors. You can also clone the repo.

// You will display in a box :
// a random quote as a header,
// below the author of the quote,
// and a button that when clicked on, calls a function that:
// generates a new quote from the array of objects and replaces the current one. Make sure to not display the same quote twice.
// changes randomly the color of the background, the color of the header quote and the color of the button.
// Good luck!

import { useState, useEffect } from 'react'
import quotes from './data/quotes';
import './App.css'

function App() {
  const [data, setData] = useState(quotes[0]);
  const [color, setColor] = useState("black");

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "purple", "orange", "teal"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const change = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setData(quotes[randomIndex]);

    const newColor = getRandomColor();
    setColor(newColor);
  }



  return (
    <>
      <div style={{ backgroundColor: color, minHeight: "100vh", color: "white" }}>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
         <h2>"{data.quote}"</h2>
          <p>- {data.author} -</p>

          <button onClick={change} style={{backgroundColor: color}}>
            Next quote
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
