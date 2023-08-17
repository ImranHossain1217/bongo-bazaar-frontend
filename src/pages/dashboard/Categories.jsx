import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { BsPlus } from "react-icons/bs";

const Categories = () => {
  return (
    <Wrapper>
      <div className="border-b border-gray-700 pb-4 pt-4">
        <Link
          className="bg-blue-600 px-3 py-2 capitalize font-medium rounded"
          to="/dashboard/create-category"
        >
          add categories <BsPlus className="inline-block text-xl" />
        </Link>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque delectus
      nobis id hic temporibus ex, quasi repellat deleniti praesentium dolorem
      labore voluptatibus officia enim suscipit, odit repellendus blanditiis
      dolores illo!
    </Wrapper>
  );
};

export default Categories;
