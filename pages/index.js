import Navbar from "@/components/Navbar";

import Image from "next/image";
import Link from "next/link";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { NightShelter } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LoadingButton } from "@mui/lab";
// import Navbar from "@/components/Navbar";
export default function Home() {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");
  const [load, setLoading] = useState(false);

  return (
    <div className="xyz">
      <div className="main">
        <div style={{ fontSize: "50px", fontWeight: "700" }}>
          Search for a Hotel
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>
        <div className="dates">
          <h1>Check In Date</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(e) => setcheckInDate(e)} />
          </LocalizationProvider>
        </div>
        <div className="dates">
          <h1>Check Out Date</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(e) => setcheckOutDate(e)} />
          </LocalizationProvider>
        </div>
        <div className="button">
          <Link
            href={{
              pathname: "/hotel",
              query: {
                city: `${hotelName}`,
                checkIn: `${dayjs(checkInDate).format("YYYY-MM-DD")}`,
                checkOut: `${dayjs(checkOutDate).format("YYYY-MM-DD")}`,
              },
            }}
          >
            <button>Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
