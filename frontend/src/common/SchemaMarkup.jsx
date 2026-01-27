// src/components/common/SchemaMarkup.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: "RiverAnSky Luxury Resorts",
    image: "https://riveranskyresorts.com/logo.png",
    "@id": "https://riveranskyresorts.com",
    url: "https://riveranskyresorts.com",
    telephone: "+919325117757",
    email: "booking@riveranskyresorts.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rajur Bahula",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422003",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₹₹₹",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Event Space",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
      },
    ],
    sameAs: [
      "https://www.facebook.com/riveranskyresorts",
      "https://www.instagram.com/riveranskyresorts",
      "https://twitter.com/riveranskyresorts",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
