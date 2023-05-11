export default async function fetchApi(city,checkIn,checkOut){
const res = await fetch(
  `https://airbnb13.p.rapidapi.com/search-location?location=${city}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=INR`,
  {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d35a827925msh5fa42ba66d9afbdp14372ajsn198baf5b5609",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  }
);
const data = await res.json();
return data.results;
}