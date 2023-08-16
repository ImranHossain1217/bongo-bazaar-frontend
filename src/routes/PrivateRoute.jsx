import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { adminToken } = useSelector((state) => state.authReducer);

  return adminToken ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
