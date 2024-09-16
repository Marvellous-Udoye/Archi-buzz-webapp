import Image from "next/image";
import React from "react";
import articlePic1 from "../../../../public/assets/images/article-pic1.png";
import dummyProfile from "../../../../public/assets/images/dummy-profile.png";

interface ArticlecardProp {
  sm: boolean
  children?: React.ReactNode
}

const ArticleCard = ({ sm, children }: ArticlecardProp) => {
  return (
    <div className={`flex gap-6 max-w-[739px] mx-auto ${sm ? 'flex-col sm:flex-row max-w-[523px] items-center gap-5': 'flex-col'}`}>
      <Image src={articlePic1} alt="yo" className={sm ? 'w-[400px] sm:w-[200px] h-[400px] sm:h-[200px]' : ''}/>
      <div className="">
        <div className="flex items-center gap-[19px] mb-4">
          <Image src={dummyProfile} alt="yo"/>
          <div className="flex items-center justify-between w-full">
            <span className={`font-medium leading-6 ${sm ? 'text-base md:text-xl' : 'text-xl '}`}>Olivia Smith</span>
            <span className={`text-[#808080] font-medium ${sm ? 'text-xs md:text-base leading-4 md:leading-[19.52px]' : 'text-base leading-[19.52px]'}`}>
              10 hrs ago
            </span>
          </div>
        </div>
        <div className={`mb-[6px] ${sm ? 'px-0' : 'px-4'}`}>
          <h3 className={`font-medium mb-5 ${sm ? 'text-base md:text-xl' : 'text-xl leading-[30px]'}`}>
          The Future of Architectural Design
          </h3>
          {sm ? (<p></p>) : (
            <p className="text-base leading-[2rem] text-[#808080] font-medium">
             {children}
           </p>
          )}
        </div>
        <div className="text-xs leading-[14.64px] text-[#808080] font-medium text-right">
          3 min. read
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
