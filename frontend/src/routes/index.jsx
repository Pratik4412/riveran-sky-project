import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import HomeGallery from "../components/homepage/HomeGallery";
import Rooms from "../pages/Rooms";
import OurFacility from "../pages/OurFacility";
import ContactL from "../pages/ContactL";
import SapphireLawn from "../components/SapphireLawn";
import SwimmingPool from "../components/SwimmingPool";
import Amenities from "../components/Amenities";
import DestinationWeddings from "../components/DestinationWeddings";
import CorporateMeetings from "../components/CorporateMeetings";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/amenities",
        element: <Amenities />,
      },
      {
        path: "/gallery",
        element: <HomeGallery />,
      },
      {
        path: "/amenities/sapphire-lawn",
        element: <SapphireLawn />,
      },
      {
        path: "/amenities/swimming-pool",
        element: <SwimmingPool />,
      },
      {
        path: "/amenities/destination-weddings",
        element: <DestinationWeddings />,
      },
      {
        path: "/amenities/corporate-meetings",
        element: <CorporateMeetings />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/ourFacilify",
        element: <OurFacility />,
      },
      { path: "/contact", element: <ContactL /> },
    ],
  },
]);

export default router;
