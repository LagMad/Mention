import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await handleLogin(formData);

      window.localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          setErrorMessage("Email atau password salah. Silakan coba lagi!");
        } else if (status === 400) {
          setErrorMessage("Itu bukan email. Silakan coba lagi!");
        } else if (status === 404) {
          setErrorMessage("Email tidak ditemukan!");
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
        name="email"
        placeholder="Username/Email"
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
        Login
      </Button>
      <a
        className="text-cust-darker-blue hover:text-cust-green font-semibold self-end transition-all duration-300"
        href="/login"
      >
        Forgot Password?
      </a>
      <div className="self-center">
        Don't have an account yet?{" "}
        <a
          className="font-semibold text-cust-darker-blue hover:text-cust-green transition-all duration-300"
          href="/register"
        >
          Sign Up
        </a>
      </div>
      <div className="text-red-500 font-bold text-center">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
