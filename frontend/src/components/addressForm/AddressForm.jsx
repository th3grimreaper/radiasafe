import React, { useEffect, useState } from "react";

const AddAddressForm = ({ mode, initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      name: "",
      address: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="space-y-4 pt-4">
      <p className="font-semibold">{mode === "edit" ? "Edit Address" : "Add New Address"}</p>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          type="text"
          placeholder="Street Address"
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          className="w-full border p-2 rounded"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="state"
          type="text"
          placeholder="State"
          className="w-full border p-2 rounded"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          name="zip"
          type="text"
          placeholder="ZIP Code"
          className="w-full border p-2 rounded"
          value={formData.zip}
          onChange={handleChange}
        />

        <div className="flex gap-2">
          <button type="submit" className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">
            {mode === "edit" ? "Update Address" : "Save Address"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAddressForm;
