import { SelectAmenities } from "@/components/Selects/SelectAmenities";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { reviewsRef } from "@/config/firebaseConfig";
import { Timestamp, addDoc, getDoc } from "firebase/firestore";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StarIcon } from "lucide-react";
import Spinner from "@/components/Loaders/Spinner";
import { showToast } from "@/services/redux/features/commonSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useFetchReviews } from "@/services/requests";

interface ILeaveReviewButtonProps {
  refetch?: () => Promise<void>;
  setCloseSheet?: Dispatch<SetStateAction<boolean | undefined>>
}

export function LeaveReviewButton({ setCloseSheet}: ILeaveReviewButtonProps) {
  const { refetch} = useFetchReviews();
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean | undefined>(undefined);
  const [review, setReview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [hover, setHover] = useState<number | null>(null);
  const [rating, setRating] = useState(0);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const count = "";
  const currentTime = Date().toString();


  const handleSubmitReview = async () => {
    setLoading(true);
    try {
      let doc = await addDoc(reviewsRef, {
        id:uuidv4(),
        amenities: selectedRows,
        rating: rating,
        review: review,
        anonymous: anonymous,
        time: currentTime,
        timeStamp: Timestamp.now()
      });
      setLoading(false);
      refetch?.()
      dispatch(showToast({message:"Review submitted"}))
    setCloseSheet?.(false)
    setReview("")
    setRating(0)
    setSelectedRows([])
    setAnonymous(false)
    setModal(false)

    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  };

  const handlemodal = () => {
    setModal(false);
  };

  return (
    <div className="leave-review">
      <Dialog open={modal}>
        <DialogTrigger asChild onClick={() => setModal(undefined)} className="max-w-[210px] w-full">
          <Button className=" h-[46px] max-w-[210px] w-full">LEAVE A REVIEW</Button>
        </DialogTrigger>
        <div className="px-5">
          <DialogContent className="max-w-[695px]  ">
            <DialogHeader>
              <DialogTitle className="text-center">Review Location</DialogTitle>
              <p className="text-[20px] font-[500]">
                Bonny And Clyde Street, Ajao Estate, Lagos
              </p>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <SelectAmenities selectedRows={selectedRows} setSelectedRows={setSelectedRows}/>

              <div className="flex flex-col">
                <Label htmlFor="" className="text-[14px] font-normal">
                  Rate Location
                </Label>
                <div className="flex flex-row items-center mt-1">
                  {[...Array(count || 5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <StarIcon
                      key={index}
                        size={25}
                        style={{
                          fill:
                            ratingValue <= (hover || rating)
                              ? "orange"
                              : "white",
                          strokeWidth: 1,
                          stroke: ratingValue <= (hover || rating)
                          ? "orange"
                          : "#D4DCF1",
                        }}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(ratingValue)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="" className="text-[14px] font-normal">
                  Write Review
                </Label>
                <Textarea onChange={(e)=> setReview(e.target.value)} rows={8} placeholder="Enter review"></Textarea>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Input type="checkbox" className="h-[14px] w-[14px] mt-1" onChange={(e)=> setAnonymous(e.target.checked)}/>
                <Label htmlFor="" className="text-[14px] font-normal">
                  Post as Anonymous
                </Label>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 ">
              <Button
                type="button"
                className="max-w-[311px] h-[45px] w-full flex flex-row items-center gap-2"
                onClick={handleSubmitReview}
                disabled={rating === 0 || selectedRows.length === 0 || review === ""}
              >
                {loading && <Spinner/>}

                SUBMIT
              </Button>
              <Button
                type="button"
                className="max-w-[311px] w-full h-[45px]  bg-white  text-[#3366FF] border-[1px] border-[#3366FF]"
                onClick={() => handlemodal()}
              >
                CANCEL
              </Button>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
