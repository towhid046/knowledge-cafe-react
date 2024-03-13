const Aside = () => {
  return (
    <div className="lg:min-w-[460px]">
      <header className="border-2 mb-6 border-[#8875F1] bg-[#efecfd] rounded-xl px-16 py-5">
        <h2 className="text-2xl font-bold text-center">Spent time on read : 177 min</h2>
      </header>

      <div className="rounded-xl px-7 py-9 bg-[#f3f3f3] space-y-4">
        <h2 className="font-bold text-2xl mb-4">Bookmarked Blogs : 8</h2>

        <div className="p-5 rounded-xl bg-white">
          <h3 className="font-semibold text-lg">
            Master Microsoft Power Platform and Become an In-Demand!
          </h3>
        </div>
        
      </div>
    </div>
  );
};

export default Aside;
