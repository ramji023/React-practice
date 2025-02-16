import { useCallback, useEffect, useMemo, useState } from "react"


const Exercise01 = () => {
    const getResult = useCallback(() => {
        for (let i = 0; i < 1000000; i++) {
            // do something
        }

        return ['ram', 'deepak']
    }, [])
    // function getResult() {
    //     for (let i = 0; i < 100; i++) {
    //         // do something
    //     }

    //     return ['ram', 'deepak']
    // }
    const [randomInput, setRandomInput] = useState('');
    const result = useMemo(() => { return getResult() }, [getResult])
    // const result = getResult();

    useEffect(() => {
        console.log("the result is  : ", result);
    }, [result])
    return (
        <>
            <h1>useMemo and useCallback</h1>
            <input type="text" value={randomInput} onChange={(e) => setRandomInput(e.target.value)} />
            <p>random value : {randomInput || "--"}</p>
        </>
    )
}

export default Exercise01