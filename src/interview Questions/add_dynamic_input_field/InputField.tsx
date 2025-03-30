import { useEffect, useState } from "react"
const InputField = () => {
    //create state to handle input field
    const [inputField, setInputField] = useState([
        {
            id: 1,
            value: "",
        }
    ])

    //  define function to add input field
    function addMoreInputField() {
        console.log("add input field function called")
        setInputField((prev) => [...prev, { id: prev[prev.length - 1].id + 1, value: "" }])
    }

    //define function to handle input state for every inputs in inputField array
    function handleInput(id:number, newValue:string) {
        setInputField((prevState) => {
            return prevState.map((input) => input.id === id ? { ...input, value: newValue } : input)
        })
    }

    return (
        <>
            <h1>add dynamically input field</h1>

            {
                inputField.map((input) => (
                    <input
                        key={input.id}
                        value={input.value}
                        placeholder="enter item name"
                        onChange={(e) => handleInput(input.id, e.target.value)}
                    />
                ))
            }

            <button onClick={addMoreInputField}>add input field</button>
        </>
    )
}

export default InputField