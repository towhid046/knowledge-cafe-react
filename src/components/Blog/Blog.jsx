const Blog = () => {
  return (
    <div className="space-y-6 border-b-2 pb-7">
      <img className="rounded-lg" src="/src/assets/images/2.png" alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img className="w-12" src="/src/assets/images/boy1.png" alt="" />
          <div>
            <h3 className="font-bold text-2xl">Mr.Raju</h3>
            <p className="text-base font-semibold text-[#949494]">
              Mar 14 (4 Days ago)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-[#949494]">05 min read</p>
          <img
            className="cursor-pointer"
            src="/src/assets/images/read.svg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-[40px] font-bold">
        How to get your first job as a self- <br />
        taught programmer
      </h1>
      <p className="flex items-center gap-6 text-[#949494] text-xl font-medium">
        <span>#beginners</span> <span>#programming</span>
      </p>
      <strong className="inline-block border-b-2 text-[#8875F1] cursor-pointer text-xl font-semibold">
        Mark as read
      </strong>
    </div>
  );
};

export default Blog;
