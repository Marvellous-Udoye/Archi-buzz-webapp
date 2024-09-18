import Image from "next/image";
import React, { useEffect, useState } from "react";
import articlePic1 from "../../../../public/assets/images/article-pic1.png";
import dummyProfile from "../../../../public/assets/images/dummy-profile.png";

export interface ArticlecardProp {
  articlePicture?: string
  profilePicture?: string
  sm: boolean
  children?: React.ReactNode
  style?: string
}

const ArticleCard = ({ sm, children, style, articlePicture, profilePicture }: ArticlecardProp) => {

  return (
    <div className={`flex gap-4 sm:gap-6 max-w-[739px] mx-auto ${sm ? 'flex-col sm:flex-row max-w-[523px] items-center gap-4' : 'flex-col'}`}>
      <Image
        src={articlePicture || articlePic1}
        width={739}
        height={452}
        alt="yo"
        className={sm ? 'max-w-[280px] sm:w-[200px] max-h-[280px] sm:h-[200px]' : ''}
      />
      <div className={`${style}`}>
        <div className="flex items-center gap-[19px] mb-2.5 sm:mb-4 w-full">
          <Image
            src={profilePicture || dummyProfile}
            width={60}
            height={60}
            alt="yo"
          />
          <div className="flex items-center justify-between w-full">
            <span className={`font-medium leading-6 ${sm ? 'text-base md:text-xl' : 'text-base '}`}>Olivia Smith</span>
            <span className={`text-[#808080] font-medium ${sm ? 'text-xs leading-4 md:leading-[19.52px]' : 'text-[12px] leading-[19.52px]'}`}>
              10 hrs ago
            </span>
          </div>
        </div>
        <div className={`mb-[6px] ${sm ? 'px-0' : ''}`}>
          <h3 className={`font-medium mb-3 sm:mb-5 ${sm ? 'text-[12px] md:text-base mr-10' : 'text-xl leading-[30px]'}`}>
            The Future of Architectural Design
          </h3>
          {sm ? (<p></p>) : (
            <p className="text-[12px] sm:text-base leading-[1.5rem] sm:leading-[2rem] text-[#808080] font-medium">
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
