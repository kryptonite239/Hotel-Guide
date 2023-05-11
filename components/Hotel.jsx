import { Box, Button, Link, Rating } from "@mui/material";
import React from "react";

function Hotel({ hotel }) {
  return (
    <>
      <div className="container">
        <div className="cityRating">
          <div className="title">{hotel.name}</div>

          <div className="Rating">
            <div className="city">{hotel.city}</div>
            <div className="rating">
              <Rating defaultValue={2.5} precision={hotel.rating} readOnly />
              <div className="count">({hotel.reviewsCount})</div>
            </div>
          </div>
        </div>
        <div className="PriceButton">
          <div className="hotelPrice">₹{hotel.price.rate}</div>
          <div className="button">
            <button>Book Hotel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;
