import Aside from "../Aside/Aside";
import Blogs from "../Blogs/Blogs";

const Main = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-6 lg:items-start my-7">
      <Blogs />
      <Aside />
    </div>
  );
};

export default Main;
