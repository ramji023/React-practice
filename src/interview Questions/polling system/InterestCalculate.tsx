import { useState, useMemo } from "react"
export default function InterestCalculator() {
    const [principalAmount, setPrincipalAmount] = useState('1000')
    const [rate, setRate] = useState('7');
    const [years, setYears] = useState('5');
    const simpleInterest = useMemo(() => {
        return ((parseFloat(principalAmount) * parseFloat(rate) * parseFloat(years)) / 100).toFixed(2);
    }, [principalAmount, rate, years]);
    return (
        <>
            <h1>Hello there!</h1>
            <input id="principal" type="number" value={principalAmount} onChange={(e) => setPrincipalAmount(e.target.value)} />
            <input id="rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
            <input id="time" type="number" value={years} onChange={(e) => setYears(e.target.value)} />

            <div id="simpleInterest ">{simpleInterest}</div>
            <div id="totalAmount">{(parseFloat(simpleInterest) + parseFloat(principalAmount)).toFixed(2)}</div>
        </>
    );
}

