import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="relative h-[45px]  w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
      <Input
      autoFocus={false}
        type="search"
        placeholder="Enter address"
        className="pl-10 pr-3 py-2  text-[14px] h-full w-full border rounded-md border-gray-300  shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4DCF1] focus:border-transparent" // Add additional styling as needed
      />
    </div>
  );
};

export default SearchBar;
