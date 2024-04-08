import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import Image from "next/image";
import { LeaveReviewButton } from "../Buttons/LeaveReviewButton";
import { useRef } from "react";
import { queries } from "@/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";

export function MobileMenu() {
  const scrollContainerRef = useRef<any>(null);
  const reviewsState = useSelector(
    (state: RootState) => state?.reviewData?.reviews
  );

  const handleScrollButtonClick = () => {
    // Accessing the scroll container's current property and scrolling it
    if (scrollContainerRef.current) {
      // Scroll to the right by a fixed amount (e.g., 100 pixels)
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-3">
        <div className="space-y-7">
          <div className="flex flex-row items-center justify-between mt-8 gap-5 max-w-[800px] w-full">
            <Logo />
            <div className="flex flex-row items-center gap-2">
              {/* <p className="font-[500] text-[16px]">Welcome!</p> */}
              <Image
                src="/images/photo.svg"
                className="rounded-full"
                height={36}
                width={36}
                alt="logo"
              />
            </div>
          </div>

          <SearchBar />

          <div className="flex flex-col justify-between gap-7 address-and-button">
            <div>
              <h3 className="font-[500] text-[15px]">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h3>
              <p className="text-[13px]">
                <span className="font-[600]">{'"'}450{'"'} Reviews</span> 	{"("}People are
                raving about the selected location{")"}
              </p>
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
            {reviewsState.length !== 0 && (
              <div className="flex flex-col gap-4 flex-wrap">
                <div className="flex flex-row justify-end w-full">
                <LeaveReviewButton />

                </div>
                <div className="flex flex-row items-center justify-end gap-2">
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
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
