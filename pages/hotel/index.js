import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hotel from "@/components/Hotel";
import Link from "next/link";
import { getSession } from "next-auth/react";
function hotel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { city, checkIn, checkOut } = router.query;
  const getData = async () => {
    const res = await fetch(
      `https://airbnb13.p.rapidapi.com/search-location?location=${city}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=INR`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fbc6a953camsha0e8f2760e08195p10006cjsn40ee5710c732",
          "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    setLoading(false);
    setData(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          {data.map((hotel) => {
            const data = [hotel];
            data.push({ price: hotel.price });
            return (
              <Link
                href={{
                  pathname: `/hotel/${hotel.id}`,
                  query: {
                    bath: hotel.bathrooms,
                    beds: hotel.bedrooms,
                    noBeds: hotel.beds,
                    city: hotel.city,
                    address: hotel.address,
                    host: hotel.hostThumbnail,
                    images: hotel.images,
                    price: hotel.price.rate,
                    name: hotel.name,
                  },
                }}
                style={{
                  textDecoration: "none",
                }}
                key={hotel.id}
              >
                <Hotel hotel={hotel} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default hotel;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}
