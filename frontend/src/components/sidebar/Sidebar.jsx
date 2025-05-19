import About from "@/pages/about/About";
import Product from "@/pages/product/Product";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="block lg:hidden z-[99]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-gray-900 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
            <Link to="/products">Products</Link>
            </li>
            <li>
            <Link to="/aboutus">About Us</Link>
            </li>
            <li>
            <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
