import { useCallback, useEffect, useState } from "react"

const UseCallback = () => {
    const [inputValue, setInputValue] = useState('');
    const [num1] = useState(3);
    const [num2] = useState(5);
    const sum = useCallback(()=>{return num1 + num2 },[num1,num2])
    // const sum = () => { };

    useEffect(() => { console.log(`the total sum of ${num1} & ${num2} is ${sum()}.`) }, [sum])
    return (
        <>
            <main>
                <input type="text" placeholder="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <h1>{inputValue || '--'}</h1>
            </main>
        </>
    )
}

export default UseCallback