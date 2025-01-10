import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import GridBackground from "./GridBackground";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <GridBackground />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
