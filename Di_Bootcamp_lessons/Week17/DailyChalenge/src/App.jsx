// What you will create

// React Calculator

// For this challenge, you will receive two numbers from an input element and add both numbers. Display the sum of these numbers on the same page.


// calculator



// Instructions :

// The functionalities:
// The user enters two numbers in two different inputs. When he clicks on the button “Add Them”, both numbers are added and the result is displayed on the page

// Bonus : In order to make a more universal calculator, add a <select> form, where the user will be able to select the type of operation: addition, substraction, mutiplication or division.

import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operation === "+") {
      setResult(n1 + n2);
    } else if (operation === "-") {
      setResult(n1 - n2);
    } else if (operation === "*") {
      setResult(n1 * n2);
    } else if (operation === "/") {
      if (n2 === 0) {
        setResult("Cannot divide by 0");
      } else {
        setResult(n1 / n2);
      }
    }
  };
  return (
    <>
      <div style={{textAlign: "center", margin: "80px", padding: "10px" }}>
        <h1>Calculate Two Numbers</h1>
        <input style = {{padding: "20px", margin: "20px"}} type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number"/>
        <input style = {{padding: "20px", margin: "20px"}} type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number"/>
        <br />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>
        <br />
        <button onClick={calculate}>
          Calculate
        </button>
        <h2>Result: {result}</h2>
      </div>
    </>
  )
}

export default App
