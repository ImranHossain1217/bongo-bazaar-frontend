import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="fixed left-64 top-4 right-0 mx-4">
      <div className="bg-gray-800 w-full flex justify-end p-4">
        <Link
          className="bg-blue-600 px-3 py-2 cursor-pointer text-white uppercase font-semibold"
          to="/admin-login"
        >
          logout
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
