import { useState } from "react";

const DistanceConverter = () => {
    const conversionRates = {
        centimeters: 1,
        inches: 2.54,
        feet: 30.48,
        meters: 100,
        kilometers: 100000,
        miles: 160934.4,
    };

    const [fromUnit, setFromUnit] = useState("centimeters");
    const [toUnit, setToUnit] = useState("inches");
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("");

    function handleConversion() {
        if (toUnit && fromUnit) {
            const valueInCm = parseFloat(input) * conversionRates[fromUnit];
            const convertedValue = (valueInCm / conversionRates[toUnit]).toFixed(3);
            setResult(parseFloat(convertedValue));
        }
    }


    return (
        <>
            <h1> Hello Developer</h1>

            <select id="fromUnit" onChange={(e) => setFromUnit(e.target.value)}>
                <option value="centimeters">centimeters</option>
                <option value="inches">inches</option>
                <option value="feet">feet</option>
                <option value="meters">meters</option>
                <option value="kilometers">kilometers</option>
                <option value="miles">miles</option>
            </select>


            <select id="toUnit" onChange={(e) => setToUnit(e.target.value)}>
                <option value="inches">inches</option>
                <option value="centimeters">centimeters</option>
                <option value="feet">feet</option>
                <option value="meters">meters</option>
                <option value="kilometers">kilometers</option>
                <option value="miles">miles</option>
            </select>


            <input id="fromValue" type="number" value={input} onChange={(e) => setInput(e.target.value)} />

            <button id="convert" onClick={handleConversion}>convert</button>

            {result != 0 && (
                <div id="outputValue">
                    {result}
                </div>
            )}
        </>
    )
}

export default DistanceConverter