// src/components/common/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  author = "RiverAnSky Luxury Resorts",
  canonical,
}) => {
  const siteUrl = "https://riveranskyresorts.com"; // Replace with your domain
  const defaultImage = `${siteUrl}/og-default.jpg`; // Default OG image

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical || ogUrl || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="RiverAnSky Luxury Resorts" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl || siteUrl} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta
        property="twitter:description"
        content={ogDescription || description}
      />
      <meta property="twitter:image" content={ogImage || defaultImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nashik, Maharashtra" />
      <meta name="geo.position" content="19.9975;73.7898" />
      <meta name="ICBM" content="19.9975, 73.7898" />
    </Helmet>
  );
};

export default SEO;
