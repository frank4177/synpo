"use client";

import DashboardContainer from "@/containers/DashboardContainer";
import React, { useEffect } from "react";
import ReviewDataSection from "./ReviewDataSection";
import Reviews from "./Reviews";
import PhotoGrid from "./photoGrid";
import { useFetchReviews } from "@/services/requests";
import Spinner from "@/components/Loaders/Spinner";
import NoReviews from "@/components/NoResult/NoReviewResult";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";

const DashboardScreen = () => {
  const {reviewsData, refetch, loading } = useFetchReviews();
  const reviewsState = useSelector(
    (state: RootState) => state?.reviewData?.reviews
  );

  console.log(loading)

  // useEffect(() => {
  //   refetch();
  // }, []);

  return (
    <div className="pb-10">
      <ReviewDataSection />
      {reviewsState.length === 0  && reviewsState !== undefined ? (
        <div className="mt-5">
          <NoReviews />
        </div>
      ) : (
        <>
          <div className="center-component flex flex-row  justify-between gap-5 reviews-grid-mq">
            <div className="flex flex-col max-w-[700px] w-full">
              {reviewsState?.map((item) => (
                <Reviews data={item} key={item.id} />
              ))}
              
              {/* <div className="m-auto">{loading && <Spinner />}</div> */}
            </div>

            <PhotoGrid />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardScreen;
