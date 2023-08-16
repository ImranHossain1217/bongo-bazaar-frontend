import AdminNav from "../../components/AdminNav";
import Sidebar from "../../components/Sidebar";

const Products = () => {
  return (
    <>
      <Sidebar />
      <AdminNav />
      <section className="bg-gray-700 min-h-screen ml-64 pt-28 px-4">
        <div className="px-4 bg-gray-800 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          perferendis officiis enim exercitationem laborum pariatur! Fugit
          perferendis eligendi quibusdam quae.
        </div>
      </section>
    </>
  );
};

export default Products;
