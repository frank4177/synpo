import { dashboardPathname, loginPagePathname } from "@/constants/pathname";
import CenterContainer from "@/containers/CenterContainer";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import Logo from "../Logo";

const HomeNavbar = () => {
  return (
    <div>
      <div className="flex flex-row h-[70px] bg-inherit  sticky top-0 items-center  center-component  justify-between">
        <Logo/>
        {/* <Link href={loginPagePathname} className='text-[#5378F6] text-[14px]'>Login</Link> */}
        <Link href={dashboardPathname} className="flex flex-row items-center gap-2">
          <p className="font-[500] text-[16px]">Welcome!</p>
          <Image
            src="/images/photo.svg"
            className="rounded-full"
            height={36}
            width={36}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
