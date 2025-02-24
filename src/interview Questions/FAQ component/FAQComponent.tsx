import { useState } from "react"
import data from "./data.ts"

const FAQComponent = () => {
    const [activeId, setActiveID] = useState(1);
    function handleActive(id) {
        setActiveID((prev) => prev === id ? null : id)
    }
    return (
        <>
            {data && data.map((item) => (
                <div className="accordion" key={item.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                    <div className="question">
                        <button onClick={() => handleActive(item.id)}>{item.title}</button>
                    </div>
                    {activeId === item.id && <div className="answer"><p>{item.text}</p></div>}
                </div>
            ))}
        </>
    )
}

export default FAQComponent