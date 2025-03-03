import { useState } from "react"
const UpdateObject = () => {
    const [inputName, setInputName] = useState("");
    const [data, setData] = useState(
        {
            name: "ram",
            age: 24,
            subject: "computer Science"
        }
    )
    function findStudent() {
        // setData((prev) => ({ ...prev, name: prev.name.toUpperCase() }));
        setData((prev) => ({ ...prev, name: inputName }));
        setInputName("");
    }
    return (
        <>
            <h2>{data.name}</h2>
            <p>{data.age}</p>
            <p>{data.subject}</p>

            <input placeholder="enter your college name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <button onClick={findStudent}>find your roll number</button>
        </>
    )
}

export default UpdateObject