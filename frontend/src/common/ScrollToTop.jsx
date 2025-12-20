import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scollContainer = document.querySelector("#scroll-wrapper") || window;

    const scrollToTop = () => {
      if (scollContainer === window) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scollContainer.screenTop({ top: 0, behavior: "smooth" });
      }
    };
    const timeout = setTimeout(scrollToTop, 150);

    return () => clearTimeout(timeout);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
