"use client";

import { showToast } from "@/services/redux/features/commonSlice";
import { RootState } from "@/services/redux/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbarState = useSelector(
    (state: RootState) => state?.snackbar?.snackbar
  );

  useEffect(() => {
    if (snackbarState.message !== undefined) {
      setTimeout(() => {
        dispatch(showToast({
            message: undefined,
            status: undefined
        }));
      }, snackbarState.duration);
    }
  }, [snackbarState?.message, dispatch,snackbarState.duration]);

  if (snackbarState.message === undefined) return <></>;
  return (
    <div className=" fixed  top-[100px]   w-full h-[50px]   flex flex-row items-center justify-center ">
      <div className="border-[1px] bg-[#F2FDF2] border-[#0F920F] h-full max-w-[339px] w-full rounded-sm flex flex-row items-center justify-center gap-1">
      <Image
        src="/icons/check-circle.svg"
        height={16}
        width={16}
        alt="checmarck"
      />
      <span className="text-[14px] text-[#0F920F] font-[500]">
        {snackbarState?.message}
      </span>
      </div>
      
    </div>
  );
};

export default Snackbar;
