import { useState } from "react";

function CheckPincode() {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const validPincodes = ["100001", "200002", "300003", "492001"];

  const handleCheck = () => {
    if (pincode.length !== 6) {
      setMessage("Please enter a valid 6-digit pincode.");
    } else if (validPincodes.includes(pincode)) {
      setMessage("✅ Delivery available to your location!");
    } else {
      setMessage("❌ Sorry, delivery is not available to this pincode.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          maxLength={6}
          placeholder="Enter your pincode"
          className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-black"
        />
        <button
          onClick={handleCheck}
          className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors"
        >
          Check
        </button>
      </div>
      {message && (
        <p className="text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}

export default CheckPincode;
