import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartDrawer = ({ element }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Radiation Protection Glasses",
      price: 1200,
      quantity: 1,
      size: "M",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Lead Apron",
      price: 3400,
      quantity: 1,
      size: "L",
      image: "https://via.placeholder.com/60",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="drawer-end z-[99]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          {element}
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu bg-white text-gray-900 min-h-full w-80 p-4 flex flex-col justify-between">
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="p-2 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg
                      className="hover:scale-125 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"
                      />
                    </svg>
                  </button>

                  <div className="flex gap-3 items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm break-words whitespace-normal pr-6">
                        {item.name}
                      </h4>
                      <p className="text-sm text-black">₹{item.price}</p>
                      <p className="text-sm text-black">
                        Size: <span className="font-bold">{item.size}</span>
                      </p>

                      <div className="flex items-center mt-2 w-fit border rounded-full overflow-hidden">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1 text-lg hover:bg-gray-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 text-md">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-3 py-1 text-lg hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <p className="mt-1 text-sm text-black font-bold">
                        Subtotal: ₹{item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                </div>

                {index !== cartItems.length - 1 && (
                  <hr className="my-3 border-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">₹{total}</span>
            </div>

            {/* Go to Cart button */}
            <Link
              to="/cart"
              className="block w-full text-center mb-3 bg-white border border-black text-black py-2 rounded-lg hover:bg-gray-100"
            >
              Go to Cart
            </Link>

            <div className="flex justify-between gap-3">
              <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                <Link to="/checkout">Checkout</Link>
              </button>
              <button className="flex-1 border border-black text-black py-2 rounded-lg hover:bg-black-100">
                <Link to="/wishlist">Wishlist</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
