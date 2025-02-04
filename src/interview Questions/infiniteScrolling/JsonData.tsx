import { useState, useEffect, useCallback } from "react";
import axios from "axios";
const JsonData = () => {
    interface postsType {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }
    const [posts, setPosts] = useState<Array<postsType>>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    // Fetch posts whenever the page changes
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`
                );
                console.log("response got from server : ", response.data);
                setPosts(prevPosts => [...prevPosts, ...response.data]);
            } catch (error) {
                console.log("something is wrong while fetching data from json api : ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [page]);

    // infinite scroller
    const infiniteScroller = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10 && !loading) {
            setPage((prev) => prev + 1);
        }
    }, [loading])
    useEffect(() => {
        window.addEventListener("scroll", infiniteScroller);
        return () => window.removeEventListener("scroll", infiniteScroller);
    }, [infiniteScroller])
    return (
        <>
            <h1>Json Data</h1>
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <h1>{`${post.id} : ${post.title}`}</h1>
                    </div>
                ))
            }
            {loading && <h3>photos is loading...</h3>}
        </>
    )
}

export default JsonData;