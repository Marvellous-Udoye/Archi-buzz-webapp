"use client"

import { Suspense, useState } from "react";
import ArchiCourses from "./components";
import Input from "../component/common/archi-input";
import Link from "next/link";

const Courses = () => {
  const [search, setSearch] = useState('')

  return (
    <div className={`max-w-[1266px] mx-auto px-4 lg:px-0`}>
      <header className="flex flex-col gap-4 sm:gap-6 my-6">
        <h1 className="font-medium text-[24px] sm:text-[32px] md:text-[40px]">Explore our courses and books on Architecture and AI</h1>

        <div className="flex gap-2 md:justify-between">
          <div className="w-full max-w-[593px]">
            <Input
              id="searchBar"
              value={search}
              type="text"
              styles="pl-[46px] sm:pl-16"
              handleChange={(e) => setSearch(e.target.value)}
              placeholder="Search for your courses"
            >
              <svg className="absolute top-1/2 left-5 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 15L19 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 9C1 13.4183 4.58172 17 9 17C11.213 17 13.2161 16.1015 14.6644 14.6493C16.1077 13.2022 17 11.2053 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Input>
          </div>

          <Link href={'/courses/cart'}>
            <div className="flex items-center gap-[7px] hover:shadow-custom px-4 rounded-[16px] relative cursor-pointer border-[2px] hover:border-[#FFA500] h-full">
              {/* <span className="absolute top-0 text-[2px] text-center font-medium w-[16px] h-[16px] bg-[#FFA500] rounded-full">3</span> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 21C9.3284 21 10 20.3284 10 19.5C10 18.6716 9.3284 18 8.5 18C7.67157 18 7 18.6716 7 19.5C7 20.3284 7.67157 21 8.5 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 3H21L19 14H6L4 3ZM4 3C3.83333 2.33333 3 1 1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14H6H4.23077C2.44646 14 1.5 14.7812 1.5 16C1.5 17.2188 2.44646 18 4.23077 18H18.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-medium hidden sm:block sm:text-[24px]">Cart</p>
            </div>
          </Link>
        </div>
      </header>

      <main>
        <Suspense fallback="Loading.......">
          <ArchiCourses />
        </Suspense>
      </main>
    </div>
  )
}

export default Courses;