import LoginForm from "@/app/(auth)/login/login-form";
import React from "react";

const Login = () => {
  return (
    <>
      <h1 className="text-center text-xl font-semibold">Login</h1>
      <div className="flex justify-center items-center">
        <div className="w-[600px]">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
