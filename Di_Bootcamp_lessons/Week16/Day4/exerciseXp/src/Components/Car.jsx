// In the Car.js component render a header with the carInfo model, for example This car is <model>.

// Part II : useState Hook

// Use the state hook in the Car component to add a color variable to the state.

// Return the color property, for example This car is <color> <model>.
import { useState } from "react";
import Garage from "./Garage";

const Car = (props) => {
    const [color, setColor] = useState('black')

    return(
        <>
            <p>This car is {color} {props.model}</p>
            <Garage size="small" />
        </>
    );
}

export default Car;