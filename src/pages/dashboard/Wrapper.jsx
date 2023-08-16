import { useState } from "react";
import AdminNav from "../../components/AdminNav";
import Sidebar from "../../components/Sidebar";

const Wrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64");

  const openSidebar = () => {
    setSide("left-0");
  };
  const closeSidebar = () => {
    setSide("-left-64");
  };
  return (
    <>
      <Sidebar side={side} closeSidebar={closeSidebar} />
      <AdminNav openSidebar={openSidebar} />
      <section className="bg-gray-700 min-h-screen ml-0 sm:ml-64 pt-28 px-4">
        <div className="px-4 bg-gray-800 text-white">{children}</div>
      </section>
    </>
  );
};

export default Wrapper;
