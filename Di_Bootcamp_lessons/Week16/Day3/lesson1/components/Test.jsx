// conditional render

const Test = ({status}) => {
    if (status === 'loading') {
        return (
            <h1>Loading...</h1>
        )
    } if (status === "error") {
        return (
            <h1>Error</h1>
        )
    }
    return (
        <>
        <h1>Test component</h1>
        </>
    );
}

export default Test;