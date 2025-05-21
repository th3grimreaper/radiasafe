import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import Dropdown from "../dropdown/Dropdown";
import Cart from "../cart/Cart";
import Drawer from "../cartdrawer/CartDrawer";
import Sidebar from "../sidebar/Sidebar";
import CartDrawer from "../cartdrawer/CartDrawer";

const Header = () => {
  return (
    <>
      <header className="z-[99] flex justify-center text-[1rem] text-gray-900 bg-gray-100 shadow-2xs">
        <div className="p-4 flex flex-auto items-center justify-start gap-2">
          <Sidebar />
          <Link className="flex gap-2" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m8 10h-4c0-1.5-.8-2.8-2-3.4l2-3.5c2.4 1.4 4 3.9 4 6.9m-8-2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M8 5.1c.6 1 1.3 2.3 2 3.5c-1.2.7-2 2-2 3.4H4c0-3 1.6-5.5 4-6.9m0 13.8c.6-1 1.3-2.3 2-3.5c.6.3 1.3.6 2 .6s1.4-.2 2-.6l2 3.5c-1.2.7-2.5 1.1-4 1.1s-2.8-.4-4-1.1"
              />
            </svg>
            <span className="text-lg">RadiaSafe</span>
          </Link>
        </div>
        <div className="p-4 flex flex-auto justify-end items-center gap-4">
          <Searchbar />
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <div className="hidden lg:block">
            <Dropdown />
          </div>
          <CartDrawer element={<Cart />} />
        </div>
      </header>
    </>
  );
};

export default Header;
