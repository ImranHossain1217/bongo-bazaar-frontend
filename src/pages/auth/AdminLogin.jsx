const AdminLogin = () => {
    return (
      <div className="bg-gray-900 h-screen flex justify-center items-center">
        <form className="bg-gray-700 p-5 w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow">
          <h2 className="text-lg text-white mb-3 font-semibold uppercase">
            dashboard login
          </h2>
          <div className="mb-4">
            <label className="text-white text-lg mb-2" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="w-full bg-gray-900 text-white p-3 outline-none rounded"
              type="text"
              name="email"
              placeholder="Enter email..."
              required
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
              required
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
  