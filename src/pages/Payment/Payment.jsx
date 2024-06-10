import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { addPayment } from "../../Api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const location = useLocation();
  const { trainerData, selectedTime, selectedPackage } = location.state || {};
  const { user } = useContext(AuthContext);

  if (!trainerData || !selectedTime || !selectedPackage) {
    return <div>Error: Missing booking details!</div>;
  }

  const handlePayment = async (event) => {
    event.preventDefault();
    const paymentData = {
      
      email: user?.email,
      selectedPackage: selectedPackage.name,
      price: selectedPackage.price,
      selectedTime,
      trainerName: trainerData.name,
    };

    try {
      await addPayment(paymentData);
      toast.success("Payment submitted successfully!");
      Navigate("/all-trainer");
    } catch (error) {
      toast.error("Failed to submit payment!");
      console.error("Payment submission error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 shadow my-6">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Trainer: {trainerData.name}</h2>
        <p>Selected Time: {selectedTime}</p>
        <p>Package: {selectedPackage.name}</p>
        <p>Price: ${selectedPackage.price}</p>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none"
        >
          Submit Payment
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Payment;
