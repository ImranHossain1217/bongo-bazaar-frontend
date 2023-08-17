import { useEffect } from "react";
import { useAuthLoginMutation } from "../../features/services/authService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../features/slices/authSlice";

const AdminLogin = () => {
  const [userLogin, response] = useAuthLoginMutation();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleAminLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    userLogin(user);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);
      dispatch(setAdminToken(response?.data?.token));
      navigate("/dashboard/products");
    }
  }, [response.isSuccess]);
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <form
        onSubmit={handleAminLogin}
        className="bg-gray-700 p-5 w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow"
      >
        <h2 className="text-lg text-white mb-3 font-semibold uppercase">
          dashboard login
        </h2>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <p key={i} className="bg-red-100 text-red-700 p-2 mb-2 rounded">
              {error.msg}
            </p>
          ))}
        <div className="mb-4 mt-3">
          <label className="text-white text-lg mb-2" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-full bg-gray-900 text-white p-3 outline-none rounded"
            type="text"
            name="email"
            placeholder="Enter email..."
          />
        </div>
        <div className="mb-4">
          <label className="text-white text-lg mb-2" htmlFor="email">
            Password
          </label>
          <br />
          <input
            className="w-full bg-gray-900 text-white p-3 outline-none rounded"
            type="password"
            name="password"
            placeholder="Enter password..."
          />
        </div>
        <div className="mb-3">
          <input
            className="w-full bg-blue-600 p-3 text-white font-semibold uppercase cursor-pointer rounded-md hover:bg-blue-700 transition-all"
            type="submit"
            value="sign in &rarr;"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
