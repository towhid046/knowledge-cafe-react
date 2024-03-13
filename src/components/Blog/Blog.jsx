import PropTypes from "prop-types";
const Blog = ({ blog, handelBookMark, markId }) => {
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
          <img
            onClick={() => handelBookMark(blog)}
            className="cursor-pointer"
            src={
              markId.find((mId) => mId === id)
                ? "/src/assets/images/read-fill.svg"
                : "/src/assets/images/read-empty.svg"
            }
            alt=""
          />
        </div>
      </div>
      <h1 className="text-[40px] font-bold">{title}</h1>
      <p className="flex items-center gap-6 text-[#949494] text-xl font-medium">
        <span>#{hashtags[0]}</span> <span>#{hashtags[1]}</span>
      </p>
      <strong className="inline-block border-b-2 text-[#8875F1] cursor-pointer text-xl font-semibold">
        Mark as read
      </strong>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookMark: PropTypes.func.isRequired,
  markId: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Blog;
