import React, { useEffect, useState } from "react";
import { addDoc, getDocs, doc, collection, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { ReviewDataTypes } from "@/types";
import { reviews } from "../redux/features/reviewsSlice";
import { useDispatch } from "react-redux";

export const useFetchReviews = () =>{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [reviewsData, setReviewsData] = useState<ReviewDataTypes[] | null>(null);
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(query(collection(db, "reviews"), orderBy("time", "desc")));
        let data: any = [];
        querySnapshot.forEach((doc) => {
          const dat = doc.data();
          data.push(dat);
        });
        console.log(data);
        dispatch(reviews(data));
        setReviewsData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    useEffect(() => {
      fetchReviews();
    }, []);

    return {reviewsData, refetch: fetchReviews, loading}
}