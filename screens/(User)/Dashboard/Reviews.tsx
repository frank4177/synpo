"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { ReviewDataTypes } from "@/types";

interface IReviewsProps {
data: ReviewDataTypes
}

const Reviews = ({data}:IReviewsProps) => {
  return (
    <>
      <div className="max-w-[700px] border-b-[1px] h-fit p-4 space-y-4 pb-3">
        <div className="">
          <div className="flex flex-row justify-between items-center gap-3">
            <div className="flex flex-row items-center gap-3 text-[14px]">
              <Image
                src="/images/photo.svg"
                className="rounded-full"
                height={24}
                width={24}
                alt="photo"
              />
              <span> {data.anonymous ? "Anonymous" : "James T."}</span>
              <span className="text-[#1E1E1E99]">
                {moment(data.time).fromNow()}
              </span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/icons/star-icon.svg"
                height={13}
                width={13}
                alt="star"
              />
              <span className="text-[14px]">{data.rating}.0</span>
            </div>
          </div>
          <p className="text-[16px] mt-1">{data.review}</p>
        </div>

        <div className="flex flex-row items-center max-w-[200px] w-full justify-between gap-2 ">
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/icons/thumbsUp-icon.svg"
              height={16}
              width={16}
              alt="star"
            />
            <span className="text-[14px]">1</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/icons/thumbsDown-icon.svg"
              height={16}
              width={16}
              alt="star"
            />
            <span className="text-[14px]">0</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/icons/chat-icon.svg"
              height={16}
              width={16}
              alt="star"
            />
            <span className="text-[14px]">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
