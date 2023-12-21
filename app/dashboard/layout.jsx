import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/page";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
