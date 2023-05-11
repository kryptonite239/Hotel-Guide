import { useState } from "react";

function BookingDetails({ deatils: { price, name } }) {
  const [cancel,setCancel]=useState(false);
  return (
    <>
      {!cancel && (
        <div className="booking">
          <h1 style={{ fontSize: "30px" }}>Your Booking Details</h1>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
            className="pricedetails"
          >
            Hotel Name:{" "}
            <div style={{ fontWeight: 500, marginTop: "10px" }}>{name}</div>
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
            className="pricedetails"
          >
            <div>Final Price:</div>
            <div
              style={{
                fontWeight: 500,
                marginTop: "10px",
                alignItems: "center",
                display: "flex",
                height: "30px",
                justifyContent: "center",
                color: "#5d9c59",
                fontWeight: "700",
              }}
            >
              ₹{price}
            </div>
          </div>
          <div
            className="button"
            style={{
              display: "flex",
              gap: "50px",
            }}
          >
            <button>Book Now</button>
            <button
              onClick={() => {
                setCancel(true);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingDetails;
