"use client"

import { Suspense } from "react";
import ArchiCourses from "../component/archi-courses";

const Courses = () => {
  return (
    <div className={`max-w-[1266px] mx-auto`}>
      <h1 className="font-medium text-[24px] sm:text-[24px] md:text-[32px] lg:text-[40px] my-6">Explore our courses and books on Architecture and AI</h1>

      <main>
        <Suspense fallback="Loading.......">
          <ArchiCourses />
        </Suspense>
      </main>
    </div>
  )
}

export default Courses;