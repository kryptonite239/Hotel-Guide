import { useRouter } from "next/router";
import React from "react";
import HotelCard from "@/components/HotelCard";
function city() {
  const router = useRouter();
  const { bath, beds, noBeds, price, host, images, city, address, name } =
    router.query;
  console.log(router.query);
  return (
    <>
      <HotelCard
        hotel={{ bath, beds, noBeds, price, host, images, city, address, name }}
      />
    </>
  );
}

export default city;
