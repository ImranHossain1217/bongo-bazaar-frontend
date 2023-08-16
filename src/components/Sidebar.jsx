import { Link } from "react-router-dom";
import logo from "../assets/images/bongo-logo.png";
import { BsCart4, BsBagCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800">
      <div className="bg-white p-3">
        <img className="w-44" src={logo} alt="logo" />
      </div>
      <ul className="mt-5">
        <li className="p-4 text-white flex items-center cursor-pointer hover:bg-gray-600 transition-all">
          <BsCart4 className="mr-2 text-xl" />
          <Link
            className="capitalize text-lg font-serif"
            to="/dashboard/products"
          >
            products
          </Link>
        </li>
        <li className="p-4 text-white flex items-center cursor-pointer hover:bg-gray-600 transition-all">
          <BsBagCheck className="mr-2 text-xl" />
          <Link
            className="capitalize text-lg font-serif"
            to="/dashboard/products"
          >
            orders
          </Link>
        </li>
        <li className="p-4 text-white flex items-center cursor-pointer hover:bg-gray-600 transition-all">
          <FaUsers className="mr-2 text-xl" />
          <Link
            className="capitalize text-lg font-serif"
            to="/dashboard/products"
          >
            customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
