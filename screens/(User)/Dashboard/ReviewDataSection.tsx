"use client";

import { Button } from "@/components/ui/button";
import { queries } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { LeaveReviewButton } from "../../../components/Buttons/LeaveReviewButton";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import useMediaQuery from "@/lib/useMediaQuery";



const ReviewDataSection = () => {
  const matches = useMediaQuery("(max-width: 850px)")
  const reviewsState = useSelector(
    (state: RootState) => state?.reviewData?.reviews
  );

  const scrollContainerRef = useRef<any>(null);

  const handleScrollButtonClick = () => {
    // Accessing the scroll container's current property and scrolling it
    if (scrollContainerRef.current) {
      // Scroll to the right by a fixed amount (e.g., 100 pixels)
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-softPuple pb-3 sticky top-0">
      <DashboardNavbar />
      {matches ? null :<div className="center-component space-y-4 review-data-mq">
        <div className="flex flex-row items-center justify-between gap-5 address-and-button">
          <div>
            <h3 className="font-[500] text-[21px]">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h3>
            <p className="text-[15px]">
              <span className="font-[600]">"450" Reviews</span> (People are
              raving about the selected location)
            </p>
          </div>

          {reviewsState?.length !== 0 && (
            <div className="flex flex-row items-center gap-4">
              <LeaveReviewButton />
              <div className="border-[1px]  h-[45px] w-[56px] rounded-md border-[#3366FF] flex flex-col items-center justify-center cursor-pointer">
                <Image
                  src="/icons/badge-icon.svg"
                  height={16}
                  width={12}
                  alt="share"
                />
              </div>
              <div className="border-[1px]  h-[45px] w-[56px] rounded-md border-[#3366FF] flex flex-col items-center justify-center cursor-pointer">
                <Image
                  src="/icons/share-icon.svg"
                  height={19}
                  width={18}
                  alt="share"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          <div
            className="flex flex-row items-center gap-3 overflow-x-auto scoo "
            ref={scrollContainerRef}
          >
            {queries.map((item) => (
              <div
                className="px-2  border-[1px] text-[14px] border-gray-200 rounded-md bg-white whitespace-nowrap"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            className="rounded-full bg-white cursor-pointer"
            onClick={handleScrollButtonClick}
          >
            <ChevronRight />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ReviewDataSection;
