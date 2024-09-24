"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import ArchiCourses from "../components/archi-courses";
import CourseDescription from "../components/archi-course-description";

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
