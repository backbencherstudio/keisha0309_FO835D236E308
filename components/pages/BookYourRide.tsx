import React from "react";
import Button from "../reusable/Button";

export default function BookYourRide() {
  return (
    <div
      id="rideBook"
      className="min-h-screen bg-no-repeat bg-bottom bg-contain py-10 px-4"
      style={{ backgroundImage: "url('/image/Frame.png')" }}
    >
      {/* Form Container */}
      <div className="bg-[#F8FAFB] rounded-xl shadow-lg p-6 sm:p-8 md:p-12 w-full max-w-[1320px] mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Book Your Ride
          </h1>
          {/* <p className="text-base sm:text-lg text-[#4A4C56]">
            Add a booking form with fields like
          </p> */}
        </div>

        <form className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Location Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Preferred Date & Time */}
            <div>
              <label
                htmlFor="dateTime"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                placeholder="Pickup Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>

            {/* Drop-off Location */}
            <div>
              <label
                htmlFor="dropoffLocation"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Drop-off Location
              </label>
              <input
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                placeholder="Drop-off Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
                placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label
              htmlFor="serviceType"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Type of Service
            </label>
            <input
              type="text"
              id="serviceType"
              name="serviceType"
              placeholder="Type of Service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
              placeholder-gray-400"
              required
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="AdditionalNotes"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Additional Notes
            </label>
            <textarea
              id="AdditionalNotes"
              name="AdditionalNotes"
              placeholder="Additional Notes"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
              placeholder-gray-400"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button text="Submit Booking Request" />
          </div>
        </form>
      </div>
    </div>
  );
}
