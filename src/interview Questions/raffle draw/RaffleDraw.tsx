import { useState } from "react";

const RaffleDraw = () => {
    const [nameList, setNameList] = useState<string[]>([]);
    const [enteredName, setEnteredName] = useState("");
    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setNameList((prev) => ([...prev, enteredName]))
        setEnteredName("");
    }

    const [isModelActive, setIsModelActive] = useState(false);
    const [pickedList, setPickedList] = useState<string[]>([]);
    function handleModel() {
        setIsModelActive(true);
        const randomNumber = Math.floor(Math.random() * nameList.length);
        setPickedList((prev) => ([...prev, nameList[randomNumber]]));
        setNameList((prev) => prev.filter((_, index) => index !== randomNumber));
    }
    // console.log(Math.floor(Math.random()*nameList.length));
    function handleCloseModal() {
        setIsModelActive(false); // Close modal
    }
    return (
        <>
            <h1>Hello there !</h1>
            <form onSubmit={handleSubmitForm}>
                <input id="nameInput" type="text" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
            </form>
            {nameList && (
                <div id="nameList">
                    {
                        nameList.map((name, index) => (
                            <span key={index} className="name">{name}</span>
                        ))
                    }
                </div>
            )}
            <button id="pick" onClick={handleModel}>Pick a Name</button>
            {isModelActive && (
                <div id="nameDialog">
                    <div id="pickedList">
                        {pickedList.map((name, index) => (
                            <span key={index} className="name">{name}</span>
                        ))}
                    </div>
                    <button onClick={handleCloseModal}>Close</button>
                </div>
            )}
        </>
    )
}

export default RaffleDraw;