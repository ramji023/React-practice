import { useEffect, useState } from "react";
import { items } from "./Items";
const SearchBox = () => {

    const [searchedItems, setSearchItems] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (searchInput) {
            const result = items.filter(item =>
                item.toLowerCase().includes(searchInput.trim().toLowerCase())
            );
            setSearchItems(result);
        } else {
            setSearchItems(items);
        }
    }, [searchInput]);
    
    return (
        <>
            <h1>Search Box</h1>
            <input
                type="text"
                placeholder="search the item..."
                value={searchInput}
                onChange={(e) => { setSearchInput(e.target.value) }}
            />
            {searchedItems?.map((item, index) => (
                <ol key={index}>{index} : {item}</ol>
            ))}
        </>
    )
}

export default SearchBox;