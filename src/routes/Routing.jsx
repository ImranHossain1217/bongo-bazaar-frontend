import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import Products from "../pages/dashboard/Products";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default Routing;
