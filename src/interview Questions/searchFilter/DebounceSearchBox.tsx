import { useEffect, useState } from "react";
import { items } from "./Items"

const DebounceSearchBox = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchedData, setSearchedData] = useState(items);
    useEffect(() => {
        const timer = setTimeout(() => {
            const result = items.filter((item) => {
                return item.toLowerCase().includes(searchInput.toLowerCase());
            })
            setSearchedData(result);
        }, 500)
        return ()=>{
           return clearInterval(timer);
        };
    }, [searchInput])
    return (
        <>
            <input type="text" placeholder="search your data..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            {searchedData && (
                searchedData.map((list, index) => (
                    <li key={index}>{list}</li>
                ))
            )}
        </>
    )
}

export default DebounceSearchBox;