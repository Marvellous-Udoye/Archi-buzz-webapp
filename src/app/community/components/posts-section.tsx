import Button from "@/app/component/common/archi-button";
import Image from "next/image";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/fetchData";

interface PostdataProps {
  name: string;
  profilePicture: string;
  hashtags: string[];
  hashtagsColor: string[];
  timePosted: string;
  postPicture: string;
}

const PostFeed = () => {
  const [postData, setPostData] = useState<PostdataProps[]>([]);
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState("");
  const [isPostFollowing, setIsPostFollowing] = useState<boolean[]>([]);
  const [isLike, setIsLike] = useState<boolean[]>([]);

  const { data, loading, error } = useFetch(
    "/postData.json",
    "error fetching posts"
  );

  useEffect(() => {
    setPostData(data);
    setError(error);
    setLoading(loading);
    setIsPostFollowing(new Array(data.length).fill(false));
    setIsLike(new Array(data.length).fill(false));
  }, [data, loading, error]);

  const handleFollowClick = (index: number) => {
    setIsPostFollowing(prev => prev.map((status, i) => i === index ? !status : status));
  };

  const handleLikeClick = (index: number) => {
    setIsLike(prev => prev.map((status, i) => i === index ? !status : status));
  };

  if (isloading) return <p className="bg-gray-100 w-full h-screen py-4 pl-4 sm:pl-0">Loading...</p>;
  if (isError) return <p className="bg-gray-100 w-full h-screen py-4 pl-4 sm:pl-0 text-red-500">{error}</p>;

  return (
    <main className="flex flex-col gap-3">
      <section className="flex flex-col gap-4 sm:gap-5 px-1.5 pb-3 sm:py-3 sm:px-3 rounded-bl-2xl rounded-br-2xl sm:rounded-2xl bg-gray-100">
        {postData.map((post, index) => (
          <div key={index} className="shadow-md rounded-xl bg-white">
            <Image
              src={post.postPicture}
              alt="Picture of post"
              width={675}
              height={200}
              className='w-full h-[200px] rounded-t-xl object-cover'
            />

            <div className="px-2 pb-3 flex flex-col gap-4 mt-5">
              <div className="flex items-center justify-between">
                <Button
                  styles={`${isPostFollowing[index] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400]'} h-[30px] sm:h-auto py-1.5 px-3 flex items-center gap-0 sm:gap-1 text-xs sm:text-sm rounded-2xl min-w-[80px] sm:min-w-[120px] transition duration-200 ease-in-out`}
                  handleClick={() => handleFollowClick(index)}
                >
                  <p>{isPostFollowing[index] ? 'Following' : 'Follow'}</p>
                  {!isPostFollowing[index] &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 20" fill="none" className="ml-1 w-4 h-4">
                      <path d="M5.16602 10H10.166M10.166 10H15.166M10.166 10V5M10.166 10V15" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                </Button>

                <div className="flex gap-4 py-2.5">
                  <svg
                    onClick={() => handleLikeClick(index)}
                    className={`${isLike[index] ? 'fill-red-500 stroke-red-500' : 'fill-none stroke-black'} cursor-pointer w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18">
                    <path d="M18.1667 6.38518C18.1667 7.67392 17.6718 8.91175 16.7882 9.82742C14.7541 11.9358 12.7812 14.1344 10.6711 16.1664C10.1874 16.6254 9.42016 16.6087 8.95733 16.1289L2.87813 9.82742C1.04062 7.92267 1.04062 4.84769 2.87813 2.94297C4.7337 1.01954 7.75661 1.01954 9.61216 2.94297L9.83316 3.17202L10.054 2.94311C10.9437 2.02042 12.1553 1.5 13.4211 1.5C14.6868 1.5 15.8984 2.02037 16.7882 2.94297C17.6719 3.85871 18.1667 5.09647 18.1667 6.38518Z" stroke-width="1.25" stroke-linejoin="round" />
                  </svg>
                  <svg className='cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none">
                    <path d="M6.66602 10H14.9993" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.66602 6.66699H11.666" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.33398 16.9079V4.16667C3.33398 3.24619 4.08018 2.5 5.00065 2.5H16.6673C17.5878 2.5 18.334 3.24619 18.334 4.16667V12.5C18.334 13.4205 17.5878 14.1667 16.6673 14.1667H7.46836C6.96205 14.1667 6.4832 14.3968 6.16691 14.7922L4.22442 17.2203C3.92916 17.5893 3.33398 17.3806 3.33398 16.9079Z" stroke="black" stroke-width="1.25" />
                  </svg>
                  <svg className='cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none">
                    <path d="M15.5 18.334C16.8807 18.334 18 17.2147 18 15.834C18 14.4532 16.8807 13.334 15.5 13.334C14.1192 13.334 13 14.4532 13 15.834C13 17.2147 14.1192 18.334 15.5 18.334Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.5 6.66699C16.8807 6.66699 18 5.5477 18 4.16699C18 2.78628 16.8807 1.66699 15.5 1.66699C14.1192 1.66699 13 2.78628 13 4.16699C13 5.5477 14.1192 6.66699 15.5 6.66699Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5 12.5C6.88071 12.5 8 11.3807 8 10C8 8.61925 6.88071 7.5 5.5 7.5C4.11929 7.5 3 8.61925 3 10C3 11.3807 4.11929 12.5 5.5 12.5Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4173 5.41699L7.58398 8.75033" stroke="black" stroke-width="1.25" />
                    <path d="M7.58398 11.25L13.4173 14.5833" stroke="black" stroke-width="1.25" />
                  </svg>
                  <svg className='cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none">
                    <path d="M16.8333 10.834V15.834C16.8333 16.7545 16.0872 17.5007 15.1667 17.5007H5.16667C4.24619 17.5007 3.5 16.7545 3.5 15.834V10.834" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.1667 12.5V2.5M10.1667 2.5L7.25 5.41667M10.1667 2.5L13.0833 5.41667" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className='flex items-center gap-2 sm:gap-3'>
                  <Image
                    src={post.profilePicture}
                    alt="Author's Picture"
                    width={50}
                    height={50}
                    className="rounded-full w-10 sm:w-[50px] h-10 sm:h-[50px] object-cover"
                  />
                  <p className='text-xl sm:text-3xl font-medium'>{post.name}</p>
                </div>
                <span className='text-sm font-medium sm:leading-7'>{post.timePosted} ago</span>
              </div>

              <div className="flex items-center gap-1 flex-wrap">
                {post.hashtags.map((tags, tagIndex) => (
                  <div key={tagIndex}>
                    <Button
                      cssStyle={{ backgroundColor: post.hashtagsColor[tagIndex] }}
                      styles="py-1.5 px-2 sm:px-3 rounded-2xl sm:rounded-2xl text-[9px] sm:text-xs text-white"
                    >
                      <p>{tags}</p>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PostFeed;
