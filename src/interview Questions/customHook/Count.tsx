import { useLocalStorage } from "./useLocalStorage";

const Count = () => {
    const [count,setCount] = useLocalStorage("count",0);
    return (
        <>
            <h1>count</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </>
    )
}

export default Count;