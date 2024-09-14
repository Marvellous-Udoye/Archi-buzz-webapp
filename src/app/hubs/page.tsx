import React from 'react'
import Image from 'next/image'
// import Bell from '../hubs/Components/Assets/Icons/notification.svg'
// import archi_logo from '../hubs/Components/Assets/Icons/logo.svg'
// import user_image from '../hubs/Components/Assets/Icons/user_image.png'
import star_logo from '../hubs/Components/Assets/Icons/star.svg'
import emoji from'../hubs/Components/Assets/Icons/emoji.svg'
import pin from'../hubs/Components/Assets/Icons/pin.svg'
import union from'../hubs/Components/Assets/Icons/Union.svg'
const Page = () => {
  return (

    <main className="w-full  max-w-[1271.67px] grid place-content-center grid-cols-[100%] my-0 mx-auto min-h-screen gap-[40px] py-[2.5rem] px-[2rem] max-md: box-border max-md:px-[1rem] py-[0.5rem]">
      <div className=" border-[1px]  w-full  pt-[20px] pr-[200px] pb-[20px] pl-[20px] rounded-[20px] shadow-custom flex flex-col gap-[33.33px] max-md:p-[1rem]">
        <div className=' flex flex-col gap-[16.67px]w-full  content-center '>
        <div className='flex flex-row content-center gap-[16.67px] h-[59px] w-full '>
          <h1 className='text-[3rem]  max-md:text-[24px] font-medium '> Welcome to Hubs!</h1>
          <div className='flex content-center justify-center'>
              <Image src={star_logo} alt='this is image' className='w-full block mt-[0.6rem]'></Image>
          </div>
        
        </div>
        <p className='font-medium text-[1rem] w-full  text-[rgba(128, 128, 128, 1)] mt-[1.5rem] max-md:text-[12px]'>Join Hubs or create your own to explore your interests in Architecture and AI.</p>
        </div>

          <div >
          <ul className='flex flex-row  gap-[8px] pl-0 w-full text-[13.33px] content-start max-md:gap-[4.5px]'>
            <li className='py-[20px] px-[64px]  rounded-[20px] bg-[#FFA500] max-md:py-[12px] max-md:px-[20px] max-md:text-[12px] max-md:w-[200px] text-center  max-md:rounded-[4.5px] text-white'> <a href="">Create Hub</a></li>
            <li className='py-[20px] px-[64px] rounded-[20px] border-[0.833px] border-[#FFA500]  max-md:py-[12px] max-md:px-[20px] max-md:text-[12px] max-md:w-[200px] max-md:rounded-[4.5px] text-center'><a href="">Join Hub</a></li>
          </ul>
        </div>
      </div>
 
     
      <section className="flex flex-row content-center gap-[36.67px] w-full bg-secondary p-[13.33px] rounded-[16.67px]  max-md:flex-col   ">
        <div className='flex flex-col text-center content-center gap-[16.67px] w-full max-w-[416px] max-md:my-0 mx-auto max-md: w-full max-w-[327px]'>
            <h2 className='text-center text-[40px] w-full '>Hubs</h2>
            <ul className='flex flex-col text-center w-full content-center gap-[16.67px] max-md:gap-[20px] h-full '>
            <li className='flex flex-col gap-[8.33px] max-md:gap-[6.74px] max-md:p-[4.5px] border-l-[4px] border-transparent p-[16.67px] transition ease duration-200 hover:cursor-pointer hover:bg-[#FFE4B2] hover:border-l-[4px] hover:border-l-[#FFA500] '>Midjourney AI</li>
            <li className='flex flex-col gap-[8.33px] max-md:gap-[6.74px] max-md:p-[4.5px] p-[16.67px] border-l-[4px] border-transparent transition ease duration-200 hover:cursor-pointer hover:bg-[#FFE4B2] hover:border-l-[4px] hover:border-l-[#FFA500] '>LookX Hub</li>
            <li className='flex flex-col gap-[8.33px] max-md:gap-[6.74px] max-md:p-[4.5px] p-[16.67px] border-l-[4px] border-transparent transition ease duration-200 hover:cursor-pointer hover:bg-[#FFE4B2] hover:border-l-[4px] hover:border-l-[#FFA500]'>Flex Ai Hub</li>
            <li className='flex flex-col gap-[8.33px] max-md:gap-[6.74px] max-md:p-[4.5px] p-[16.67px] border-l-[4px] border-transparent transition ease duration-200 hover:cursor-pointer hover:bg-[#FFE4B2] hover:border-l-[4px] hover:border-l-[#FFA500]'>Prome Architects</li>
            <li className='flex flex-col gap-[8.33px] max-md:gap-[6.74px] max-md:p-[4.5px] p-[16.67px] border-l-[4px] border-transparent transition ease duration-200 hover:cursor-pointer hover:bg-[#FFE4B2] hover:border-l-[4px] hover:border-l-[#FFA500]'>Flux Bosses</li>
          </ul>
        </div>
       
        <div className='bg-white p-[13.33px] w-full max-w-[791.67px] rounded-[5px] flex flex-col  justify-between content-center h-full max-mad:p-[8px]'>
            <ul className='flex flex-col gap-[16px] content-center w-full  max-md:mb-[1.3rem]'>
              <li className='flex flex-col gap-[6.67px]  '>
                <h3 className='mb-[5px]'>Joseph Melody</h3>
              <p className='w-full max-w-[629.17px] gap-[8.33px] py-[13.33px] px-[16.67px] bg-[#FFE4B2]  rounded-tr-[16.67px] rounded-bl-[16.67px]'>
                    Guys, have you heard of prome AIs latest features bro, we can now make our images for free!
              </p>
              <span className=' w-full max-w-[629.17px] text-right'> 11:40am</span>
              </li>
              <li className='flex flex-col gap-[6.67px] '>
              <h3 className='mb-[5px]'>Joseph Melody</h3>
              <p className='w-full max-w-[315.33px] gap-[8.33px] py-[13.33px] px-[16.67px] bg-[#FFE4B2] rounded-tr-[16.67px] rounded-bl-[16.67px] '>
                        I heard that we just have to login today
                        Then we will see the update.
              </p>
              <span className=' w-full max-w-[315.33px] text-right'> 11:59am</span>
              </li>
            </ul> 
              <div className='flex flex-row content-center gap-[11.67px] w-full '>
                    <div className='flex flex-row content-center w-full max-w-[695.42px]  bg-[#FFE4B2] rounded-[16.67px] p-[13.3px] shadow-custom'>
                    <Image src={emoji} alt='this is emoji image' />
                    <input type="text" name='user-input-text' id='user-input-text' className='w-full pl-[1rem] outline-none bg-[#FFE4B2] ' />
                    <Image src={pin} alt='this is emoji image' />
                    </div>
                    <div className='bg-[#FFA500] rounded-[5px] w-[57.92px] flex content-center justify-center shadow-custom'>
                    <Image src={union} alt='this is emoji image'/>
                    </div>
            </div>
           
            
        </div>
        
      </section>
      <div className=' w-full flex content-end content-center justify-end text-white '><a href="" className='py-[20px] px-[64px] rounded-custom border-custom  bg-[#FFA500] rounded-[20px] max-md:py-[12px] max-md:px-[20px] max-md:text-[12px] max-md:w-[200px] max-md:rounded-[4.5px] text-center '>Join Hub</a></div>
    </main>
  )
}

export default Page