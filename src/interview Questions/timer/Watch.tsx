import { useState, useRef } from "react";

const Watch = () => {
    const id = useRef<number | null>(null);
    const [timer, setTimer] = useState(0);
    function handleStart() {
        id.current = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 10)
    }
    function handleResume() {
        handleStart();
    }
    function handlePause() {
        if (id.current) {
            clearInterval(id.current);
        }
    }
    function handleReset() {
        if (id.current) {
            clearInterval(id.current);
        }
        setTimer(0);
    }

    // Convert timer (which counts in 10ms) into minutes, seconds, and milliseconds
    const minutes = Math.floor(timer / 6000); // 6000 * 10ms = 60s = 1m
    const seconds = Math.floor((timer % 6000) / 100); // 100 * 10ms = 1s
    const milliseconds = timer % 100; // Remaining 10ms increments

    return (
        <>
            <h1>Stop Watch</h1>
            <h1>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </h1>
            <button onClick={handleStart} >start</button>
            <button onClick={handleResume}>Resume</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Watch;