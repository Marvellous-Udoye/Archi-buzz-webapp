import Image from "next/image";
import Button from "./archi-button";
import Link from "next/link";

export interface ArchiCorurseProps {
  id: string;
  bookCover: string;
  bookTitle: string;
  author: string;
  rating: number;
  price: string;
  isLiked: boolean;
  isAddedToCart: boolean;
  handleLike: () => void;
  handleAddToCart: () => void;
}

const CourseCard = ({ id, bookCover, bookTitle, author, rating, price, isLiked, isAddedToCart, handleLike, handleAddToCart }: ArchiCorurseProps) => {
  return (
    <div className="border-[1px] mx-auto max-w-[402px] w-full rounded-[20px] mb-8 shadow-custom transform sm:scale-95 hover:transform sm:hover:scale-[1.02] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.1),_0px_16px_40px_rgba(0,0,0,0.15)] transition ease duration-100ms ">
      <Link href={`/courses/${id}`}>
        <div className="bg-[#F0F0F0] flex items-center justify-center max-w-[402px] sm:py-[43px] w-full rounded-tr-[16px] rounded-tl-[16px]">
          <Image
            src={bookCover}
            alt="Book Cover Picture"
            width={162}
            height={227}
            className="w-full h-auto object-cover h-[199px] sm:w-[162px] sm:h-[227px] rounded-tr-[16px] rounded-tl-[16px] sm:rounded-none"
            priority
          />
        </div>
      </Link>

      <section className="flex flex-col gap-2 sm:gap-5 px-2.5 sm:px-4 py-3.5 sm:py-5">
        <div className=" font-medium ">
          <p className="line-clamp-2 md:h-[60px] text-base sm:text-[18px] leading-6 sm:leading-8">{bookTitle}</p>
          <span className="text-[#808080] text-[12px] sm:text-base leading-[18px] sm:leading-6">{author}</span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-1">
            <p className="text-base sm:text-[20px] font-medium leading-6 sm:leading-10">{rating}</p>
            <svg className="h-5 w-5 sm:h-7.5 sm:h-7.5" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
              <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#FFD700" />
            </svg>
          </span>
          <p className="text-[16px] sm:text-[24px] font-[700] leading-8 sm:leading-12">₦{price}</p>
        </div>

        <div className="flex lg:justify-between w-full gap-2 sm:gap-3">
          <div className="sm:max-w-[286px] w-full">
            <Button
              handleClick={handleAddToCart}
              styles="text-white w-full bg-[#FFA500] text-[12px] sm:text-base py-2.5 sm:py-4 rounded-md sm:rounded-xl active:bg-[#CC8400] transition ease duration-100ms">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 21C9.3284 21 10 20.3284 10 19.5C10 18.6716 9.3284 18 8.5 18C7.67157 18 7 18.6716 7 19.5C7 20.3284 7.67157 21 8.5 21Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 3H21L19 14H6L4 3ZM4 3C3.83333 2.33333 3 1 1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14H6H4.23077C2.44646 14 1.5 14.7812 1.5 16C1.5 17.2188 2.44646 18 4.23077 18H18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-[14px] font-medium leading-6">{isAddedToCart ? "Added to Cart" : "Add to Cart"}</p>
            </Button>
          </div>

          <Button
            styles="bg-[#FFDB99] rounded-xl p-3 sm:p-[19px]"
            aria-label="Add to Wishlist"
            handleClick={handleLike}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill={isLiked ? "#FFA500" : "white"} >
              <path d="M20 5.86222C20 7.4087 19.4062 8.8941 18.3458 9.9929C15.9049 12.523 13.5374 15.1613 11.0053 17.5997C10.4249 18.1505 9.5042 18.1304 8.9488 17.5547L1.65376 9.9929C-0.551252 7.7072 -0.551252 4.01723 1.65376 1.73157C3.88044 -0.57655 7.50794 -0.57655 9.7346 1.73157L9.9998 2.00642L10.2648 1.73173C11.3324 0.6245 12.7864 0 14.3053 0C15.8242 0 17.2781 0.62444 18.3458 1.73157C19.4063 2.83045 20 4.31577 20 5.86222Z" />
            </svg>
          </Button>

        </div>
      </section>
    </div >
  );
};

export default CourseCard;
