import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-20 flex justify-between items-center px-20 bg-white font-Poppins">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="w-1/6">
            <SVGs.MentionLogoBlack />
          </div>
          <div className="flex flex-row w-4/6 justify-center items-center gap-16">
            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>

            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/about"}
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>

            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/feature"}
              onClick={() => navigate("/feature")}
            >
              Feature
            </Button>

            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/heat-map"}
              onClick={() => navigate("/heat-map")}
            >
              Heat Map
            </Button>
          </div>
          <div className="relative">
            <button
              className="flex flex-row justify-center items-center gap-5 text-xl text-cust-orange-normal font-bold w-52 h-full overflow-hidden whitespace-nowrap"
              onClick={toggleDropdown}
            >
              <div className="flex w-12 h-12 bg-cust-orange-normal rounded-full justify-center items-center overflow-hidden">
                <SVGs.DefaultProfilePict/>
              </div>
              <span className="truncate max-w-32">Name</span>
            </button>
            {isOpen && (
              <div className="absolute top-16 w-full left-0 mt-1 bg-transparent text-center">
                <ul className="flex flex-col w-full gap-1">
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/account")}
                    style={{ cursor: "pointer" }}
                  >
                    Account
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/settings")}
                    style={{ cursor: "pointer" }}
                  >
                    Settings
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/language")}
                    style={{ cursor: "pointer" }}
                  >
                    Language
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/about")}
                    style={{ cursor: "pointer" }}
                  >
                    About Mention Website
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/terms-and-conditions")}
                    style={{ cursor: "pointer" }}
                  >
                    Terms and Conditions
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    onClick={() => navigate("/privacy-policy")}
                    style={{ cursor: "pointer" }}
                  >
                    Privacy Policy
                  </li>
                  <li
                    className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-white bg-opacity-30 drop-shadow-xl backdrop-blur-md hover:bg-cust-green rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                    // onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
