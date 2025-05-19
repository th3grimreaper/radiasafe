import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className=" bg-gray-100 text-gray-900 text-[1rem] font-normal btn m-1">
        Options
      </div>
      <ul
        tabIndex={0}
        className="flex flex-col gap-1 dropdown-content menu bg-gray-100 z-1 w-52 shadow-sm"
      >
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
        <Link to="/wishlist">Your Wishlist</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

