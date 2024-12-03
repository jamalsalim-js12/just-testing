import AuthLeft from "@/components/auth-left";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-screen min-h-screen xl:p-10 lg:p-5">
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:min-h-full lg:h-full overflow-auto">
        <AuthLeft />
      </div>
      <main className="h-full w-full lg:w-1/2 flex flex-col items-center md:justify-center overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
