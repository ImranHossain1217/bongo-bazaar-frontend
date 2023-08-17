import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adminLogout } from "../features/slices/authSlice";

const AdminNav = ({ openSidebar }) => {
  const dispatch = useDispatch();

  const handleAdminLogout = () => {
    dispatch(adminLogout());
  };
  return (
    <div className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-gray-800 w-full flex justify-between items-center sm:justify-end p-4">
        <AiOutlineMenu
          onClick={openSidebar}
          className="text-white text-3xl cursor-pointer sm:hidden block"
        ></AiOutlineMenu>
        <Link
          onClick={handleAdminLogout}
          className="bg-blue-600 px-3 py-2 cursor-pointer text-white uppercase rounded font-semibold"
          to="/admin-login"
        >
          logout
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
