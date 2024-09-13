"use client"

import CourseCard from "../component/common/archi-course-card";

const Courses = () => {
  return (
    <div className={`max-w-[1266px] mx-auto`}>
      <h1 className="font-[500] text-[40px] my-10">Explore our courses and books on Architecture and AI</h1>

      <main className="grid grid-cols-3 gap-8">
        <CourseCard />
      </main>
    </div>
  )
}

export default Courses;