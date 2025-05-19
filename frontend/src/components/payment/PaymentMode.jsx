import React, { useState } from "react";

const PaymentMode = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery" },
    { id: "card", label: "Credit/Debit Card" },
    { id: "upi", label: "UPI" },
    { id: "netbanking", label: "Net Banking" },
  ];

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <label
          key={method.id}
          className={`block border p-4 rounded cursor-pointer ${
            selectedMethod === method.id
              ? "border-black bg-gray-100"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => setSelectedMethod(method.id)}
            className="mr-2"
          />
          {method.label}
        </label>
      ))}
      {selectedMethod === "card" && (
        <div className="space-y-3 pt-2">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border p-2 rounded"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border p-2 rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border p-2 rounded"
            />
          </div>
        </div>
      )}

      {selectedMethod === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full border p-2 rounded mt-2"
        />
      )}
    </div>
  );
};

export default PaymentMode;
