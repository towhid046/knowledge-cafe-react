import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch('blogs.json')
            const data = await res.json()
            setBlogs(data)
        }
        loadData()
    }, [])

    return (
        <div>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} />)
            }
        </div>
    );
};

export default Blogs;