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
import RefetchData from "@/components/NoResult/refetchData";

const DashboardScreen = () => {
  const { reviewsData, refetch, loading } = useFetchReviews();
  const reviewsState = useSelector(
    (state: RootState) => state?.reviewData?.reviews
  );

  const lengthcheck = reviewsState && reviewsState?.length > 0;



  return (
    <div className="pb-10">
      <ReviewDataSection />
      {reviewsState?.length === 0 ? (
        <>
        {!loading && <div className="mt-5">
          <RefetchData refetch={refetch} />
        </div>}
        </>
      ) : (
        lengthcheck && (
          <>
            <div className="center-component flex flex-row justify-between gap-5 reviews-grid-mq">
              <div className="flex flex-col max-w-[700px] w-full">
                {reviewsState?.map((item) => (
                  <Reviews data={item} key={item.id} />
                ))}

              </div>

              <PhotoGrid />
            </div>
          </>
        )
      )}
      {loading && (
        <div className="flex flex-row mt-10 items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
