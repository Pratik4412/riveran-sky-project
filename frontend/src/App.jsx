import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default App;
