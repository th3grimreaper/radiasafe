// import { useState } from "react";

// function Quantity() {
//   const [quantity, setQuantity] = useState(1);

//   const increase = () => setQuantity((prev) => prev + 1);
//   const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   return (
//     <div className="flex items-center pt-2 space-x-4">
//       <button
//         onClick={decrease}
//         className=" flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 text-lg"
//       >
//         -
//       </button>
//       <span className="text-lg font-semibold">{quantity}</span>
//       <button
//         onClick={increase}
//         className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 text-lg"
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default Quantity

import { useState } from "react";

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center pt-2 space-x-4">
      <div className="flex items-center border rounded-full overflow-hidden bg-gray-100">
        <button
          onClick={decrease}
          className="flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-200 text-lg font-bold"
        >
          -
        </button>
        <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
        <button
          onClick={increase}
          className="flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-200 text-lg font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
