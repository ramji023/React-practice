import { useEffect, useMemo, useState } from "react";
import { items } from "../searchFilter/Items";
const Sorting = () => {
    const [searchedItems, setSearchItems] = useState(items);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const result = items.filter((item) => {
            return item.toLowerCase().includes(searchInput.toLowerCase());
        })
        setSearchItems(result);
    }, [searchInput])

    const sort = useMemo(() => {
        return [...searchedItems].sort();
    }, [searchedItems])
    return (
        <>
            <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            {searchedItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    )
}

export default Sorting;