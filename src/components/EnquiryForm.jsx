import { useState, useEffect } from "react";
import swal from "sweetalert";
import ComponentHeader from "./ComponentHeader";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const JourneyForm = () => {
  const [formData, setFormData] = useState({
    tripType: "",
    name: "",
    mobile: "",
    email: "",
    dateTime: "",
    pickup: "",
    dropoff: "",
  });
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const sendEmail = async (data) => {
    try {
      const response = await axios.post("/api/sendemail", data, {
        "Content-Type": "application/json",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getCurrentDateTimePlusTwoHours = () => {
    const now = new Date();

    // Add 2 hours
    now.setHours(now.getHours() + 2);

    // Format to "YYYY-MM-DDTHH:MM" for HTML datetime-local input
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  const minDateTime = getCurrentDateTimePlusTwoHours();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading state
    setIsLoading(true);

    // Validate that all fields are filled
    const isFormComplete = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!isFormComplete) {
      swal("Error", "Please fill out all fields", "error");
      setIsLoading(false);
      return;
    }

    // Validate phone number (Indian format - 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.mobile)) {
      swal("Error", "Please enter a valid 10-digit mobile number", "error");
      setIsLoading(false);
      return;
    }

    // Validate date-time is at least 2 hours in the future
    const selectedDateTime = new Date(formData.dateTime);

    if (selectedDateTime < minDateTime) {
      swal("Error", "Please select a time at least 2 hours from now", "error");
      setIsLoading(false);
      return;
    }
    if (formData?.pickup === formData?.dropoff) {
      swal("Error", "Pickup & Drop Location cannot be same ", "error");
      setIsLoading(false);
      return;
    }
    if (formData) {
      let loadingToast = toast.loading("Data Sending ....");
      const data = await sendEmail({ ...formData });
      if (data.status) {
        toast.dismiss(loadingToast);
        toast.success(`${data.message}`);
        setIsLoading(false);
        swal("Success", "Enquiry sent successfully!", "success");
        setFormData({
          tripType: "",
          name: "",
          mobile: "",
          email: "",
          dateTime: "",
          pickup: "",
          dropoff: "",
        });
        toast.dismiss(loadingToast);
        toast.error(data.message);
      }
    }

    // Send the form data to the backend
    // const response = await fetch("/api/sendemail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const result = await response.json();
    // setIsLoading(false); // Stop loading after the request is completed

    // if (data.status) {
    //   swal("Success", "Enquiry sent successfully!", "success");
    //   setFormData({
    //     tripType: "",
    //     name: "",
    //     mobile: "",
    //     email: "",
    //     dateTime: "",
    //     pickup: "",
    //     dropoff: "",
    //   });
    // } else {
    //   swal("Error", "Failed to send enquiry", "error");
    // }
  };

  return (
    <div>
      <form
        className="min-w-[380px] mx-2 bg-white md:min-w-[500px] md:max-w-[500px] max-w-[400px] md:mx-auto pb-4 border-2 border-[#5c8ffc] shadow-xl rounded-[15px]"
        onSubmit={handleSubmit}
      >
        <div className="p-4">
          <label className="block font-medium mb-2">Trip Type</label>
          <div className="flex justify-around md:justify-between gap-2 md:gap-4">
            <label className="inline-flex border-2 bg-green-50 border-green-100 p-2 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={formData.tripType === "one-way"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                One Way
              </span>
            </label>
            <label className="inline-flex border-2 bg-green-50 border-green-100 p-2 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={formData.tripType === "round-trip"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                Round Trip
              </span>
            </label>
            <label className="inline-flex border-2 bg-green-50 p-2 border-green-100 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="semi-round-trip"
                checked={formData.tripType === "semi-round-trip"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                Semi Round Trip
              </span>
            </label>
          </div>
        </div>

        {/* Name */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-1 px-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Mobile */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="mobile">
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Email */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="dateTime">
            Date & Time of Journey
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            id="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            min={minDateTime} // Setting minimum date-time to 2 hours from now
            required
          />
        </div>

        {/* Pickup and Dropoff */}
        <div className="flex">
          <div className="p-2 px-4">
            <label className="block font-medium mb-2" htmlFor="pickup">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickup"
              id="pickup"
              minLength={3}
              value={formData.pickup}
              onChange={handleChange}
              className="w-full p-2 border border-[#33ae60] rounded-2xl"
              placeholder="Enter pickup location"
              required
            />
          </div>

          <div className="p-2 px-4">
            <label className="block font-medium mb-2" htmlFor="dropoff">
              Dropoff Location
            </label>
            <input
              type="text"
              name="dropoff"
              id="dropoff"
              minLength={3}
              value={formData.dropoff}
              onChange={handleChange}
              className="w-full p-2 border border-[#33ae60] rounded-2xl"
              placeholder="Enter dropoff location"
              required
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="px-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JourneyForm;
