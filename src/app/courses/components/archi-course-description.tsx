import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ArchiCorurseProps } from '../../component/common/archi-course-card';
import Image from 'next/image';
import Button from '../../component/common/archi-button';
import bookCover from '../../../public/images/courses/book2.png';
import ArchiCourses from '.';

interface ArchiDescription extends ArchiCorurseProps {
  description: string;
}

const CourseDescription = ({ id }: { id: string }) => {
  const [course, setCourse] = useState<ArchiDescription | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCourseById = async (courseId: string): Promise<ArchiDescription | undefined> => {
    try {
      const response = await fetch('/coursesData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const courses: ArchiDescription[] = await response.json();
      return courses.find(course => course.id === courseId);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  useEffect(() => {
    if (id) {
      const getCourse = async () => {
        const fetchedCourse = await fetchCourseById(id as string);
        if (fetchedCourse) {
          setCourse(fetchedCourse);
        } else {
          setError('Failed to fetch course');
        }
        setLoading(false);
      };
      getCourse();
    } else {
      setError('Invalid course ID');
      setLoading(false);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {course ? (
        <div>
          <h1 className="text-[24px] leading-8 sm:text-[40px] font-medium my-6 sm:my-10">Shopping Cart</h1>

          <div className="mb-8 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-[#F0F0F0] mx-auto flex items-center justify-center sm:max-w-[698px] w-full sm:py-[43px] w-full shadow-custom rounded-tr-[12px] rounded-tl-[12px]">
                <Image
                  src={bookCover}
                  alt="Book Cover Picture"
                  width={400}
                  height={641}
                  className="w-full h-[400px] h-auto object-cover sm:object-contain rounded-tr-[12px] rounded-tl-[12px] sm:rounded-none"
                  priority
                />
              </div>

              <div className="flex flex-col gap-[60px] sm:gap-[88px]">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <p className="text-[24px] sm:text-[36px] leading-15 font-medium">Artificial Intelligence in Architecture: Innovations for Future Urban Design in India</p>
                  <p className="text-[24px] sm:text-[36px] font-bold leading-15">₦2,500</p>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="text-[#808080] font-medium text-base sm:text-[20px] leading-6">Quantity</p>

                    <div className="flex gap-3 sm:gap-4">
                      <Button styles="bg-[#FFDB99] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-[6px] active:bg-[#CCB68F] transition ease duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
                          <path d="M1 1H13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Button>
                      <span className=" border rounded-[6px] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center font-medium text-[24px] leading-12">
                        1
                      </span>
                      <Button
                        styles="bg-[#FFDB99] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-[6px] active:bg-[#CCB68F] transition ease duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7H7M7 7H13M7 7V1M7 7V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-0">
                  <Button
                    styles="shadow-custom text-white w-full bg-[#FFA500] py-4 rounded-xl active:bg-[#CC8400] transition ease duration-100ms">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.5 21C9.3284 21 10 20.3284 10 19.5C10 18.6716 9.3284 18 8.5 18C7.67157 18 7 18.6716 7 19.5C7 20.3284 7.67157 21 8.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4 3H21L19 14H6L4 3ZM4 3C3.83333 2.33333 3 1 1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19 14H6H4.23077C2.44646 14 1.5 14.7812 1.5 16C1.5 17.2188 2.44646 18 4.23077 18H18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-base font-medium leading-6">Add to Cart</p>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              <h2 className="font-medium text-[24px] sm:text-[32px] leadiing-8 sm:leading-12">Description</h2>
              <h2 className="font-medium text-base overflow-hidden text-ellipsis break-words h-[calc(1.5em*8)] leading-6 sm:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint assumenda dignissimos ratione, consequuntur ad alias quasi nihil distinctio eaque excepturi eum possimus commodi doloribus ullam rerum incidunt, tempore esse.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus similique omnis iusto voluptate blanditiis nemo! Aut, libero? Eum, soluta a quis consectetur repudiandae consequuntur velit minima reprehenderit nulla quasi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum qui, labore doloribus ipsa rerum dolor fugit tempora, neque consequuntur nihil praesentium nobis eligendi nisi quia ducimus voluptates ab voluptatibus quas!
              </h2>
            </div>
          </div>

          <h1 className="text-[24px] leading-8 sm:text-[40px] font-medium my-6 sm:my-10">Similar Items</h1>

          <ArchiCourses />
        </div>
      ) : (
        <p>Failed to fetch course description.....</p>
      )}
    </div>
  );
};

export default CourseDescription;
