import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
const Blogs = ({ blogs, handelBookMark, markId }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handelBookMark={handelBookMark}
          markId={markId}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  handelBookMark: PropTypes.func.isRequired,
  markId: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Blogs;
