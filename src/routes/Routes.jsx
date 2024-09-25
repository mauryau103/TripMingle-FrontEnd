import React, { lazy } from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Trip from "../components/trip/Trip";
import SignUp from "../user/auth/signup/SignUp";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },

    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/service",
      element: (
        <>
          <Navbar />
          <Service />
          <Trip />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },

    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <SignUp />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
