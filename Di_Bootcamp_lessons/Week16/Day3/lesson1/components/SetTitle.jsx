import { useState } from "react";

const SetTitle = () => {
    
    const [title, setTitle] = useState("Hello")
    const [input, setInput] = useState('')

    const changeTitle = () => {
        setTitle(input)
    }


    return(
        <>
            <h1>{title}</h1>
            <input onChange={(e) => setInput(e.target.value)}/>
            <button onClick={changeTitle}>Change the title</button>
        </>
    );
}

export default SetTitle;