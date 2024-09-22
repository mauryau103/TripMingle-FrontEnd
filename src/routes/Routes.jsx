import React, { lazy } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          {/* <Header />
          <Hero />
          <About /> */}
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
