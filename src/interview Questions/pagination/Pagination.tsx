import { useEffect, useState } from "react";
import axios from "axios";
const Pagination = () => {
    interface dataType {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    const [data, setData] = useState<dataType[]>([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
                if (response.ok) {
                    const data = await response.json();
                    setData((prev) => ([...prev, ...data]));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [page])
    console.log("set data : ",data)
    return (
        <>
            <h1>Json data</h1>
            {data.length !== 0 && (<>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>)}
            <button id="next" onClick={() => setPage((prev) => prev + 1)}>next</button>
        </>
    )
}

export default Pagination;