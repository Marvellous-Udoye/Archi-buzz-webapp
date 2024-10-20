"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../component/common/archi-button";
import Input from "../component/common/archi-input";
import styles from "./community.module.css";
import AccountSection from "./components/accounts-section";
import HubSection from "./components/husbs-section";
import PeopleFeed from "./components/people-section";
import PostFeed from "./components/posts-section";

const Community = () => {
  const [search, setSearch] = useState("");

  type TabType = "Post" | "People";
  const [activeTab, setActiveTab] = useState<TabType>("Post");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("For You");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="max-w-[1298px] px-4 mx-auto mt-[30px]">
      <div className={`${styles.filter} flex flex-col gap-[33px]`}>
        <div className={`${styles.search_input_ctn} flex items-center gap-3`}>
          <div
            className={`${styles.search_input} flex items-center relative group`}
          >
            <Input
              id="SearchAndFilter"
              value={search}
              type="text"
              styles="max-h-[46px] sm:max-h-[54px] pl-[42px] sm:pl-16 outline-none rounded-tl-[16px] rounded-bl-[16px] border-r-0 rounded-tr-none rounded-br-none group-hover:shadow-custom"
              handleChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a post"
            >
              <svg
                className="absolute top-1/2 left-5 -translate-y-1/2 w-3 h-3 sm:w-5 sm:h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 15L19 19"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 9C1 13.4183 4.58172 17 9 17C11.213 17 13.2161 16.1015 14.6644 14.6493C16.1077 13.2022 17 11.2053 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Input>

            <div className="flex items-center bg-[#F6F5F5] w-[46px] h-[46px] sm:w-fit sm:h-[54px] p-3.5 rounded-tr-[16px] rounded-br-[16px] border-[0.8px] border-[2px] group-focus-within:border-[#FFA500] group-hover:shadow-custom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.369141 1.94468C0.369141 1.41162 0.801271 0.979492 1.33433 0.979492H24.4989C25.0319 0.979492 25.4641 1.41162 25.4641 1.94468C25.4641 2.47774 25.0319 2.90987 24.4989 2.90987H1.33433C0.801271 2.90987 0.369141 2.47774 0.369141 1.94468ZM5.51644 9.66614C5.51644 9.13308 5.94857 8.70095 6.48163 8.70095H19.3508C19.8839 8.70095 20.316 9.13308 20.316 9.66614C20.316 10.1992 19.8839 10.6313 19.3508 10.6313H6.48163C5.94857 10.6313 5.51644 10.1992 5.51644 9.66614ZM11.6297 16.4225C11.0966 16.4225 10.6645 16.8546 10.6645 17.3877C10.6645 17.9208 11.0966 18.3529 11.6297 18.3529H14.2035C14.7366 18.3529 15.1687 17.9208 15.1687 17.3877C15.1687 16.8546 14.7366 16.4225 14.2035 16.4225H11.6297Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="relative flex items-center">
            <Button
              handleClick={toggleDropdown}
              styles="flex items-center justify-center gap-1 bg-[#E3E3E3] h-[54px] px-4 py-2 rounded-[12px] w-[90px] sm:w-[130px] w-full"
            >
              {selectedOption}
              <svg
                className={`${
                  isOpen ? "transform rotate-180" : ""
                } w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] shrink-0`}
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M5.5 8.16602L10.5 13.166L15.5 8.16602"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>

            {isOpen && (
              <div className="absolute mt-1 min-w-[90px] w-full min-h-[70px] top-full bg-white shadow-custom rounded-[8px] border z-10">
                <ul className="text-[12px] sm:text-[14px]">
                  <li
                    className={`px-4 py-2 w-full cursor-pointer hover:bg-gray-200 rounded-tr-[8px] rounded-tl-[8px] font-medium ${
                      selectedOption === "For You" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleOptionSelect("For You")}
                  >
                    For You
                  </li>
                  <li
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-br-[8px] rounded-bl-[8px] font-medium ${
                      selectedOption === "Following" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleOptionSelect("Following")}
                  >
                    Following
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`${styles.page_ctrl} flex justify-between`}>
          <span className="flex items-end leading-8 gap-[30px] font-[500] text-[16px] cursor-pointer">
            <p
              className={`py-1 ${
                activeTab === "Post"
                  ? "text-[#FFA500] border-b-[2px] border-[#FFA500]"
                  : ""
              }`}
              onClick={() => handleTabClick("Post")}
            >
              Posts
            </p>
            <p
              className={`py-1 ${
                activeTab === "People"
                  ? "text-[#FFA500] border-b-[2px] border-[#FFA500]"
                  : ""
              }`}
              onClick={() => handleTabClick("People")}
            >
              People
            </p>
          </span>
          <Button
            styles={`${styles.refresh_button} bg-[#fff] px-2 sm:px-[12px] py-[3px] sm:py-[6px] rounded-[5px] border-[0.83px] border-black leading-[26px] text-[12px]`}
          >
            <p>Refresh feed</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              ></path>
            </svg>
          </Button>
        </div>
      </div>

      <div
        className={`${styles.community_ctn} flex max-w-[1266px] justify-between`}
      >
        {activeTab === "Post" ? <PostFeed /> : <PeopleFeed />}

        <aside
          className={`${styles.hubs_and_suggestions} flex flex-col gap-4 bg-[#F6F5F5] rounded-[16px]`}
        >
          <div className={`${styles.hubs} flex flex-col p-[13px] `}>
            <div className={`${styles.hubs_header} flex flex-col gap-[13px]`}>
              <p className="text-[40px] font-[500]">Hubs</p>
              <p className="text-[16px] font-[500] leading-[32px]">
                Join or create your own community and try and get to the top 4.
              </p>
            </div>

            <div className="text-center text-[16px] font=[500] leading-8 my-[33px]">
              <p>Top 4 Most Populous Hubs🎉</p>
              <p>These are the hubs with the most members.</p>
            </div>
            <HubSection />
            <Link href={"/hubs"}>
              <Button
                styles={`${styles.create_hub} bg-[#FFA809] mt-[46px] w-full p-4 rounded-[8px] shadow-custom leading-8`}
              >
                <p>Create Hub</p>
              </Button>
            </Link>
          </div>

          {activeTab === "Post" && (
            <div
              className={`${styles.suggestions} flex flex-col gap-[33px] p-[13px] `}
            >
              <p
                className={`${styles.suggestions_header} text-[40px] font-[500]`}
              >
                Suggested accounts
              </p>
              <AccountSection />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Community;
