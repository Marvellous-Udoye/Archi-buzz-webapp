"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import star_logo from '../hubs/Components/Assets/Icons/star.svg';
import emoji from '../hubs/Components/Assets/Icons/emoji.svg';
import pin from '../hubs/Components/Assets/Icons/pin.svg';
import union from '../hubs/Components/Assets/Icons/Union.svg';

interface Hubs {
  chatBox: string;
  user: string;
}

export const mockhubChat: Hubs[] = [
  {
    user: 'Joseph Melody',
    chatBox: 'Guys, have you heard of prome AIs latest features bro, we can now make our images for free!',
  },
  {
    user: 'John Doe',
    chatBox: 'I heard that we just have to login today, Then we will see the update.',
  }
];

export async function fetchHubs(): Promise<Hubs[] | undefined> {
  try {
    const response = await fetch("/api/hubs");
    if (!response.ok) {
      return mockhubChat; 
    }
    const data: Hubs[] = await response.json();
    return data;
  } catch {
    return mockhubChat; 
  }
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHub, setSelectedHub] = useState(0);
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [hubChat, setHubChat] = useState<Hubs[]>([]);
  const isActive = 'border-l-4 border-solid border-l-[#FFA500] bg-[#FFE4B2]';

  useEffect(() => {
    const getTools = async () => {
      const data = await fetchHubs();
      if (!data) {
        setIsError('Unable to fetch data.');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setHubChat(data);
    };
    getTools();
  }, []);

  return (
    <main className="w-full max-w-[1271.67px] grid place-content-center grid-cols-[100%] my-0 mx-auto min-h-screen gap-[40px] pt-[32px] pb-[16px] px-[2rem] sm:px-0 box-border max-md:px-[1rem]">
      <div className="border-[1px] w-full pt-[16px] pr-[200px] pb-[16px] pl-[16px] rounded-[20px] shadow-custom flex flex-col gap-[33.33px] max-md:p-[1rem]">
        <div className="flex flex-col w-full">
          <div className="flex flex-row content-center gap-[16.67px] h-[59px] w-full">
            <h1 className="text-[3rem] max-md:text-[24px] font-medium">Welcome to Hubs!</h1>
            <div className="flex content-center justify-center">
              <Image src={star_logo} alt="Star logo" className="w-full block mt-[0.6rem] h-6 w-6 md:w-[50px] md:h-[50px]" />
            </div>
          </div>
          <p className="font-medium text-[1rem] w-full text-[rgba(128,128,128,1)] md:mt-[1.5rem] max-md:text-[12px]">
            Join Hubs or create your own to explore your interests in Architecture and AI.
          </p>
        </div>

        <div>
          <ul className="flex flex-row gap-[8px] pl-0 w-full text-[13.33px] content-start max-md:gap-[4.5px]">
            <li className="cursor-pointer py-[20px] px-[64px] rounded-[20px] bg-[#FFA500] text-white max-md:py-[12px] max-md:px-[20px] md:text-[16px] max-md:w-[200px] text-center max-md:rounded-[4.5px]">
              <a href="">Create Hub</a>
            </li>
            <li className="cursor-pointer py-[20px] px-[64px] rounded-[20px] border-[0.833px] border-[#FFA500] max-md:py-[12px] max-md:px-[20px] md:text-[16px] max-md:w-[200px] max-md:rounded-[4.5px] text-center">
              <a href="">Join Hub</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="flex flex-row content-center gap-[36.67px] w-full bg-secondary p-[13.33px] rounded-[16.67px] max-md:flex-col">
        <div className="flex flex-col text-center content-center gap-[16.67px] w-full md:max-w-[416px]">
          <h2 className="text-center text-[40px] w-full">Hubs</h2>
          <ul className="flex flex-col text-center w-full content-center max-md:gap-[20px] h-full">
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] leading-8 cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 0 ? isActive : ''}`} onClick={() => setSelectedHub(0)}>
              Midjourney AI
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 1 ? isActive : ''}`} onClick={() => setSelectedHub(1)}>
              LookX Hub
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 2 ? isActive : ''}`} onClick={() => setSelectedHub(2)}>
              Flex AI Hub
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 3 ? isActive : ''}`} onClick={() => setSelectedHub(3)}>
              Prome Architects
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 4 ? isActive : ''}`} onClick={() => setSelectedHub(4)}>
              Flux Bosses
            </li>
          </ul>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {isError}</div>
        ) : (
          <div className="bg-white p-[13.33px] w-full max-w-[791.67px] rounded-[5px] flex flex-col justify-between content-center h-full max-md:p-[8px]">
            <ul className="flex flex-col gap-[16px] content-center w-full max-md:mb-[1.3rem]">
              {hubChat.map((chat, index) => (
                <li key={index} className="flex flex-col gap-[6.67px] font-medium">
                  <h3 className="mb-[5px] text-[12px]">{chat.user}</h3>
                  <p className="text-[16px] text-bold w-full max-w-[629.17px] gap-[8.33px] py-[13.33px] px-[16.67px] bg-[#FFE4B2] rounded-tr-[16.67px] rounded-bl-[16.67px] w-fit">
                    {chat.chatBox}
                  </p>
                  <span className="text-[12px] leading-6 w-full max-w-[629.17px] text-right">11:40am</span>
                </li>
              ))}
            </ul>
            <div className='flex flex-row content-center gap-[11.67px] w-full '>
              <div className='flex flex-row content-center w-full max-w-[695.42px]  bg-[#FFE4B2] rounded-[16.67px] p-[13.3px] shadow-custom'>
                <Image
                  src={emoji}
                  alt='this is emoji image' />
                <input
                  type="text"
                  name='user-input-text'
                  id='user-input-text'
                  className='w-full pl-[1rem] outline-none bg-[#FFE4B2] ' />
                <Image
                  src={pin}
                  alt='this is emoji image' />
              </div>
              <div className='cursor-pointer bg-[#FFA500] rounded-[5px] w-[57.92px] flex content-center justify-center shadow-custom'>
                <Image src={union} alt='this is emoji image' />
              </div>
            </div>
          </div>
        )}
      </section>
      <div className=' w-full flex content-end content-center justify-end text-white '><a href="" className='py-[20px] px-[64px] rounded-custom border-custom bg-[#FFA500] rounded-[20px] max-md:py-[12px] max-md:px-[20px] max-md:text-[12px] max-md:w-[200px] max-md:rounded-[4.5px] text-center hover:bg-[#CC8400] transition ease duration-100ms'>Join Hub</a></div>
    </main>
  );
};

export default Page;
