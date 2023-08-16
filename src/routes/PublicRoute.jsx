import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { adminToken } = useSelector((state) => state.authReducer);

  return adminToken ? <Navigate to="/dashboard/products" /> : children;
};

export default PublicRoute;
