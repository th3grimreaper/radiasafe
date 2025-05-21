import React, { useState } from "react";
import Main from "../../constants/Main";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddAddressForm from "@/components/addressForm/AddressForm";
import PaymentMode from "@/components/payment/PaymentMode";

const Checkout = () => {
  const [formMode, setFormMode] = useState("add"); // or "edit"
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);

  const toggleAddressOptions = () => {
    setShowAddressOptions(!showAddressOptions);
    setShowAddAddressForm(false); // Reset add form visibility when toggling address options
  };

  const [savedAddresses, setSavedAddresses] = useState([
    {
      name: "John Doe",
      address: "123 Main Street, Springfield, IL - 62704",
      phone: "+1 123 456 7890",
    },
    {
      name: "Jane Smith",
      address: "456 Elm Street, Chicago, IL - 60616",
      phone: "+1 987 654 3210",
    },
    {
      id: 3,
      name: "Robert Brown",
      address: "789 Oak Ave, Naperville, IL - 60540",
      phone: "+1 111 222 3333",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]);
  const [showAddressOptions, setShowAddressOptions] = useState(false);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Classic Sneakers",
      price: 4000,
      quantity: 1,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: 1000,
      quantity: 2,
      image: "/images/product2.jpg",
    },
  ];

  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharges = 150;
  const discount = 300;
  const subtotal = itemsTotal + deliveryCharges - discount;

  const totals = { itemsTotal, deliveryCharges, discount, subtotal };

  return (
    <Main className="bg-white text-gray-900">
      <div className="checkoutContainer p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Left Side - Accordion */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {/* Address Section */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Delivery Address</AccordionTrigger>
              <AccordionContent className="space-y-4">
                {/* Selected Delivery Address */}
                {selectedAddress && (
                  <div className="p-4 border rounded shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-base">
                          {selectedAddress.name}
                        </p>
                        <p className="text-sm text-gray-700">
                          {selectedAddress.address}
                        </p>
                        <p className="text-sm text-gray-700">
                          {selectedAddress.phone}
                        </p>
                      </div>
                      <button
                        onClick={toggleAddressOptions}
                        className="text-sm text-blue-600 underline"
                      >
                        Change Address
                      </button>
                    </div>
                  </div>
                )}

                {/* Saved Addresses + Add New */}
                {showAddressOptions && (
                  <>
                    {/* Saved Addresses */}
                    <div className="space-y-3">
                      <p className="font-semibold">Saved Addresses</p>
                      <div className="grid gap-3">
                        {savedAddresses.map((address, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded space-y-2"
                          >
                            <div>
                              <p className="font-medium">{address.name}</p>
                              <p className="text-sm">{address.address}</p>
                              <p className="text-sm">{address.phone}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <button
                                className="text-sm text-blue-600 underline"
                                onClick={() => {
                                  setSelectedAddress(address);
                                  setShowAddressOptions(false);
                                  setShowAddAddressForm(false);
                                }}
                              >
                                Deliver to this address
                              </button>
                              <button
                                className="text-sm text-yellow-600 underline"
                                onClick={() => {
                                  setEditingAddressIndex(index); // index of the address being edited
                                  setFormMode("edit");
                                  setShowAddAddressForm(true);
                                }}
                              >
                                Modify
                              </button>
                              <button
                                className="text-sm text-red-600 underline"
                                onClick={() => {
                                  const confirmDelete = window.confirm(
                                    "Are you sure you want to delete this address?",
                                  );
                                  if (confirmDelete) {
                                    setSavedAddresses((prev) =>
                                      prev.filter(
                                        (_, addrIndex) => addrIndex !== index,
                                      ),
                                    );
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setFormMode("add");
                          setEditingAddressIndex(null);
                          setShowAddAddressForm(true);
                        }}
                        className="text-sm text-blue-600 underline"
                      >
                        Add New Address
                      </button>
                    </div>

                    {/* Add New Address Form */}
                    {showAddAddressForm && (
                      <AddAddressForm
                        mode={formMode}
                        initialData={
                          formMode === "edit"
                            ? savedAddresses[editingAddressIndex]
                            : null
                        }
                        onSave={(newAddress) => {
                          if (
                            formMode === "edit" &&
                            editingAddressIndex !== null
                          ) {
                            const updated = [...savedAddresses];
                            updated[editingAddressIndex] = newAddress;
                            setSavedAddresses(updated);
                          } else {
                            setSavedAddresses((prev) => [...prev, newAddress]);
                          }
                          setSelectedAddress(newAddress);
                          setShowAddAddressForm(false);
                          setShowAddressOptions(false);
                        }}
                        onCancel={() => setShowAddAddressForm(false)}
                      />
                    )}
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Order Summary */}
            <AccordionItem value="item-2">
              <AccordionTrigger>Order Summary</AccordionTrigger>
              <AccordionContent className="space-y-6">
                {/* Scrollable Product List */}
                <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 border p-4 rounded"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex flex-col flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary Total Section */}
                <div className="border p-6 rounded-lg shadow-sm space-y-4">
                  <h3 className="font-bold text-lg">Order Total</h3>
                  <div className="flex justify-between text-sm">
                    <span>Items Total</span>
                    <span>{totals.itemsTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Charges</span>
                    <span>{totals.deliveryCharges}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount</span>
                    <span>{totals.discount}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-base">
                    <span>Subtotal</span>
                    <span>{totals.subtotal}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Payment Mode */}
            <AccordionItem value="item-3">
              <AccordionTrigger>Payment Mode</AccordionTrigger>
              <AccordionContent>
                {/* Placeholder for payment options */}
                <PaymentMode />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Side - Coupon and Total */}
        <div className="space-y-6">
          {/* Apply Coupon */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Apply Coupon</h3>
            <p className="text-sm text-gray-600 mb-3">
              You can also use a promotional code for extra savings
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 min-w-[100px] border border-gray-300 px-3 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="border p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="font-bold text-lg">TOTAL</h3>
            <div className="flex justify-between text-sm">
              <span>Items Total</span>
              <span>{totals.itemsTotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Charges</span>
              <span>{totals.deliveryCharges}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span>{totals.discount}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Subtotal</span>
              <span>{totals.subtotal}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:text-gray-300 transition-colors mt-4">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Checkout;
