import Main from "@/constants/Main";
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://via.placeholder.com/300x200.png?text=Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
    description:
      "Stylish smart watch with fitness tracking and message notifications.",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: "$49.99",
    image: "https://via.placeholder.com/300x200.png?text=Speaker",
    description:
      "Compact portable speaker with powerful bass and Bluetooth connectivity.",
  },
  {
    id: 4,
    name: "Drone Camera",
    price: "$299.99",
    image: "https://via.placeholder.com/300x200.png?text=Drone+Camera",
    description:
      "4K drone camera with GPS and live video streaming capabilities.",
  },
];

function Product() {
  return (
    <Main className="bg-white z-[-1]">
      <div className=" bg-white min-h-screen py-6 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full text-gray-900 h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-900">{product.name}</h2>
                <p className="text-gray-900">{product.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-xl text-gray-900 font-semibold">
                    {product.price}
                  </span>
                  <button className="btn btn-primary cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Product;
