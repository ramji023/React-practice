import { useState } from "react";

const Rating = () => {
    const [inputBox, setInputBox] = useState("");
    const [emoji, setEmoji] = useState("");
    const [openFeedback, setOpenFeedback] = useState(false);
    function handleEmoji(e) {
        setOpenFeedback(true);
        // console.log(e.target.textContent);
        setEmoji(e.target.textContent);
    }
    function handleFeedback() {
        console.log(emoji);
        console.log(inputBox);
        setEmoji("");
        setInputBox("");
        setOpenFeedback(false);
    }
    return (
        <>
            <h1>Hello developer!!</h1>
            <div id="feedback">
                <button onClick={handleEmoji}>😍</button>
                <button onClick={handleEmoji}>😀</button>
                <button onClick={handleEmoji}>🙁</button>
                <button onClick={handleEmoji}>😭</button>
            </div>
            {openFeedback && (
                <>
                    <textarea value={inputBox} onChange={(e) => setInputBox(e.target.value)}></textarea>
                    <button id="text" onClick={handleFeedback}>submit</button>
                </>
            )}
        </>
    )
}
export default Rating;