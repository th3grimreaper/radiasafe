import Main from "@/constants/Main";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
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
      quantity: 2,
      size: "L",
      image: "https://via.placeholder.com/60",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = 150;
  const discount = 300;
  const subtotal = total + delivery - discount;

  return (
    <Main className="bg-white text-gray-900">
      <div className="cartContainer p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Unified Cart Items Container */}
          <div className="bg-white border rounded-lg p-6 space-y-6 shadow-sm">
            {/* Header Row (hidden on small screens) */}
            <div className="hidden md:flex justify-between px-2 text-sm font-semibold text-gray-700">
              <span className="w-1/2">Product</span>
              <span className="w-1/4 text-center">Size</span>
              <span className="w-1/4 text-right">Price</span>
            </div>

            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {/* Product Info */}
                  <div className="flex gap-4 w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-lg">{item.name}</h4>

                      {/* Quantity Controller */}
                      <div className="flex items-center mt-2 w-fit border rounded-full overflow-hidden">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1 text-lg hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-3 py-1 text-lg hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal */}
                      <p className="mt-2 font-bold">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="text-left md:text-center w-full md:w-1/4 font-medium text-gray-700">
                    <span className="md:hidden font-semibold">Size: </span>
                    {item.size}
                  </div>

                  {/* Price */}
                  <div className="text-left md:text-right w-full md:w-1/4 font-medium text-gray-700">
                    <span className="md:hidden font-semibold">Price: </span>₹
                    {item.price}
                  </div>
                </div>

                {/* Divider between items */}
                {index < cartItems.length - 1 && (
                  <hr className="my-4 border-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coupon Section */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-1">Apply Coupon</h3>
              <p className="text-sm text-gray-600 mb-3">
                You can also use a promotional code for extra savings
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 border border-gray-300 min-w-[100px] px-3 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-900 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Summary Section */}
            <div className="border p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="font-bold text-lg">TOTAL</h3>
              <div className="flex justify-between text-sm">
                <span>Items Total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Charges</span>
                <span>₹{delivery}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-base">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-colors mt-4">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CartPage;

// import Main from "@/constants/Main";
// import React from "react";

// const CartPage = () => {
//   return (
//     <Main className=" bg-white text-gray-900">
//       <div className="cartContainer p-8">
//         <div className=" text-2xl font-bold">Your Cart</div>
//       </div>
//     </Main>
//   );
// };

// export default CartPage;
