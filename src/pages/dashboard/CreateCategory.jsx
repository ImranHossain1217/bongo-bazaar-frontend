import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useCreateCategoryMutation } from "../../features/services/categoryService";

const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const [saveCategory, response] = useCreateCategoryMutation();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];
  const navigate = useNavigate();

  const handleCategory = (e) => {
    e.preventDefault();
    saveCategory({ name: category });
  };

  useEffect(() => {
    if (response?.isSuccess) {
      navigate("/dashboard/categories");
    }
  }, [response?.isSuccess]);
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
      <form onSubmit={handleCategory} className="py-5 w-full sm:w-6/12">
        <h3 className="text-white text-lg font-medium uppercase mb-4">
          create category
        </h3>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <p key={i} className="bg-red-100 text-red-700 p-2 mb-2 rounded">
              {error.msg}
            </p>
          ))}
        <div className="mb-3">
          <input
            type="text"
            name="category"
            className="w-full bg-gray-700 text-white p-3 outline-none"
            placeholder="Create-Category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
