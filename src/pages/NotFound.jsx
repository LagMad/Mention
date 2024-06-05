import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-white gap-8">
        <div className="flex flex-col items-center justify-center h-96 w-96 bg-cust-green rounded-full">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl">Page Not Found</p>
        </div>
        <Button
          className=""
          type={"button"}
          variation={"primary-transparent"}
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
