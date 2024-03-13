import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
import { useState, useEffect } from 'react';

const Blogs = ({ handelAddBookMark, markId, handelMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadData();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handelAddBookMark={handelAddBookMark}
          handelMarkAsRead={handelMarkAsRead}
          markId={markId}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  handelAddBookMark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired,
  markId: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Blogs;
