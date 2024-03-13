import Aside from "../Aside/Aside";
import Blogs from "../Blogs/Blogs";
import { useState, useEffect } from "react";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [markId, setMarkId] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadData();
  }, []);

  const handelAddBookMark = (blog) => {
    const targetedItem = bookmarkItems.find((item) => item.id === blog.id);
    if (targetedItem) {
      alert("Blog already Marked!");
    } else {
      setBookmarkItems([...bookmarkItems, blog]);
      setReadTime((r) => r + blog.reading_time);
      setMarkId([...markId, blog.id]);
    }
  };

  const handelMarkAsRead = (blog) => {
    const reminingItems = bookmarkItems.filter((item) => item.id !== blog.id);
    setBookmarkItems(reminingItems);

    setReadTime(
      (prevTime) =>
        prevTime >= blog.reading_time && prevTime - blog.reading_time
    );

    const reminigsIds = markId.filter((id) => id !== blog.id);
    setMarkId(reminigsIds);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-6 lg:items-start my-7">
      <Blogs
        blogs={blogs}
        handelAddBookMark={handelAddBookMark}
        handelMarkAsRead={handelMarkAsRead}
        markId={markId}
      />
      <Aside bookmarkItems={bookmarkItems} readTime={readTime} />
    </div>
  );
};

export default Main;
