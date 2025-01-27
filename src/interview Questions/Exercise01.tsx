import { useState } from "react";
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}>decrement</button>
    </>
  )
}

export default Counter;
