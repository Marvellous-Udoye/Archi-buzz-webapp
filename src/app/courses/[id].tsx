"use client";

import { Suspense } from "react";
import CourseDescription from "./components/archi-course-description";
import ArchiCourses from "./components";
import { useParams } from "next/navigation";

const CourseDescPage = () => {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="max-w-[1266px] mx-auto px-4 lg:px-0">
      <main>
        <Suspense fallback="Loading.......">
          <CourseDescription id={id} />
        </Suspense>

        <Suspense fallback="Loading......">
          <ArchiCourses />
        </Suspense>
      </main>
    </div>
  );
};

export default CourseDescPage;
