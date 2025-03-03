import { useState } from "react"
const UpdateArray = () => {
    const [students, setStudentsName] = useState(
        [
            {
                id: 1,
                name: "ram ji mishra",
                subject: "computer science"
            },
            {
                id: 2,
                name: "travis head",
                subject: "sociology"
            },
            {
                id: 3,
                name: "alex carry",
                subject: "physics"
            },
            {
                id: 4,
                name: "zessiccca",
                subject: "operating system"
            },
            {
                id: 5,
                name: "boby ramore",
                subject: "system design"
            }
        ]
    )

    function changeName() {
        setStudentsName((allStudents) => {
            return allStudents.map((prev) => ({ ...prev, name: prev.name.toUpperCase() }))
        })
    }
    return (
        <>
            {students.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.subject}</p>

                </div>
            ))}
            <button onClick={changeName}>change student name into upper case latter</button>
        </>
    )
}

export default UpdateArray