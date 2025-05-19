import Main from "@/constants/Main";
import React, { useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Noise Smartwatch X1",
      image: "/images/watch.jpg",
      price: 2999,
    },
    {
      id: 2,
      name: "Sony WH-CH520 Headphones",
      image: "/images/headphones.jpg",
      price: 4599,
    },
    {
      id: 3,
      name: "Apple iPhone 14 Case - Blue",
      image: "/images/iphone-case.jpg",
      price: 1299,
    },
    {
      id: 4,
      name: "Apple iPhone 15 Case - Blue",
      image: "/images/iphone-case.jpg",
      price: 1599,
    },
  ]);

  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMoveToCart = (id) => {
    const item = wishlistItems.find((i) => i.id === id);
    // You can add logic here to add `item` to cart
    console.log("Moved to cart:", item);
    handleRemove(id);
  };

  return (
    <Main className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain mb-4"
                />
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-lg font-bold mb-3">₹{item.price}</p>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex-1 border border-gray-400 py-2 rounded hover:bg-gray-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Main>
  );
};

export default Wishlist;
