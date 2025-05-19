import { useState } from "react";

function ProductSizes() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`px-4 py-2 border-2 rounded-full text-sm font-medium transition-all
            ${
              selectedSize === size
                ? "border-black bg-black text-white"
                : "border-gray-300 text-gray-700 hover:border-black"
            }
          `}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default ProductSizes;
