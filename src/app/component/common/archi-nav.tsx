"use client";

import Image from "next/image";
// import { useState } from "react";
import dummyProfile from "../../../../public/assets/images/dummy-profile.png";
import archibuzzLogo from "../../../../public/icons/archibuzz-logo.svg";
import Button from "./archi-button";
import NavLink from "./nav-link";

interface NavBarProps {
  isNavbarOpen: boolean;
  handleNavClick: () => void;
}

const ArchiNav = ({ isNavbarOpen, handleNavClick }: NavBarProps) => {
  const isLoggedIn = true;

  return (
    <nav className="flex items-center justify-between md:max-w-[1266px] mx-4 lg:mx-auto h-25 rounded-2xl sm:p-4 sticky top-4 z-[9999] backdrop-blur-md mt-4 bg-[#E3E3E3] shadow-[3.33px_1.67px_8.33px_0px_rgba(0,0,0,0.25)]">
      <Image
        src={archibuzzLogo}
        alt=""
        height={56.3}
        width={98.33}
        priority={true}
        className="w-[51.69px] h-[71.73px] md:h-[56.3px] md:w-[98.33px]"
      />

      <div>
        {isLoggedIn ? (
          <ul className="items-center justify-between gap-[25px] p-2 w-full max-w-[669.33px] lg:flex hidden text-[13.33px] font-medium">
            <NavLink
              href={"/about"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              About us
            </NavLink>
            <NavLink
              href={"/community"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >Community</NavLink>
            <NavLink
              href={"/hubs"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >Hubs
            </NavLink>
            <NavLink
              href={"/ai-tools"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              AI Tools
            </NavLink>
            <NavLink
              href={"/articles"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              Articles & Podcasts
            </NavLink>
            <NavLink
              href={["/courses", "/courses/cart"]}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              Courses
            </NavLink>
            <NavLink
              href={"/more"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              More
            </NavLink>
          </ul>
        ) : (
          <ul className="items-center justify-between p-2 w-full max-w-[333.33px] lg:flex hidden text-[13.33px] font-medium">
            <NavLink
              href={"/"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200">
              Home
            </NavLink>
            <NavLink
              href={"/about"}
            >
              About us
            </NavLink>
            <NavLink
              href={"/products"}
              style="hover:text-[#FFA500] hover:border-b-[2px] hover:border-[#FFA500] transition ease duration-200"
            >
              Products
            </NavLink>
          </ul>
        )}
      </div>

      {isLoggedIn ? (
        <div className="items-center gap-[13.33px] p-4 lg:flex hidden">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7773 9.5C16.0444 11.9672 16.7419 13.4862 17.3147 14.3531C17.5384 14.6917 17.2669 15.3333 16.8611 15.3333H4.47095C4.06515 15.3333 3.79334 14.6921 4.01708 14.3535C4.74165 13.2571 5.66602 11.1169 5.66602 7.33333C5.66602 5.91884 6.1928 4.56229 7.13048 3.5621C8.06817 2.5619 9.33993 2 10.666 2C10.9471 2 11.2258 2.02525 11.4993 2.07457"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 7.00024C17.8807 7.00024 19 5.88095 19 4.50024C19 3.11954 17.8807 2.00024 16.5 2.00024C15.1192 2.00024 14 3.11954 14 4.50024C14 5.88095 15.1192 7.00024 16.5 7.00024Z"
              fill="#FFA500"
            />
            <path
              d="M12.1079 17.8335C11.9614 18.0861 11.7512 18.2957 11.4981 18.4414C11.2451 18.5872 10.9583 18.6639 10.6663 18.6639C10.3743 18.6639 10.0874 18.5872 9.83444 18.4414C9.58144 18.2957 9.37111 18.0861 9.22461 17.8335"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Image src={dummyProfile} alt="" width={50} height={50} className="hidden lg:inline" />
        </div>
      ) : (
        <div className="hidden lg:flex gap-[26.67px]">
          <Button
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16797 11.5687L12.0013 0.735352M12.0013 0.735352V11.1354M12.0013 0.735352H1.6013"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            styles="text-[13.33px] font-medium text-white py-[6.67px] px-[20px] rounded-[100vw] h-10"
          >
            Get started
          </Button>
          <Button styles="text-[13.33px] font-medium py-[6.67px] px-[20px] border-[1.25px] border-[#FFA500] rounded-[100vw] bg-transparent h-10">
            Log in
          </Button>
        </div>
      )}
      <div className="block lg:hidden p-[10px] rounded-md">
        <div onClick={handleNavClick} className="cursor-pointer">
          {isNavbarOpen ? (
            <svg width="18" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0683594 1.50454C0.0683594 1.14162 0.362565 0.847412 0.725486 0.847412H16.4965C16.8594 0.847412 17.1536 1.14162 17.1536 1.50454C17.1536 1.86746 16.8594 2.16166 16.4965 2.16166H0.725486C0.362565 2.16166 0.0683594 1.86746 0.0683594 1.50454ZM0.0683594 7.63772C0.0683594 7.2748 0.362565 6.98059 0.725486 6.98059H16.4965C16.8594 6.98059 17.1536 7.2748 17.1536 7.63772C17.1536 8.00064 16.8594 8.29484 16.4965 8.29484H0.725486C0.362565 8.29484 0.0683594 8.00064 0.0683594 7.63772ZM0.725486 13.1138C0.362565 13.1138 0.0683594 13.408 0.0683594 13.7709C0.0683594 14.1338 0.362565 14.428 0.725486 14.428H16.4965C16.8594 14.428 17.1536 14.1338 17.1536 13.7709C17.1536 13.408 16.8594 13.1138 16.4965 13.1138H0.725486Z" fill="black" />
            </svg>
          )}
        </div>

        <div className={`transition-transform duration-100 ease-in-out z-50 ${isNavbarOpen ? "block" : "hidden"}`} >
          {isNavbarOpen ? (
            <ul className="absolute top-[80px] sm:top-[115px] md:top-[100px] rounded-[16px] right-0 bg-[#E3E3E3] py-4 w-[250px] sm:w-[282px] text-[13.33px] font-medium shadow-custom ">
              <NavLink
                href={"/about"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >
                About us
              </NavLink>
              <NavLink
                href={"/community"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >Community</NavLink>
              <NavLink
                href={"/hubs"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >Hubs
              </NavLink>
              <NavLink
                href={"/ai-tools"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >
                AI Tools
              </NavLink>
              <NavLink
                href={"/articles"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >
                Articles & Podcasts
              </NavLink>
              <NavLink
                href={["/courses", "/courses/cart"]}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >
                Courses
              </NavLink>
              <NavLink
                href={"/more"}
                style="active:bg-[#FFDB99] md:hover:border-l-[3px] md:hover:border-[#FFA500] transition ease duration-200 p-4 text-[12px] leading-normal border-b-0 text-black"
              >
                More
              </NavLink>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ArchiNav;
