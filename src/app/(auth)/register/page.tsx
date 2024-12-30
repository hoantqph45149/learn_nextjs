import RegisterForm from "@/app/(auth)/register/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-center text-xl font-semibold">Register</h1>
      <div className="flex justify-center items-center">
        <div className="w-[600px]">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
