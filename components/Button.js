import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Button({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={`${
        direction == "left" ? "right" : "left"
      } w-[16px] h-[16px] xl:w-[28px] xl:h-[28px] border-[1px] border-[#424961] rounded-[5px] mx-1 flex justify-center items-center`}
    >
      {direction == "left" ? (
        <KeyboardArrowLeftIcon className="text-[12px] xl:text-[24px]" />
      ) : (
        <KeyboardArrowRightIcon className="text-[12px] xl:text-[24px]" />
      )}
    </button>
  );
}

export default Button;
