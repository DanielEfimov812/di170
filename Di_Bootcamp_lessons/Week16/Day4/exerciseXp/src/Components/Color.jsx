import { useState, useEffect } from "react"

const Color = () => {
    const [favoriteColor, setColor] = useState("red")

    useEffect(() => {
        setColor('yellow')
        alert("useEffect reached");
    }, []);

    const changeColor = () => {
        setColor("blue")
    }

    return(
        <>
            <h2>My Favorite Color is {favoriteColor}</h2>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default Color;