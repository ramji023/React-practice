import { useState, useRef, useEffect } from "react"
const UseRef = () => {
    const renders = useRef(0);
    const [randomInput, setRandomInput] = useState("")
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(0);

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds((prev) => prev + 1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = ()=>{
        stopTimer();
        if(seconds){
            renders.current++;
            setSeconds(0);
        }
    }
    return (
        <>
            <input type="text" value={randomInput} onChange={(e) => { setRandomInput(e.target.value); renders.current++; }} />

            <p>random input : {randomInput || '--'}</p>
            <p>renders : {renders.current}</p>
            <strong>seconds : {seconds}</strong>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>reset</button>
        </>
    )
}

export default UseRef;