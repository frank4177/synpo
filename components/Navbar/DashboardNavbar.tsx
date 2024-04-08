import GuestContainer from "@/containers/GuestContainer";
import Image from "next/image";
import React from "react";
import SearchBar from "../SearchBar";
import Logo from "../Logo";
import useMediaQuery from "@/lib/useMediaQuery";
import { MobileMenu } from "../MobileMenu";

const DashboardNavbar = () => {
  const matches = useMediaQuery("(max-width: 850px)")

  return (
    <div className=" p-5 bg-softPuple">
      <div className="flex flex-row items-center justify-between h-[inherit] center-component gap-5">
        <div className="flex flex-row items-center gap-5 max-w-[800px] w-full">
        <Logo/>
        <div className="search-mq w-full">
        {matches ? null : <SearchBar/>}

        </div>
        </div>
       
        <div className={`flex flex-row items-center gap-2 avatar-mq`}>
          <p className="font-[500] text-[16px]">Welcome!</p>
          <Image
            src="/images/photo.svg"
            className="rounded-full"
            height={36}
            width={36}
            alt="logo"
          />
        </div>
        {!matches ? null : <MobileMenu/>}
      </div>
    </div>
  );
};

export default DashboardNavbar;
