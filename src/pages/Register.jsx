import React from "react";

import SVGs from "../components/shared/SVGs";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-screen max-w-screen justify-center items-center bg-cust-darker-blue text-white font-Poppins">
      <div className="flex flex-col w-1/3 h-auto bg-white text-black justify-center items-center p-5 rounded-xl gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <SVG.MentionLogoBlack />
          </div>
          <div className="text-left text-2xl">Welcome To Mention</div>
        </div>
        <div className="text-center">
          Discover and report information in one integrated super app!
        </div>
        <main className="flex flex-col items-center w-full">
          <RegisterForm />
        </main>
      </div>
    </div>
  );
};

export default Register;
