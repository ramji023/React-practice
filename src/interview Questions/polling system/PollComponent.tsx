import { useState } from "react";
const PollComponent = () => {
    const options = ["Aam Admi Party", "BJP", "congress", "AIMIM"];
    const [votes, setVotes] = useState(Array(options.length).fill(0));

    function handleVotes(index: number) {
        setVotes((prevVotes) =>
            prevVotes.map((vote, i) => (i === index ? vote + 1 : vote))
          );
    }
    console.log(options);
    return (
        <>
            <h1>Poll Component</h1>

            <h4>Delhi Election Board</h4>

            {options.map((option, index) => (
                <div key={index}>
                    <button onClick={() => handleVotes(index)}> {option} ({votes[index]})</button>
                </div>
            )
            )}
        </>
    )
}

export default PollComponent;