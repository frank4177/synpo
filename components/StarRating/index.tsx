import { StarIcon } from "lucide-react";
import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const count = "";

  return (
    <div className="flex flex-row items-center mt-1">
      {/* {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <StarIcon
            key={index}
            size={25}
            style={{
              fill: ratingValue <= (hover || rating) ? "orange" : "white",
              strokeWidth: 1,
              stroke: ratingValue <= (hover || rating) ? "orange" : "#D4DCF1",
            }}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(ratingValue)}
          />
        );
      })} */}
    </div>
  );
};

export default StarRating;
