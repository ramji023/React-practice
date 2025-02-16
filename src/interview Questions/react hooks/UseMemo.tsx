import { useMemo, useState } from "react"

const fib = (n: number): number => {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}
const UseMemo = () => {
    const [userNumber, setUserNumber] = useState('')
    const [randomNumber, setRandomNumber] = useState('');
    const fibNumber = useMemo(() => {
       return fib(Number(userNumber))
    }, [userNumber])

    return (
        <>
            <main>
                <input type="number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
                <p>fib number is : {fibNumber || '--'}</p>
                <input type="text" value={randomNumber} onChange={(e) => setRandomNumber(e.target.value)} />
                <p>random number is : {randomNumber || '---'}</p>
            </main>
        </>
    )
}

export default UseMemo;