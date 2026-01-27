import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./pages/Testimonial";
import CommonContact from "./pages/CommonContact";
import SchemaMarkup from "./common/SchemaMarkup";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50, // Add this
      once: false,
      disable: false,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <>
      <SchemaMarkup />
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />

      <Testimonial />
      <CommonContact />
      <Footer />
    </>
  );
};

export default App;
