import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArchiCourses from '.';
import bookCover from '../../../public/images/courses/book2.png';
import Button from '../../component/common/archi-button';
import { ArchiCorurseProps } from '../../component/common/archi-course-card';

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
    }
    else {
      setError('Invalid course ID');
      setLoading(false);
    }
  }, [id]);

  const initialPrice = 2500;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(initialPrice);
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice + initialPrice);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setTotalPrice(prevTotalPrice => prevTotalPrice - initialPrice);
    }
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true)
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {course ? (
        <div>
          <h1 className="text-[24px] leading-8 sm:text-[40px] font-medium my-6 sm:my-10"></h1>

          <div className="mb-8 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-[#F0F0F0] mx-auto flex items-center justify-center sm:max-w-[698px] w-full sm:py-[40px] w-full">
                <Image
                  src={bookCover}
                  alt="Book Cover Picture"
                  width={400}
                  height={400}
                  className="w-full sm:max-h-[400px] sm:h-auto object-cover sm:object-contain rounded-sm sm:rounded-none"
                  priority
                />
              </div>

              <div className="flex flex-col gap-[30px] sm:gap-[88px]">
                <div className="flex flex-col gap-3 sm:gap-5 h-full">
                  <p className="text-[16px] sm:text-[30px] leading-6 sm:leading-[44px] font-medium">Artificial Intelligence in Architecture: Innovations for Future Urban Design in India</p>
                  <p className="text-[20px] sm:text-[36px] font-bold leading-6 sm:leading-[48px]">₦{totalPrice}</p>

                  <div className="flex items-center gap-2 sm:gap-4">
                    <Button
                      handleClick={handleDecrease}
                      styles="bg-[#FFDB99] h-[30px] sm:h-10 w-[30px] sm:w-10 sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-[3px] sm:rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
                    >
                      <svg className="w-[5px] sm:w-[14px]" xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
                        <path d="M1 1H13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Button>

                    <span className="border rounded-[6px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center font-medium text-[14px] sm:text-[20px] leading-5 sm:leading-12 ">
                      {quantity}
                    </span>

                    <Button
                      handleClick={handleIncrease}
                      styles="bg-[#FFDB99] h-[30px] sm:h-10 w-[30px] sm:w-10 sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-[3px] sm:rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
                    >
                      <svg className="w-[5px] sm:w-[14px]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H7M7 7H13M7 7V1M7 7V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="w-full mb-0 flex flex-col gap-5">
                  <Link href={'/courses/cart'}>
                    <Button
                      styles="shadow-custom w-full bg-[#FFDB99] py-2.5 sm:py-4 rounded-md sm:rounded-xl active:bg-[#CCB68F] transition ease duration-100ms"
                    >
                      <p className="text-[12px] sm:text-base font-medium leading-6">Go to Cart</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <path d="M19 21C19.8284 21 20.5 20.3284 20.5 19.5C20.5 18.6716 19.8284 18 19 18C18.1716 18 17.5 18.6716 17.5 19.5C17.5 20.3284 18.1716 21 19 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 21C9.8284 21 10.5 20.3284 10.5 19.5C10.5 18.6716 9.8284 18 9 18C8.17157 18 7.5 18.6716 7.5 19.5C7.5 20.3284 8.17157 21 9 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.5 3H21.5L19.5 14H6.5L4.5 3ZM4.5 3C4.33333 2.33333 3.5 1 1.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.5 14H6.5H4.73077C2.94646 14 2 14.7812 2 16C2 17.2188 2.94646 18 4.73077 18H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Button>
                  </Link>

                  <Button
                    handleClick={handleAddToCart}
                    styles="shadow-custom text-white w-full bg-[#FFA500] py-2.5 sm:py-4 rounded-md sm:rounded-xl active:bg-[#CC8400] transition ease duration-100ms"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.5 21C9.3284 21 10 20.3284 10 19.5C10 18.6716 9.3284 18 8.5 18C7.67157 18 7 18.6716 7 19.5C7 20.3284 7.67157 21 8.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4 3H21L19 14H6L4 3ZM4 3C3.83333 2.33333 3 1 1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19 14H6H4.23077C2.44646 14 1.5 14.7812 1.5 16C1.5 17.2188 2.44646 18 4.23077 18H18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[12px] sm:text-base font-medium leading-6">{isAddedToCart ? 'Added to Cart' : 'Add to Cart'}</p>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-5 w-full">
              <h2 className="font-bold text-[20px] sm:text-[32px] leadiing-6 sm:leading-12">Description</h2>
              <h2 className="font-medium text-[12px] sm:text-base overflow-hidden text-ellipsis break-words h-[calc(1.5em*8)] leading-6 sm:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint assumenda dignissimos ratione, consequuntur ad alias quasi nihil distinctio eaque excepturi eum possimus commodi doloribus ullam rerum incidunt, tempore esse.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus similique omnis iusto voluptate blanditiis nemo! Aut, libero? Eum, soluta a quis consectetur repudiandae consequuntur velit minima reprehenderit nulla quasi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum qui, labore doloribus ipsa rerum dolor fugit tempora, neque consequuntur nihil praesentium nobis eligendi nisi quia ducimus voluptates ab voluptatibus quas!
              </h2>
            </div>
          </div>

          <h1 className="text-[20px] leading-6 sm:eading-8 sm:text-[40px] font-bold my-4 sm:my-10">Similar Items</h1>

          <ArchiCourses />
        </div>
      ) : (
        <p>Failed to fetch course description.....</p>
      )}
    </div>
  );
};

export default CourseDescription;
