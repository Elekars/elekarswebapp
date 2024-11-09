import React, { useState } from "react";

// Predefined distances between locations in kilometers
const distanceMatrix = {
  Korba: {
    Raipur: 230,
    Bilaspur: 120,
    Katghora: 35,
    Dhelwadih: 35,
    BankiMogra: 25,
    Gursiya: 55,
    Chotiya: 75,
    Pondiuproda: 40,
    Pali: 65,
    Sutarra: 42,
  },
  Raipur: {
    Korba: 230,
    Bilaspur: 100,
    Katghora: 195,
    Dhelwadih: 195,
    BankiMogra: 205,
    Gursiya: 185,
    Chotiya: 155,
    Pondiuproda: 190,
    Pali: 165,
    Sutarra: 188,
  },
  Bilaspur: {
    Korba: 120,
    Raipur: 100,
    Katghora: 90,
    Dhelwadih: 85,
    BankiMogra: 110,
    Gursiya: 105,
    Chotiya: 135,
    Pondiuproda: 115,
    Pali: 140,
    Sutarra: 138,
  },
  Katghora: {
    Korba: 35,
    Raipur: 195,
    Bilaspur: 85,
    Dhelwadih: 30,
    BankiMogra: 10,
    Gursiya: 20,
    Chotiya: 40,
    Pondiuproda: 55,
    Pali: 75,
    Sutarra: 72,
  },
  Dhelwadih: {
    Korba: 35,
    Raipur: 195,
    Bilaspur: 85,
    Katghora: 30,
    BankiMogra: 40,
    Gursiya: 50,
    Chotiya: 60,
    Pondiuproda: 75,
    Pali: 65,
    Sutarra: 72,
  },
  BankiMogra: {
    Korba: 25,
    Raipur: 205,
    Bilaspur: 110,
    Katghora: 10,
    Dhelwadih: 40,
    Gursiya: 15,
    Chotiya: 35,
    Pondiuproda: 50,
    Pali: 70,
    Sutarra: 60,
  },
  Gursiya: {
    Korba: 55,
    Raipur: 185,
    Bilaspur: 105,
    Katghora: 20,
    Dhelwadih: 50,
    BankiMogra: 15,
    Chotiya: 45,
    Pondiuproda: 60,
    Pali: 85,
    Sutarra: 90,
  },
  Chotiya: {
    Korba: 75,
    Raipur: 155,
    Bilaspur: 135,
    Katghora: 40,
    Dhelwadih: 60,
    BankiMogra: 35,
    Gursiya: 45,
    Pondiuproda: 70,
    Pali: 95,
    Sutarra: 80,
  },
  Pondiuproda: {
    Korba: 40,
    Raipur: 190,
    Bilaspur: 115,
    Katghora: 55,
    Dhelwadih: 75,
    BankiMogra: 50,
    Gursiya: 60,
    Chotiya: 70,
    Pali: 85,
    Sutarra: 75,
  },
  Pali: {
    Korba: 65,
    Raipur: 165,
    Bilaspur: 140,
    Katghora: 75,
    Dhelwadih: 65,
    BankiMogra: 70,
    Gursiya: 85,
    Chotiya: 95,
    Pondiuproda: 85,
    Sutarra: 95,
  },
  Sutarra: {
    Korba: 42,
    Raipur: 188,
    Bilaspur: 138,
    Katghora: 72,
    Dhelwadih: 72,
    BankiMogra: 60,
    Gursiya: 90,
    Chotiya: 80,
    Pondiuproda: 75,
    Pali: 95,
  },
};

const oneWayRoutes = [
  ["Katghora", "Korba"],
  ["Katghora", "Bilaspur"],
  ["Bilaspur", "Raipur"],
  ["Katghora", "Raipur"],
];

const calculateFare = (distance, isRoundTrip) => {
  const farePerKm = 15;
  let fare = distance * farePerKm;
  if (isRoundTrip) {
    fare *= 2;
  }
  return fare;
};

const FairCalculator = ({ fare, setFare }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const handleCalculateFare = () => {
    if (pickupLocation === dropLocation) {
      alert("Pickup and Drop locations cannot be the same.");
      return;
    }

    const distance = distanceMatrix[pickupLocation]?.[dropLocation];

    if (distance !== undefined) {
      const fare = calculateFare(distance, isRoundTrip);
      setFare(fare);
    } else {
      alert(
        "Distance information is not available for the selected locations."
      );
    }
  };

  const filteredDropLocations = Object.keys(distanceMatrix).filter(
    (location) => location !== pickupLocation
  );

  const isOneWayAvailable = oneWayRoutes.some(
    (route) =>
      (route[0] === pickupLocation && route[1] === dropLocation) ||
      (route[1] === pickupLocation && route[0] === dropLocation)
  );

  return (
    <div className="flex justify-center items-center mx-2   ">
      <div
        className="p-4 min-w- bg-white rounded-lg shadow-md min-h-[400px] flex flex-col justify-around
      "
      >
        <div className="mb-4">
          <label className="block text-gray-700">Pickup Location</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setPickupLocation(e.target.value);
              setDropLocation("");
              setIsRoundTrip(true); // Reset to round-trip by default
            }}
            value={pickupLocation}
          >
            <option value="">Select Pickup Location</option>
            {Object.keys(distanceMatrix).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Drop Location</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setDropLocation(e.target.value)}
            value={dropLocation}
          >
            <option value="">Select Drop Location</option>
            {filteredDropLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trip Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) =>
              setIsRoundTrip(
                e.target.value === "round-trip" || !isOneWayAvailable
              )
            }
            value={isRoundTrip ? "round-trip" : "one-way"}
            disabled={!isOneWayAvailable}
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
          </select>
          {!isOneWayAvailable && (
            <p className="text-blue-500 text-sm mt-2">
              One-way trip available for the limited locations.
            </p>
          )}
        </div>
        <button
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
          onClick={handleCalculateFare}
        >
          Calculate Fare
        </button>
        {/* {fare !== null && (
          <p className="mt-4 text-center text-lg font-semibold">
            Total Fare: ₹{fare}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default FairCalculator;
