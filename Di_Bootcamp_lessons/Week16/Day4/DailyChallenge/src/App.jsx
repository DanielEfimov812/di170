import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
  ]);

  const addVote = (index) => {
    setLanguages(prev => 
      prev.map((lang, i) => 
        i === index ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );  
  }
    

  return (
    <>
      <h1>Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div key={index} className='block'>
          <p>{lang.votes}</p>
          <p>{lang.name}</p>
          <button onClick={() => addVote(index)}>
            Click Me
          </button>
        </div>
      ))}
    </>
  )
}

export default App
