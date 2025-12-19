import React, { useState } from "react";
import "./TripDetails.css";

const TripDetails = () => {
  const [trip, setTrip] = useState({
    source: "",
    destination: "",
    members: 1,
    startDate: "",
    endDate: "",
    budgetType: "overall",
    budgetAmount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip((prev) => ({ ...prev, [name]: value }));
  };

  const changeMembers = (delta) => {
    setTrip((prev) => ({
      ...prev,
      members: Math.max(1, Number(prev.members) + delta)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip data:", trip);
    // navigate("/next-page") or call API here
  };

  return (
    <div className="trip-page">
      <div className="trip-card">
        <h2>Trip Details</h2>

        <form onSubmit={handleSubmit} className="trip-form">
          {/* source / destination */}
          <div className="row">
            <div className="field">
              <label>Source location</label>
              <input
                type="text"
                name="source"
                value={trip.source}
                onChange={handleChange}
                placeholder="Enter source"
              />
            </div>

            <div className="field">
              <label>Destination location</label>
              <input
                type="text"
                name="destination"
                value={trip.destination}
                onChange={handleChange}
                placeholder="Enter destination"
              />
            </div>
          </div>

          {/* members / dates */}
          <div className="row">
            <div className="field">
              <label>Number of members</label>
              <div className="members-input">
                <button type="button" onClick={() => changeMembers(-1)}>
                  −
                </button>
                <input
                  type="number"
                  name="members"
                  value={trip.members}
                  onChange={handleChange}
                  min={1}
                />
                <button type="button" onClick={() => changeMembers(1)}>
                  +
                </button>
              </div>
            </div>

            <div className="field">
              <label>Trip dates</label>
              <div className="date-range">
                <input
                  type="date"
                  name="startDate"
                  value={trip.startDate}
                  onChange={handleChange}
                />
                <span> - </span>
                <input
                  type="date"
                  name="endDate"
                  value={trip.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* budget option / amount */}
          <div className="row">
            <div className="field">
              <label>Budget option</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="budgetType"
                    value="overall"
                    checked={trip.budgetType === "overall"}
                    onChange={handleChange}
                  />
                  Overall budget
                </label>
                <label>
                  <input
                    type="radio"
                    name="budgetType"
                    value="perPerson"
                    checked={trip.budgetType === "perPerson"}
                    onChange={handleChange}
                  />
                  Per person budget
                </label>
              </div>
            </div>

            <div className="field">
              <label>Budget Amount ($)</label>
              <input
                type="number"
                name="budgetAmount"
                value={trip.budgetAmount}
                onChange={handleChange}
                placeholder="Enter amount"
                min={0}
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="next-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripDetails;
