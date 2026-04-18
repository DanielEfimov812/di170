import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const minusOne = () => {
        setCount(count - 1)
    };
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={minusOne}>-1</button>
        </>
    );
}

export default Counter;