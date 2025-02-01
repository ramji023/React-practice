import { useEffect, useState } from "react"

export const useLocalStorage = (key: string, initialValue: number) => {
    const [count, setCount] = useState(
        () => {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        }
    )
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(count));
    }, [key, count]);


    return [count, setCount] as const;
}