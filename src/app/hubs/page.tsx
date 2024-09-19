"use client";

import { Link } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import emoji from '../hubs/Components/Assets/Icons/emoji.svg';
import pin from '../hubs/Components/Assets/Icons/pin.svg';
import star_logo from '../hubs/Components/Assets/Icons/star.svg';
import union from '../hubs/Components/Assets/Icons/Union.svg';

interface Hubs {
  chatBox: string[];
  user: string[];
  hub: string;
}

const HubsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHub, setSelectedHub] = useState(0);
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [hubChat, setHubChat] = useState<Hubs[]>([]);
  const isActive = 'border-l-4 border-solid border-l-[#FFA500] bg-[#FFE4B2]';

  const mockhubChat: Hubs[] = [
    {
      hub: 'Midjourney AI',
      user: ['Joseph Melody'],
      chatBox: [
        'Guys, have you heard of prome AIs latest features bro, we can now make our images for free!',
        'I heard that we just have to login today, Then we will see the update.',
      ],
    },
    {
      hub: 'LookX',
      user: ['Olivia Jewel'],
      chatBox: [
        'Have you heard of prome AIs latest features bro, it is the AI tools, it is amazing!',
        'Share it with me, I want to see the update.',
      ],
    },
  ];

  useEffect(() => {
    const fetchHubs = async (): Promise<Hubs[] | undefined> => {
      try {
        const response = await fetch('/api/hubs');
        if (!response.ok) {
          return mockhubChat;
        }
        const data: Hubs[] = await response.json();
        return data;
      } catch {
        return mockhubChat;
      }
    };

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
      <div className="border-[1px] w-full py-[16px] pr-[200px] pl-[16px] rounded-[16.67px] shadow-custom flex flex-col gap-5 sm:gap-[33.33px] max-md:p-[1rem]">
        <div className="flex flex-col w-full">
          <div className="flex flex-row content-center gap-[16.67px] h-[40px] md:h-[59px] w-full">
            <h1 className="text-[3rem] max-md:text-[24px] font-medium">Welcome to Hubs!</h1>
            <div className="flex content-center justify-center">
              <Image src={star_logo} alt="Star logo" className="block mt-[0.5rem] md:mt-[0.6rem] h-6 w-6 md:w-[50px] md:h-[50px]" />
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
          <h2 className="text-center text-[24px] md:text-[40px] w-full">Hubs</h2>
          <ul className="flex flex-col text-center text-[12px] sm:text-base font-medium leading-8 w-full content-center h-full">
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 0 ? isActive : ''}`} onClick={() => setSelectedHub(0)}>
              Midjourney AI
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 1 ? isActive : ''}`} onClick={() => setSelectedHub(1)}>
              LookX Hub
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 2 ? isActive : ''}`} onClick={() => setSelectedHub(2)}>
              Flex AI Hub
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 3 ? isActive : ''}`} onClick={() => setSelectedHub(3)}>
              Prome Architects
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 4 ? isActive : ''}`} onClick={() => setSelectedHub(4)}>
              Flux Bosses
            </li>
            <li className={`flex flex-col gap-[8.33px] p-[16.67px] border-l-[3px] border-transparent cursor-pointer hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedHub === 5 ? isActive : ''}`} onClick={() => setSelectedHub(5)}>
              Archi Innovations
            </li>
          </ul>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {isError}</div>
        ) : (
          <div className="bg-white p-[13.33px] w-full max-w-[791.67px] rounded-[5px] flex flex-col justify-between content-center min-h-[300px] h-full max-md:p-[8px]">
            <ul className="flex flex-col gap-[16px] content-center w-full max-md:mb-[1.3rem]">
              {hubChat.map((chat, index) => (
                <li key={index} className="flex flex-col gap-[6.67px] font-medium">
                  <h3 className="mb-[1px] sm:mb-[5px] text-[10px] sm:text-[12px]">{chat.user}</h3>
                  <p className="text-[12px] sm:text-[16px] text-bold max-w-[629.17px] gap-[8.33px] py-2.5 sm:py-[13.33px] px-3.5 sm:px-[16.67px] bg-[#FFE4B2] rounded-tr-[16.67px] rounded-bl-[16.67px] w-fit">
                    {chat.chatBox}
                  </p>
                  <span className="text-[12px] leading-6 w-full max-w-[629.17px] text-right">11:40am</span>
                </li>
              ))}
            </ul>
            <div className='flex flex-row content-center gap-[11.67px] mt-3 w-full '>
              <div className='flex flex-row content-center w-full max-w-[695.42px] bg-[#FFE4B2] rounded-[16.67px] p-2 sm:p-[13.3px] shadow-custom'>
                <Image
                  src={emoji}
                  alt='this is emoji image'
                  className='transform scale-90 sm:scale-100' />
                <input
                  type="text"
                  name='user-input-text'
                  id='user-input-text'
                  className='w-full pl-[1rem] outline-none bg-[#FFE4B2] text-[12px] sm:text-[16px]' />
                <Image
                  src={pin}
                  alt='this is emoji image'
                  className='transform scale-90 sm:scale-100' />
              </div>
              <div className='cursor-pointer bg-[#FFA500] rounded-[5px] w-[57.92px] flex content-center justify-center shadow-custom'>
                <Image
                  src={union}
                  alt='this is emoji image'
                  className='transform scale-90 sm:scale-100' />
              </div>
            </div>
          </div>
        )}
      </section>
      <div className=' w-full flex content-center justify-end text-white '>
        <Link
          href={''}
          className='px-[64px] rounded-custom border-custom bg-[#FFA500] rounded-[16px] py-[8px] md:py-[12px] max-md:px-[20px] sm:text-[16px] text-sm max-md:w-[200px] max-md:rounded-[4.5px] text-center hover:bg-[#CC8400] transition ease duration-100ms'
        >
          Join
        </Link>
      </div>
    </main>
  );
};

export default HubsPage;
