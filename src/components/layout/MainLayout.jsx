import React from "react";
import Navbar from "../shared/Navbar";
// import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="pt-16 text-black font-Poppins bg-cust-darker-blue">
      <Navbar />
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
