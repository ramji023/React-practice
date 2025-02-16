import { useState } from "react";
const Exercise01 = () => {
    const [count, setCount] = useState(0);

    // function handleAdd() {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // }
    function handleAdd() {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    console.log("component rendered...")
    return (
        <>
            <h1>Exercise : useState problem</h1>
            <h2>{count}</h2>
            <button onClick={handleAdd}>increment</button>

        </>
    )
}

export default Exercise01;