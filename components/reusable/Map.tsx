"use client";

import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "460px", // full viewport height
  borderRadius: "0", // optional: remove rounding for full-screen map
  overflow: "hidden",
};

const markers = [
  { id: 1, position: { lat: 23.8103, lng: 90.4125 }, label: "Dhaka City Center" },
  { id: 2, position: { lat: 23.7806, lng: 90.4006 }, label: "Bashundhara City Shopping Mall" },
  { id: 3, position: { lat: 23.7333, lng: 90.3928 }, label: "Lalbagh Fort" },
  { id: 4, position: { lat: 23.7772, lng: 90.3995 }, label: "Dhanmondi Lake" },
  { id: 5, position: { lat: 23.8151, lng: 90.4254 }, label: "Jamuna Future Park" },
  { id: 6, position: { lat: 23.7508, lng: 90.3927 }, label: "Ahsan Manzil Museum" },
  { id: 7, position: { lat: 23.7925, lng: 90.4078 }, label: "Bangladesh National Museum" },
];

export default function Map() {
  const center = { lat: 23.8103, lng: 90.4125 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} label={marker.label} />
        ))}
      </GoogleMap>
    </div>
  );
}
