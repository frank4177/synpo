import HomeNavbar from "@/components/Navbar/HomeNavbar";
import React, { ReactNode } from "react";

interface IGuestContainerProps {
  children: ReactNode;
}

const GuestContainer = ({ children }: IGuestContainerProps) => {
  return (
    <div className="px-[5%] pb-[20px] max- bg-[#FAFCFD] h-screen">
      
      {children}
    </div>
  );
};

export default GuestContainer;
