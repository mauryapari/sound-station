import { Star, StarHalf } from "lucide-react";
import React from "react";

const Rating = ({ rating, ratingCount }) => {
  const MAX_STARS = 5;

  const getStarType = (index) => {
    if (rating >= index + 1) {
      return "full"; // Full star
    } else if (rating >= index + 0.5) {
      return "half"; // Half star
    } else {
      return "empty"; // Empty star
    }
  };

  return (
    <>
      {[...Array(MAX_STARS)].map((_, index) => {
        const starType = getStarType(index);
        return (
          <span key={index}>
            {starType === "full" && <Star fill="gold" />}
            {starType === "half" && <StarHalf fill="gold" />}
          </span>
        );
      })}
      <span className="ml-4 italic text-sm">{`(${ratingCount} customer reviews)`}</span>
    </>
  );
};

export default Rating;
