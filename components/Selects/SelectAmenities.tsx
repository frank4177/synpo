import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { queries } from "@/constants";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface ISelectAmenitiesProps{
    selectedRows: string[]
    setSelectedRows: Dispatch<SetStateAction<string[]>>
}

export function SelectAmenities({setSelectedRows, selectedRows}: ISelectAmenitiesProps) {

  const toggleRow = (id: string) => {
    const isSelected = selectedRows.includes(id);
    let newSelectedRows: string[];

    if (isSelected) {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    } else {
      newSelectedRows = [...selectedRows, id];
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <Popover>
      <PopoverTrigger asChild className=" flex flex-row justify-between bg-[#F3F7FE] h-[50px]">
        <Button variant="outline" className=" text-start">
          Select Amenities <ChevronDown/>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="bg-[#F3F7FE] popover-content-width-same-as-its-trigger"
        sideOffset={5}
      >
        <div className="amenities-col gap-4 h-[169px] overflow-y-auto">
          {queries.map((item) => (
            <div className="flex flex-row items-center gap-2" key={item}>
              <Input
                key={item}
                type="checkbox"
                checked={selectedRows?.includes(item)}
                onChange={() => toggleRow(item)}
                className="h-[16px] w-[16px]"
              />
              <Label className="text-[14px] font-normal"> {item}</Label>
            </div>
          ))}
        </div>
      </PopoverContent>

    </Popover>
  );
}
