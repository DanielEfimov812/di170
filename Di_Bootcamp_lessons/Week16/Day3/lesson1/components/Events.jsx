const Event = () => {
    const handleClick = (e) => {
        alert("hi")
    }

    const handleInput = (e) => {
        console.log(e.target.value)
    }

    const getInputValue = (val, a) => {
        console.log(val , a);
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <input onInput={handleInput} />
            <input onChange={(e) => getInputValue(e.target.value, 'dan')} />
        </>
    );
}

export default Event;