"use client"

import React, { useEffect, useState } from 'react';
import styles from './community.module.css';
import Image from 'next/image';
import Button from '../component/common/archi-button';
import HubsCard from '../component/common/hubs-card';
import AccountCard from '../component/common/accounts';

interface PostdataProps {
  name: string;
  profilePicture: string;
  hashtags: string[];
  hashtagsColor: string[];
  timePosted: string;
  postPicture: string;
}

interface HubsProps {
  hubName: string;
  members: number;
}

interface AccountProps {
  accountName: string;
  authorsPicture: string;
}

const Community = () => {
  const [search, setSearch] = useState('')
  const [postData, setPostData] = useState<PostdataProps[]>([])
  const [hubsData, setHubsData] = useState<HubsProps[]>([])
  const [accountData, setAccountData] = useState<AccountProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async (url: string, setter: React.Dispatch<React.SetStateAction<any[]>>, errorMsg: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(errorMsg);
      }
      const data = await response.json();
      setter(data);
    } catch (e) {
      console.error(error);
      setError(errorMsg);
    }
  };

  useEffect(() => {
    Promise.all([
      fetchData('/postData.json', setPostData, 'Unable to fetch post data'),
      fetchData('/hubsData.json', setHubsData, 'Unable to fetch hubs data'),
      fetchData('/accountsData.json', setAccountData, 'Unable to fetch accounts data'),
    ]).finally(() => setLoading(false));
  }, []);

  const [isPostFollowing, setIsPostFollowing] = useState<boolean[]>(new Array(postData.length).fill(false));
  const [isAccountFollowing, setIsAccountFollowing] = useState<boolean[]>(new Array(accountData.length).fill(false));
  const [isLike, setIsLike] = useState<boolean[]>(new Array(accountData.length).fill(false));

  const handleFollowClick = (index: number) => {
    const updatedFollowStatus = [...isPostFollowing];
    updatedFollowStatus[index] = !updatedFollowStatus[index];
    setIsPostFollowing(updatedFollowStatus);
  };

  const handleAccountFollowClick = (index: number) => {
    const updatedFollowStatus = [...isAccountFollowing];
    updatedFollowStatus[index] = !updatedFollowStatus[index];
    setIsAccountFollowing(updatedFollowStatus);
  };

  const handleLikeClick = (index: number) => {
    const updatedLike = [...isLike];
    updatedLike[index] = !updatedLike[index];
    setIsLike(updatedLike);
  };

  type TabType = 'Post' | 'People';
  const [activeTab, setActiveTab] = useState<TabType>('Post');

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className={`max-w-[1266px] mx-auto mt-[30px]`}>

      <div className={`${styles.filter} flex flex-col gap-[33px]`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center relative'>
            <input
              id='Search'
              value={search}
              className="outline-none rounded-tl-[16px] rounded-bl-[16px] py-2.5 pl-14 border-t-[0.8px] border-l-[0.8px] border-b-[0.8px] border-black flex justify-center items-center font-[500] text-[16px] leading-[32px]"
              type='text'
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for a post...'
            />
            <svg className="absolute top-1/2 left-5 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.95866 0.541016C3.93158 0.541016 0.666992 3.8056 0.666992 7.83268C0.666992 11.8598 3.93158 15.1243 7.95866 15.1243C9.74696 15.1243 11.3857 14.48 12.6538 13.4117L15.85 16.608C16.0941 16.852 16.4899 16.852 16.7339 16.608C16.978 16.3639 16.978 15.9682 16.7339 15.7241L13.5377 12.5279C14.6059 11.2597 15.2503 9.62095 15.2503 7.83268C15.2503 3.80561 11.9858 0.541016 7.95866 0.541016ZM1.91699 7.83268C1.91699 4.49596 4.62194 1.79102 7.95866 1.79102C11.2954 1.79102 14.0003 4.49596 14.0003 7.83268C14.0003 9.49833 13.3271 11.0055 12.2365 12.0991L12.2365 12.0991C11.142 13.1965 9.63011 13.8743 7.95866 13.8743C4.62194 13.8743 1.91699 11.1694 1.91699 7.83268Z" fill="black" />
            </svg>
            <div className="flex items-center bg-[#FFE4B2] h-[54px] p-3.5 rounded-tr-[16px] rounded-br-[16px] border-[0.8px] border-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.369141 1.94468C0.369141 1.41162 0.801271 0.979492 1.33433 0.979492H24.4989C25.0319 0.979492 25.4641 1.41162 25.4641 1.94468C25.4641 2.47774 25.0319 2.90987 24.4989 2.90987H1.33433C0.801271 2.90987 0.369141 2.47774 0.369141 1.94468ZM5.51644 9.66614C5.51644 9.13308 5.94857 8.70095 6.48163 8.70095H19.3508C19.8839 8.70095 20.316 9.13308 20.316 9.66614C20.316 10.1992 19.8839 10.6313 19.3508 10.6313H6.48163C5.94857 10.6313 5.51644 10.1992 5.51644 9.66614ZM11.6297 16.4225C11.0966 16.4225 10.6645 16.8546 10.6645 17.3877C10.6645 17.9208 11.0966 18.3529 11.6297 18.3529H14.2035C14.7366 18.3529 15.1687 17.9208 15.1687 17.3877C15.1687 16.8546 14.7366 16.4225 14.2035 16.4225H11.6297Z" fill="black" />
              </svg>
            </div>
          </div>

          <Button styles='flex items-center justify-center gap-1 bg-[#D8D8D8] h-[54px] px-4 py-2 outline-none rounded-[16px]'>
            For You
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M5.5 8.16602L10.5 13.166L15.5 8.16602" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </div>

        <div className='flex justify-between'>
          <span className='flex items-end leading-8 gap-[30px] font-[500] text-[16px] cursor-pointer'>
            <p
              className={`py-1 ${activeTab === 'Post' ? 'text-[#FFA500] border-b-[2px] border-[#FFA500]' : ''}`}
              onClick={() => handleTabClick('Post')}
            >
              Post
            </p>
            <p
              className={`py-1 ${activeTab === 'People' ? 'text-[#FFA500] border-b-[2px] border-[#FFA500]' : ''}`}
              onClick={() => handleTabClick('People')}
            >
              People
            </p>
          </span>
          <Button styles={`${styles.refresh_button} bg-[#fff] px-[13px] py-[6px] rounded-[5px] border-[0.83px] border-black leading-[26px] text-[13px]`}>
            <p>Refresh feed</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
            </svg>
          </Button>
        </div>
      </div>

      <div className={`${styles.community_ctn} flex max-w-[1266px] justify-between`}>
        {activeTab === 'Post' ? (
          <main className={`${styles.feed} flex flex-col gap-[11px]`}>
            <section className='flex flex-col gap-[30px] p-[13px] rounded-[16px] bg-[#F6F5F5]'>
              {postData.map((post, index) => (
                <div key={index} className='shadow-custom p-4 rounded-[12px] bg-white '>
                  <Image
                    src={post.postPicture}
                    alt='Picture of post'
                    width={675}
                    height={100}
                    className='w-full rounded-[8px] mb-[13px]'
                  />

                  <div className='p-2 flex flex-col gap-[17.5px]'>
                    <div className='flex items-center justify-between'>
                      <Button
                        styles={`${isPostFollowing[index] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400] transition ease duration-100ms'} py-[6px] px-[13px] rounded-[16px] `}
                        handleClick={() => handleFollowClick(index)}
                      >
                        <p>{isPostFollowing[index] ? 'Following' : 'Follow'}</p>
                        {!isPostFollowing[index] &&
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M5.16602 10H10.166M10.166 10H15.166M10.166 10V5M10.166 10V15" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>}
                      </Button>

                      <div className='flex gap-4 py-2.5'>
                        <svg
                          onClick={() => handleLikeClick(index)}
                          className={`${isLike[index] ? 'fill-[#FF4C4C] stroke-[#FF4C4C]' : 'fill-none stroke-black'} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                          <path d="M18.1667 6.38518C18.1667 7.67392 17.6718 8.91175 16.7882 9.82742C14.7541 11.9358 12.7812 14.1344 10.6711 16.1664C10.1874 16.6254 9.42016 16.6087 8.95733 16.1289L2.87813 9.82742C1.04062 7.92267 1.04062 4.84769 2.87813 2.94297C4.7337 1.01954 7.75661 1.01954 9.61216 2.94297L9.83316 3.17202L10.054 2.94311C10.9437 2.02042 12.1553 1.5 13.4211 1.5C14.6868 1.5 15.8984 2.02037 16.7882 2.94297C17.6719 3.85871 18.1667 5.09647 18.1667 6.38518Z" stroke-width="1.25" stroke-linejoin="round" />
                        </svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M6.66602 10H14.9993" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M6.66602 6.66699H11.666" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.33398 16.9079V4.16667C3.33398 3.24619 4.08018 2.5 5.00065 2.5H16.6673C17.5878 2.5 18.334 3.24619 18.334 4.16667V12.5C18.334 13.4205 17.5878 14.1667 16.6673 14.1667H7.46836C6.96205 14.1667 6.4832 14.3968 6.16691 14.7922L4.22442 17.2203C3.92916 17.5893 3.33398 17.3806 3.33398 16.9079Z" stroke="black" stroke-width="1.25" />
                        </svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M15.5 18.334C16.8807 18.334 18 17.2147 18 15.834C18 14.4532 16.8807 13.334 15.5 13.334C14.1192 13.334 13 14.4532 13 15.834C13 17.2147 14.1192 18.334 15.5 18.334Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.5 6.66699C16.8807 6.66699 18 5.5477 18 4.16699C18 2.78628 16.8807 1.66699 15.5 1.66699C14.1192 1.66699 13 2.78628 13 4.16699C13 5.5477 14.1192 6.66699 15.5 6.66699Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.5 12.5C6.88071 12.5 8 11.3807 8 10C8 8.61925 6.88071 7.5 5.5 7.5C4.11929 7.5 3 8.61925 3 10C3 11.3807 4.11929 12.5 5.5 12.5Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M13.4173 5.41699L7.58398 8.75033" stroke="black" stroke-width="1.25" />
                          <path d="M7.58398 11.25L13.4173 14.5833" stroke="black" stroke-width="1.25" />
                        </svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M16.8333 10.834V15.834C16.8333 16.7545 16.0872 17.5007 15.1667 17.5007H5.16667C4.24619 17.5007 3.5 16.7545 3.5 15.834V10.834" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.1667 12.5V2.5M10.1667 2.5L7.25 5.41667M10.1667 2.5L13.0833 5.41667" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex gap-[13px]'>
                        <Image
                          src={post.profilePicture}
                          alt="Author's Picture"
                          width={50}
                          height={50}
                          className='rounded-full'
                        />
                        <p className='text-[32px] font-[500]'>{post.name}</p>
                      </div>

                      <span className='text-[13px] font-[500] leading-[26px]'>{post.timePosted} ago</span>
                    </div>

                    <div className='flex items-center gap-[5px] text-white'>
                      {post.hashtags.map((tags, tagIndex) => (
                        <div key={tagIndex}
                        >
                          <Button
                            cssStyle={{ backgroundColor: post.hashtagsColor[tagIndex] }}
                            styles={`text-[12px] py-[6px] px-[13px] rounded-[16px] text-[13px]`}>
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
        ) : (
          <div className='flex flex-col gap-4 w-full max-w-[700px]'>
            {accountData.map((account, accountIndex) => (
              <AccountCard
                key={accountIndex}
                styles='shadow-custom rounded-[16px] p-4'
                text={account.accountName}
                profilePicture={account.authorsPicture}
              >
                <Button
                  styles={`${isAccountFollowing[accountIndex] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400] transition ease duration-100ms'} px-[13px] py-[6px] rounded-[16px] flex gap-1 text-[#fff]`}
                  handleClick={() => handleAccountFollowClick(accountIndex)}
                >
                  <p>{isAccountFollowing[accountIndex] ? 'Following' : 'Follow'}</p>
                  {!isAccountFollowing[accountIndex] && <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M5.66797 10.833H10.668M10.668 10.833H15.668M10.668 10.833V5.83301M10.668 10.833V15.833" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>}
                </Button>
              </AccountCard>
            ))}
          </div>
        )}

        <aside className={`${styles.hubs_and_suggestions} flex flex-col gap-4 bg-[#F6F5F5] rounded-[16px]`}>
          <div className='flex flex-col gap-[33px] p-[13px] '>
            <div className='flex flex-col gap-[13px]'>
              <p className='text-[40px] font-[500]'>Hubs</p>
              <p className='text-[16px] font-[500] leading-[32px]'>Join or create your own community and try and get to the top 4.</p>
            </div>

            <div className='text-center text-[16px] font=[500] leading-8'>
              <p>Top 4 Most Populous Hubs🎉</p>
              <p>These are the hubs with the most members.</p>
            </div>

            <div className='flex flex-col gap-4'>
              {hubsData.map((hub, hubIndex) => (
                <HubsCard
                  key={hubIndex}
                  styles='shadow-custom rounded-[16px] p-4'
                  text={`${hubIndex + 1}.  ${hub.hubName}`}
                  numbers={hub.members}
                >
                  <Button styles='bg-[#FFE4B2] px-[13px] py-[6px] rounded-[16px] flex gap-1'>
                    <p>Join</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path d="M5.66797 10.1665H10.668M10.668 10.1665H15.668M10.668 10.1665V5.1665M10.668 10.1665V15.1665" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Button>
                </HubsCard>
              ))}
            </div>

            <Button
              styles='bg-[#FFA809] mt-[46px] w-full p-4 rounded-[8px] shadow-custom leading-8'
            >
              <p>Create Hub</p>
            </Button>
          </div>

          <div className='flex flex-col gap-[33px] p-[13px]'>
            <p className='text-[40px] font-[500]'>Suggested accounts</p>

            <div className='flex flex-col gap-4'>
              {accountData.map((account, accountIndex) => (
                <AccountCard
                  key={accountIndex}
                  styles='shadow-custom rounded-[16px] p-4'
                  text={account.accountName}
                  profilePicture={account.authorsPicture}
                >
                  <Button
                    styles={`${isAccountFollowing[accountIndex] ? 'bg-[#D8D8D8] text-black' : 'bg-[#FFA809] text-white active:bg-[#CC8400] transition ease duration-100ms'} px-[13px] py-[6px] rounded-[16px] flex gap-1 text-[#fff]`}
                    handleClick={() => handleAccountFollowClick(accountIndex)}
                  >
                    <p>{isAccountFollowing[accountIndex] ? 'Following' : 'Follow'}</p>
                    {!isAccountFollowing[accountIndex] && <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path d="M5.66797 10.833H10.668M10.668 10.833H15.668M10.668 10.833V5.83301M10.668 10.833V15.833" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                  </Button>
                </AccountCard>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Community;
