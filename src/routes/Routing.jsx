import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import Products from "../pages/dashboard/Products";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Categories from "../pages/dashboard/Categories";
import CreateCategory from "../pages/dashboard/CreateCategory";

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
        <Route
          path="/dashboard/categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/create-category"
          element={
            <PrivateRoute>
              <CreateCategory />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
