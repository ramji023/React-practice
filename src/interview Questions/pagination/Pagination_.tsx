import { useState, useEffect } from "react";

const Pagination = () => {
    interface dataType {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    const [data, setData] = useState<dataType[]>([]);


    const [items, setItems] = useState<dataType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                    setTotalPage(Math.ceil(data.length / 10));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const startIndex = (currentPage - 1) * 10;
        setItems(data.slice(startIndex, startIndex + 10));
    }, [data, currentPage])

    return (
        <>
            <h1>Hello there!!</h1>
            {items.length !== 0 && (<>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>)}
            <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>prev</button>
            <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPage}>next</button>
        </>
    )
}

export default Pagination;