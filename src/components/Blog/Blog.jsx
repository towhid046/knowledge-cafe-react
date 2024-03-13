import PropTypes from "prop-types";

// import bookMarkImg from ''

const Blog = ({ blog, handelAddBookMark, markId, handelMarkAsRead }) => {
  const {
    cover,
    author_img,
    hashtags,
    id,
    posted_date,
    reading_time,
    title,
    author,
  } = blog;

  const marked = markId.find((mId) => mId === id);

  return (
    <div className="space-y-6 border-b-2 pb-7 mb-12">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p className="text-base font-semibold text-[#949494]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-[#949494]">
            {reading_time} min read
          </p>
          <span>
            <i
              className={`fa-${
                marked ? "solid" : "regular"
              } text-xl fa-bookmark cursor-pointer`}
              onClick={() => handelAddBookMark(blog)}
            ></i>
          </span>
        </div>
      </div>
      <h1 className="text-[40px] font-bold">{title}</h1>
      <p className="flex items-center gap-6 text-[#949494] text-xl font-medium">
        {hashtags.map((hash, index) => (
          <span key={index}>#{hash}</span>
        ))}
      </p>
      <strong
        onClick={() => handelMarkAsRead(blog)}
        className="inline-block border-b-2 text-[#8875F1] cursor-pointer text-xl font-semibold"
      >
        Mark as read
      </strong>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddBookMark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired,
  markId: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Blog;
