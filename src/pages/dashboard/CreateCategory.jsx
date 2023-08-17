import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { BsArrowLeft } from "react-icons/bs";

const CreateCategory = () => {
  return (
    <Wrapper>
      <div className="border-b border-gray-700 pb-4 pt-4">
        <Link
          className="bg-blue-600 px-3 py-2 capitalize font-medium rounded"
          to="/dashboard/categories"
        >
          <BsArrowLeft className="inline-block text-xl" /> categories list
        </Link>
      </div>
      <form className="py-5 w-full sm:w-6/12">
        <h3 className="text-white text-lg font-medium uppercase mb-4">
          create category
        </h3>
        <div className="mb-3">
          <input
            type="text"
            name="category"
            className="w-full bg-gray-700 text-white p-3 outline-none"
            placeholder="Create-Category..."
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Create"
            className="bg-blue-600 px-3 py-2 uppercase rounded font-medium"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategory;
