import Image from "next/image"
import Button from "./archi-button";
import coursePicture from '../../../../public/images/courses/artificial intelligence 1.png'

interface ArchiCorurseProps {

}

const CourseCard = ({ }: ArchiCorurseProps) => {
  return (
    <div className="border-t-[4px] border-t-[#FFA500] max-w-[402px]">
      <div className="bg-[#F0F0F0] flex items-center justify-center max-w-[402px] max-h-[313px] h-full w-full">
        <Image
          src={coursePicture}
          alt="Course Picture"
          width={162}
          height={227}
        />
      </div>

      <section className="px-4 py-5">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <p className="text-[20px] font-[500] leading-10">Artificial Intelligence and Architecture: From Research to Practice</p>
            <div className="max-h-8 bg-[#FFECCA] text-[#FFA500] rounded-[20px] shadow-[inset_1px_0px_4px_0px_rgba(0,0,0,0.25)] px-2.5 py-1 text-[16px] font-[500] leading-6">
              <p>$41</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[#808080] text-[16px] font-[500] leading-6">Stanislas Chaillou</p>
            <span className="flex">
              <p className="text-[16px] font-[500] leading-8">4.4</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#FFD700" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            styles="bg-[#FFA500] py-4 text-[16px] font-[500] leading-6 max-w-[286px] w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 21C9.3284 21 10 20.3284 10 19.5C10 18.6716 9.3284 18 8.5 18C7.67157 18 7 18.6716 7 19.5C7 20.3284 7.67157 21 8.5 21Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 3H21L19 14H6L4 3ZM4 3C3.83333 2.33333 3 1 1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 14H6H4.23077C2.44646 14 1.5 14.7812 1.5 16C1.5 17.2188 2.44646 18 4.23077 18H18.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Add to Cart</p>
          </Button>
          <Button
            styles="bg-[#FFDB99] p-2.5 flex items-center rounded-[20px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M20 5.86222C20 7.4087 19.4062 8.8941 18.3458 9.9929C15.9049 12.523 13.5374 15.1613 11.0053 17.5997C10.4249 18.1505 9.5042 18.1304 8.9488 17.5547L1.65376 9.9929C-0.551252 7.7072 -0.551252 4.01723 1.65376 1.73157C3.88044 -0.57655 7.50794 -0.57655 9.7346 1.73157L9.9998 2.00642L10.2648 1.73173C11.3324 0.6245 12.7864 0 14.3053 0C15.8242 0 17.2781 0.62444 18.3458 1.73157C19.4063 2.83045 20 4.31577 20 5.86222Z" fill="white" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CourseCard;