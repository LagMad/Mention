import React, { useState, useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleRegister } from "../../api/services/auth";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await handleRegister(formData);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 500) {
          setErrorMessage("Email already registered!");
          d;
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  return (
    <form
      className="flex flex-col justify-center items-center w-full h-full font-Poppins gap-2"
      onKeyDown={handleKeyDown}
      onSubmit={(e) => (handleSubmit(e), e.preventDefault())}
      tabIndex={0}
    >
      <Input
        className="font-normal"
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required={true}
      />
      <Input
        className="font-normal"
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required={true}
      />
      <Input
        className="flex justify-center items-center font-normal"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required={true}
      >
        <button
          type="button"
          className={"absolute right-5 top-3"}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "hide" : "show"}
        </button>
      </Input>

      <Button
        className={"w-full"}
        type={"submit"}
        variation={"primary-rectangle"}
      >
        Register
      </Button>
      <div className="self-center">
        Already have an account?{" "}
        <a
          className="font-semibold text-cust-darker-blue hover:text-cust-green transition-all duration-300"
          href="/login"
        >
          Login
        </a>
      </div>
      <div className="text-red-500 font-bold text-center">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default RegisterForm;
