import PropTypes from "prop-types";

const Aside = ({ bookmarkItems, readTime }) => {


  return (
    <div className="lg:min-w-[460px]">
      <header className="border-2 mb-6 border-[#8875F1] bg-[#efecfd] rounded-xl px-16 py-5">
        <h2 className="text-2xl font-bold text-center">
          Spent time on read : {readTime} min
        </h2>
      </header>

      <div className="rounded-xl px-7 py-9 bg-[#f3f3f3] space-y-4">
        <h2 className="font-bold text-2xl mb-4">
          Bookmarked Blogs : {bookmarkItems.length}
        </h2>

        {bookmarkItems.map((item) => (
          <>
            <div key={item.id} className="p-5 rounded-xl bg-white">
              <h3 className="font-semibold text-lg">{item?.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

Aside.propTypes = {
  bookmarkItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  readTime: PropTypes.number.isRequired,
};
export default Aside;
