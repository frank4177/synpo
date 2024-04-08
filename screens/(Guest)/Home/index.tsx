"use client";
import HomeNavbar from "@/components/Navbar/HomeNavbar";
import GuestContainer from "@/containers/GuestContainer";
import React from "react";
import { Input } from "@/components/ui/input";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReviewSVG from "@/components/ReviewSVG";
import { useRouter } from "next/navigation";
import { dashboardPathname } from "@/constants/pathname";

const HomeScreen = () => {
  const navigate = useRouter();

  const search = () => {
    navigate.push(dashboardPathname);
  };
  return (
    <>
    <HomeNavbar />
      <div className="flex flex-row justify-between h-[90vh] center-component ">
        <div className="space-y-5 flex flex-col w-fit self-center">
          <h3 className="font-[700] text-[64px] leading-[77px]">
            Find a place you
            <br />
            will love to live!
          </h3>
          <p className="text-[24px]">
            See through the lenses of people who have
            <br /> lived or visited the neighbourhood you might
            <br /> have in mind.
          </p>
          <div>
            <SearchBar />

            <Button
              className="bg-[#3366FF] h-[50px]  w-[146px] mt-6 "
              onClick={() => search()}
            >
              Search
            </Button>
          </div>
        </div>

     

        <div className="reviews-home-mq">
          {/* <div className="flex flex-row items-center">
              <Image
                src="/images/photo.svg"
                width={24}
                height={24}
                className="rounded-full"
                alt="reviews"
              />
              <div>
                <div className="text-[13px]">James T.</div>
                <div className="text-[13px]">5 months</div>
              </div>
            </div>

            <div>
              <div>Ikate, Lekki</div>
            </div>
<ReviewSVG/> */}

          <Image
            src="/images/reviews-pico2.svg"
            width={530}
            height={100}
            alt="reviews"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
