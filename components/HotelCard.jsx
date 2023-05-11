import React, { useState } from "react";
import {
  BedSharp,
  BathroomSharp,
  NightShelterSharp,
} from "@mui/icons-material";
import BookingDetails from "./BookingDetails";
function HotelCard({
  hotel: { bath, beds, noBeds, price, host, images, city, address, name },
}) {
  const [book,setBook]=useState(false);
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={images[0]} />
      </div>
      <div className="content-container">
        <div className="content-div">
          <div className="hotel-info">
            <div>
              <div className="name">{name}</div>
              <div className="place">
                {address} | {city}
              </div>
            </div>
            <div className="host-info">
              <img src={host} alt="host" />
              <div className="room-details">
                <div className="beds">
                  <BedSharp /> <p>{noBeds}</p>
                </div>
                <div className="bathrooms">
                  <BathroomSharp /> {bath}
                </div>
                <div className="rooms">
                  <NightShelterSharp /> {beds}
                </div>
              </div>
            </div>
          </div>
          <div className="price">
            <div>₹{price}</div>
            <div className="button">
              <button onClick={()=>setBook(true)}>Book Hotel</button>
            </div>
          </div>
        </div>
        <h2>More Images of The Hotel</h2>
        <div className="images">
          {images.map((image) => (
            <img src={image} className="image" />
          ))}
        </div>
      </div>
      {book&&<BookingDetails deatils={{price,name}}/>}
    </div>
  );
}

export default HotelCard;
