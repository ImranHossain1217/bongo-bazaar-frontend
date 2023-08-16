import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import AdminLogin from "../components/auth/AdminLogin";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin-login" element={<AdminLogin/>}></Route>
            </Routes>
        </Router>
    );
};

export default Routing;