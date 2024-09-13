import React from "react";

interface ArchiNumbersProp {
  number: string;
}

function ArchNumbers({ number }: ArchiNumbersProp) {
  return (
    <p className="h-[87.62px] w-[87.62px] md:h-[166.67px] md:w-[166.67px] bg-[#FFD280] rounded-full flex items-center justify-center mx-auto">
      <span className="h-[65.71px] w-[65.71px] md:h-[125px] md:w-[125px] bg-[#FFBB40] rounded-full flex items-center justify-center">
        <span className="h-[43.81px] w-[43.81px] md:h-[83.33px] md:w-[83.33px] bg-[#FFA500] rounded-full flex items-center justify-center text-[28.40px] md:text-[53.33px] text-white font-bold leading-[106.67px]">
          {number}
        </span>
      </span>
    </p>
  );
}

export default ArchNumbers;
