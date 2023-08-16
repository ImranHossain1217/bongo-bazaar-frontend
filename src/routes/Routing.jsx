import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import Products from "../pages/dashboard/Products";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin-login"
          element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
