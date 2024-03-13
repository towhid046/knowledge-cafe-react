import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
const Blogs = ({ blogs, handelAddBookMark, markId, handelMarkAsRead }) => {
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
