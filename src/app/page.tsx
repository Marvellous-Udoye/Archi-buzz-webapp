import Image from "next/image";
import featuresPic from "../../public/assets/images/features.png";
import heroPic from "../../public/assets/images/hero-pic.png";
import landImg2 from "../../public/assets/images/land-img-2.png";
import archibuzzLogo from "../../public/icons/archibuzz-logo.svg";
import Button from "./component/common/archi-button";
import ArchNumbers from "./component/common/landing-page-numbers";

import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[200px] cursor-pointer overflow-hidden rounded-sm border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-[270px] sm:h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#F3F3F3] ">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const HeroVideoDialogDemo = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full object-cover rounded-lg">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/video/2024-07-21 15-33-10.mp4"
        thumbnailSrc="/video/3d-rendering-abstract-building.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/video/2024-07-21 15-33-10.mp4"
        thumbnailSrc="/video/3d-rendering-abstract-building.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

import TypingAnimation from "@/components/magicui/typing-animation";
import Link from "next/link";

const TextRevealDemo = () => {
  return (
    <TypingAnimation
      className="text-[1.5rem] sm:text-[2.5rem] md:text-[64px] font-bold text-center md:text-left text-black dark:text-white"
      text={
        <>
          Empower Your{" "}
          <span style={{ color: "#FFA500" }}>Architectural Vision</span> with{" "}
          <span style={{ color: "#808080" }}>AI</span> Innovation
        </>
      }
    />
  );
}

const Home = () => {
  return (
    <div>
      <section className="pt-[42px] sm:pt-[75px] pb-8 md:pb-[100px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row  gap-[55px] max-w-[1266px] mx-auto">
          <div className="flex flex-col gap-5 w-full max-w-[640px] text-center lg:text-left">
            <TextRevealDemo />
            <p className="text-xs font-medium leading-6 md:text-base md:leading-8 text-center md:text-left">
              Join a community of architects, designers, and AI enthusiasts
              transforming the future of architecture and design. Learn,
              collaborate, and innovate with cutting-edge AI tools and
              techniques
            </p>
            <Button
              icon={
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16797 11.5687L12.0013 0.735352M12.0013 0.735352V11.1354M12.0013 0.735352H1.6013"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              styles="bg-[#FFA809] text-sm text-white font-medium mx-auto md:mx-0 px-2 py-[10px] rounded-lg md:px-6 md:py-4 md:rounded-[20px] border-r-[3px] border-r-black border-b-[3px] border-b-black hover:bg-[#CC8400] transition ease duration-100ms"
            >
              <Link href={'/signup'}>
                Join our Community
              </Link>
            </Button>
          </div>
          <Image
            src={heroPic}
            width={572}
            height={475}
            alt="This is a pic"
            className="xl:w-[560px] w-full h-full mx-auto"
          />
        </div>
      </section>

      <section className="pb-[50px] lg:pb-[100px] px-4 sm:px-[14px] lg:px-0 pt-[25px] md:pt-0">
        <div className="flex flex-col-reverse py-8 lg:flex-row items-center justify-around gap-[55px] max-w-[1266px] mx-auto">
          <div className="max-w-[800px] rounded-lg">
            <HeroVideoDialogDemo />
          </div>
          <div className="flex flex-col gap-5 w-full max-w-[625px]">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-[30px] lg:leading-[58.56px] text-center">
              About <span className="text-[#FFA500]">Archibuzz</span>
              <span className="text-[#808080]"> Studios</span>
            </h1>
            <p className="text-xs font-medium leading-6 md:text-base md:leading-8">
              Welcome to ARCHIBUZZ STUDIOS, where architecture and AI come
              together to innovate and inspire. Our community empowers
              architects, designers, and enthusiasts to explore new
              possibilities in design through collaboration and cutting-edge
              tools.
            </p>
            <p className="text-xs font-medium leading-6 md:text-base md:leading-8">
              Curious about how AI can change your design process? Watch our
              video to learn more about our mission and impact!
            </p>
            <Button
              icon={
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0403 7.38293C14.9064 7.88424 14.9051 9.13517 14.0379 9.6346L2.93089 16.0311C2.06368 16.5305 0.98103 15.9039 0.982121 14.9031L0.996094 2.08595C0.997185 1.08521 2.0812 0.460931 2.94732 0.962246L14.0403 7.38293Z"
                    fill="white"
                  />
                </svg>
              }
              styles="bg-[#FFA809] shadow-custom text-sm text-white mr-auto font-medium mx-auto px-2 py-[10px] rounded-lg md:px-6 md:py-4 md:rounded-[20px] ml-auto hover:bg-[#CC8400] transition ease duration-100ms"
            >
              Watch the Video
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-[80px] md:pb-[200px] px-4 bg-[#FBE0B0]">
        <div className="grid gap-[17.52px] md:gap-[55px] py-[17.52px] md:py-[33.33px] max-w-[1266px] mx-auto">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl md:text-[40px] text-[#FFA500] font-bold leading-[38.55px] md:leading-[48.8px]">
              OUR PRODUCTS
            </h1>
            <div className="w-[95.83px] border-[4.67px] border-[#FFA500]"></div>
          </div>
          <p className="max-w-[741.25px] mx-auto text-xs md:text-base text-center leading-6 md:leading-8 font-medium">
            Discover our range of innovative tools and resources designed to
            integrate AI into your architectural and design processes. Explore
            our products and elevate your design process today!
          </p>
          <div className="max-w-[1019.27px] flex flex-col items-center gap-4 mx-auto">
            <ArchNumbers number="1" />
            <h2 className="text-[21.03px] md:text-[40px] text-[#FFA500] leading-[25.21px] md:leading-[47.95px] font-normal">
              Archi<span className="text-[#808080]">Buzz</span>
            </h2>
            <p className="mx-auto text-xs font-medium leading-6 text-center md:text-base md:leading-8">
              Archibuzz aims to be a comprehensive online platform dedicated to
              architecture and artificial intelligence. The platform will serve
              as a dynamic community hub for enthusiasts, professionals,students
              businesses to interact, collaborate, and access relevant
              resources.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-4 bg-[#F3F3F3] relative">
        <div className="grid gap-10 max-w-[1266px] mx-auto">
          <Image
            src={featuresPic}
            alt=""
            height={691}
            width={1134.86}
            className="mx-auto relative px-4 -top-[10%] sm:-top-[15%] lg:-top-[18%]"
          />
          {/* <div className="h-[200px] md:h-[420px] lg:h-[491px] max-w-[1134.86px] mx-auto"></div> */}
          <div className="-mt-8 md:-mt-12 max-w-[1273.33px] mx-auto">
            <h1 className="text-[20px] md:text-[40px] font-medium leading-[23.97px] md:leading-[47.95px] text-center mb-6 md:mb-10">
              What we offer..
            </h1>
            <div className="grid md:grid-cols-3 gap-[18px] md:gap-8 w-full max-w-[995px] mx-auto">
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[50px] h-[50px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] shadow-custom text-[16px] md:text-[32px] font-bold leading-8 md:leading-[60px]">
                  1
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  Provision of a general forum for users to showcase their works, users can post, interact, like, save and comment.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[50px] h-[50px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] shadow-custom text-[16px] md:text-[32px] font-bold leading-8 md:leading-[60px]">
                  2
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  A selection of AI Tools  and courses available for purchase at discounted rates for platform members.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[50px] h-[50px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] shadow-custom text-[16px] md:text-[32px] font-bold leading-8 md:leading-[60px]">
                  3
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  Included segment for trending AI and Architecture news, along with blogs, journals and articles.
                </p>
              </div>
            </div>
          </div>
          <p className="text-base md:text-[32px] text-center font-medium leading-[19.25px] md:leading-[48.8px] mx-auto">
            and many more... so,
          </p>
          <Button
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16797 11.5687L12.0013 0.735352M12.0013 0.735352V11.1354M12.0013 0.735352H1.6013"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            styles="bg-[#FFA809] shadow-custom text-[10px] sm:text-[16px] text-white font-medium text-white px-4 py-2 rounded-[12px] md:px-6 md:py-4 md:rounded-[20px] md:h-14 mx-auto"
          >
            Get started
          </Button>
        </div>
      </section>

      <MarqueeDemo />

      <section className="pt-8 pb-16 px-4 bg-[#FFE4B2]">
        <div className="grid gap-10 max-w-[1266px] mx-auto">
          <div className="grid gap-4 text-center">
            <ArchNumbers number="2" />
            <h2 className="text-[28.04px] md:text-[40px] text-[#FFA500] leading-[33.61px] md:leading-[106.67px] font-normal">
              Archi<span className="text-[#808080]">Guide</span>
            </h2>
          </div>
          <p className="mx-auto text-xs font-medium leading-6 text-center md:text-base md:leading-8">
            We&apos;re excited to introduce a new AI-powered tool that will
            elevate your architectural and design projects! With features that
            automate tasks, boost creativity, and provide valuable insights,
            this product will transform your design process.
          </p>
          <p className="mx-auto text-xs font-medium leading-6 text-center md:text-base md:leading-8">
            Stay tuned for updates and exclusive previews. <br />
            Sign up below to be the first to know when it launches!
          </p>
          <Button
            icon={
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 4.83301L9.66667 7.74967L13.8333 4.83301"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.33301 11.5V3.16667C1.33301 2.24619 2.0792 1.5 2.99967 1.5H16.333C17.2535 1.5 17.9997 2.24619 17.9997 3.16667V11.5C17.9997 12.4205 17.2535 13.1667 16.333 13.1667H2.99967C2.0792 13.1667 1.33301 12.4205 1.33301 11.5Z"
                  stroke="black"
                  stroke-width="1.25"
                />
              </svg>
            }
            styles="text-sm md:text-[13.33px] font-medium px-2 py-[10px] md:py-[12px] md:px-[20px] border-[2.5px] border-[#FFA500] rounded-[16.67px] bg-transparent h-[51px] mx-auto"
          >
            Notify Me
          </Button>
        </div>
      </section>
      <section className="bg-[#f3f3f3] pt-8">
        <div className="max-w-[1266px] mx-auto bg-[#f3f3f3]">
          <ArchNumbers number="3" />
          <h1 className="text-2xl md:text-[53.33px] text-center leading-[48px] md:leading-[106.67px] font-normal mt-5 px-4">
            Our <span className="text-[#FFA500]">Design</span> <span className="text-[#808080]">Studio</span>
          </h1>
          <div className="w-full max-w-[1226px] h-full py-16 sm:pt-[70px] sm:pb-[100px] relative">
            <div className="grid gap-4 mx-auto md:mx-0 w-full px-4 sm:px-[60px] ">
              <h3 className="text-2xl md:text-[2rem] leading-[2rem] sm:leading-[3rem] md:leading-[4rem] z-10 text-center sm:text-left">
                Welcome to Our Design Studio
              </h3>
              <p className="text-xs md:text-base leading-6 md:leading-[2rem] z-10 text-center sm:text-left">
                At ArchiBuzz Studios, we blend creativity and innovation to
                design unique, functional spaces. Our team of architects and
                designers brings visions to life. Using advanced AI and design
                tools, we deliver high-quality architectural solutions that push
                the boundaries of design.
              </p>
            </div>
            <Image
              src={landImg2}
              alt=""
              width={1736}
              className="absolute inset-0 h-full rounded-tr-[12px] rounded-tl-[12px] sm:rounded-tl-[20px] "
            />
          </div>
        </div>
        <div className="h-[45px] bg-[#FFDB99]"></div>
        <div className="h-[22.5px] bg-[#FFC966]"></div>
        <div className="h-[22.5px] bg-[#FFA500]"></div>
      </section>

      <footer className="px-4 pt-8 pb-8 sm:pb-12">
        <div className="max-w-[1250px] mx-auto grid gap-8 sm:gap-16">
          <div className="flex flex-col justify-between md:flex-row">
            <Image
              src={archibuzzLogo}
              alt=""
              height={56.3}
              width={98.33}
              priority={true}
              className="h-[56.3px] w-[98.33px]"
            />
            <div className="max-w-[455px] mb-5 md:mb-0 flex flex-col md:flex-row justify-between gap-12">
              <div>
                <h1 className="text-[24] font-medium leading-[39.04px] mb-2">
                  Archibuzz Studios
                </h1>
                <div className="h-[22.59px] w-[138.06px] flex items-center justify-between">
                  <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                    <path d="M23.0765 11.2946C23.0765 5.07564 18.035 0.0341797 11.8161 0.0341797C5.59712 0.0341797 0.555664 5.07564 0.555664 11.2946C0.555664 16.915 4.67343 21.5735 10.0566 22.4182V14.5496H7.19756V11.2946H10.0566V8.81378C10.0566 5.99163 11.7377 4.43279 14.3099 4.43279C15.5418 4.43279 16.8305 4.6527 16.8305 4.6527V7.42384H15.4106C14.0117 7.42384 13.5755 8.29183 13.5755 9.18233V11.2946H16.6985L16.1993 14.5496H13.5755V22.4182C18.9587 21.5735 23.0765 16.915 23.0765 11.2946Z" fill="#FFA500" />
                    <path d="M16.198 14.5504L16.6973 11.2954H13.5743V9.18314C13.5743 8.29263 14.0105 7.42465 15.4093 7.42465H16.8292V4.65351C16.8292 4.65351 15.5406 4.43359 14.3086 4.43359C11.7365 4.43359 10.0554 5.99244 10.0554 8.81459V11.2954H7.19629V14.5504H10.0554V22.419C10.6287 22.509 11.2163 22.5558 11.8148 22.5558C12.4134 22.5558 13.001 22.509 13.5743 22.419V14.5504H16.198Z" fill="white" />
                  </svg>
                  <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M22.1 2.879C21.8371 1.90753 21.0783 1.14868 20.1068 0.885807C18.3592 0.40918 11.3252 0.40918 11.3252 0.40918C11.3252 0.40918 4.29123 0.423627 2.54359 0.900254C1.57212 1.16312 0.81326 1.92198 0.550386 2.89344C0.0217574 5.99878 -0.183339 10.7305 0.564831 13.7116C0.827704 14.6831 1.58657 15.4419 2.55802 15.7048C4.30568 16.1814 11.3396 16.1814 11.3396 16.1814C11.3396 16.1814 18.3736 16.1814 20.1212 15.7048C21.0927 15.4419 21.8516 14.6831 22.1145 13.7116C22.672 10.6019 22.8438 5.87314 22.1 2.879Z" fill="#FFA500" />
                    <path d="M9.08594 11.6746L14.9211 8.29479L9.08594 4.91504V11.6746Z" fill="white" />
                  </svg>
                  <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                    <path d="M11.858 2.06312C14.8647 2.06312 15.2208 2.07457 16.4082 2.12874C17.5061 2.17885 18.1023 2.36228 18.4992 2.51645C19.0247 2.72072 19.3999 2.96479 19.7939 3.35881C20.1879 3.7528 20.4319 4.12796 20.6362 4.65351C20.7904 5.05036 20.9738 5.64659 21.0239 6.74443C21.0781 7.93183 21.0896 8.28795 21.0896 11.2946C21.0896 14.3013 21.0781 14.6574 21.0239 15.8448C20.9738 16.9427 20.7904 17.5389 20.6362 17.9357C20.4319 18.4613 20.1879 18.8364 19.7939 19.2304C19.3999 19.6245 19.0247 19.8685 18.4992 20.0727C18.1023 20.227 17.5061 20.4104 16.4082 20.4605C15.221 20.5147 14.8649 20.5261 11.858 20.5261C8.85121 20.5261 8.49509 20.5147 7.30791 20.4605C6.21002 20.4104 5.61379 20.227 5.21699 20.0727C4.69139 19.8685 4.31625 19.6245 3.92223 19.2304C3.52822 18.8364 3.28415 18.4613 3.07993 17.9357C2.92571 17.5389 2.74228 16.9427 2.69217 15.8448C2.638 14.6574 2.62656 14.3013 2.62656 11.2946C2.62656 8.28795 2.638 7.93183 2.69217 6.74448C2.74228 5.64659 2.92571 5.05036 3.07993 4.65351C3.28415 4.12796 3.52822 3.7528 3.92223 3.35881C4.31625 2.96479 4.69139 2.72072 5.21699 2.51645C5.61379 2.36228 6.21002 2.17885 7.30786 2.12874C8.49526 2.07457 8.85137 2.06312 11.858 2.06312ZM11.858 0.0341797C8.79989 0.0341797 8.41646 0.0471412 7.21543 0.101943C6.01684 0.156652 5.19833 0.346977 4.48202 0.625359C3.74156 0.913127 3.11359 1.29816 2.48759 1.92416C1.86159 2.55016 1.47656 3.17811 1.18879 3.91859C0.910411 4.63487 0.720086 5.45341 0.665374 6.65197C0.610575 7.85298 0.597656 8.23646 0.597656 11.2946C0.597656 14.3528 0.610575 14.7363 0.665374 15.9372C0.720086 17.1358 0.910411 17.9543 1.18879 18.6706C1.47656 19.4111 1.86159 20.0391 2.48759 20.6651C3.11359 21.2911 3.74156 21.6761 4.48202 21.9639C5.19833 22.2423 6.01684 22.4326 7.21543 22.4873C8.41646 22.5421 8.79989 22.555 11.858 22.555C14.9162 22.555 15.2997 22.5421 16.5007 22.4873C17.6993 22.4326 18.5178 22.2423 19.2341 21.9639C19.9746 21.6761 20.6025 21.2911 21.2285 20.6651C21.8545 20.0391 22.2395 19.4111 22.5273 18.6706C22.8057 17.9543 22.996 17.1358 23.0507 15.9372C23.1055 14.7363 23.1185 14.3528 23.1185 11.2946C23.1185 8.23646 23.1055 7.85298 23.0507 6.65197C22.996 5.45341 22.8057 4.63487 22.5273 3.91859C22.2395 3.17811 21.8545 2.55016 21.2285 1.92416C20.6025 1.29816 19.9746 0.913127 19.2341 0.625359C18.5178 0.346977 17.6993 0.156652 16.5007 0.101943C15.2997 0.0471412 14.9162 0.0341797 11.858 0.0341797ZM11.858 5.51223C8.66455 5.51223 6.07566 8.10109 6.07566 11.2946C6.07566 14.4881 8.66455 17.077 11.858 17.077C15.0516 17.077 17.6404 14.4881 17.6404 11.2946C17.6404 8.10109 15.0516 5.51223 11.858 5.51223ZM11.858 15.0481C9.78508 15.0481 8.10454 13.3676 8.10454 11.2946C8.10454 9.22165 9.78508 7.54112 11.858 7.54112C13.931 7.54112 15.6116 9.22165 15.6116 11.2946C15.6116 13.3676 13.931 15.0481 11.858 15.0481ZM19.2201 5.28376C19.2201 6.03006 18.6152 6.63504 17.8689 6.63504C17.1226 6.63504 16.5176 6.03006 16.5176 5.28376C16.5176 4.53748 17.1226 3.93254 17.8689 3.93254C18.6152 3.93254 19.2201 4.53748 19.2201 5.28376Z" fill="#FFA500" />
                  </svg>
                  <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M17.8365 0H21.2883L13.7492 9.56817L22.6182 22.59H15.6755L10.2339 14.6944L4.01484 22.59H0.558191L8.62045 12.3539L0.118164 0H7.23681L12.1504 7.21685L17.8365 0ZM16.624 20.2984H18.5357L6.19541 2.17212H4.14196L16.624 20.2984Z" fill="#FFA500" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl font-medium">Products</p>
                <ul className="text-base font-medium leading-8">
                  <li>ArchiBuzz</li>
                  <li>ArchiGuide</li>
                  <li>Buzz AI</li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-col gap-1 mb-5 font-medium text-[18px] sm:text-xl leading-12 md:leading-8 md:font-bold md:mb-0">
              <li className="hover:text-[#FFA500] transition ease duration-100ms cursor-pointer w-fit">About</li>
              <li className="hover:text-[#FFA500] transition ease duration-100ms cursor-pointer w-fit">Products</li>
              <li className="hover:text-[#FFA500] transition ease duration-100ms cursor-pointer w-fit">Home</li>
            </ul>
            <form className="grid gap-5 p-5  rounded-[20px] max-w-[340px] w-full bg-[#FFE4B2]">
              <p className="text-base font-bold leading-8 text-center">
                Get tips and resources sent to your inbox
              </p>
              <input
                type="text"
                className="w-full p-[10px] rounded-[20px]"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full p-[10px] rounded-[20px]"
                placeholder="Email"
              />
              <Button styles="active:bg-[#CC8400] transition ease duration-100ms bg-[#FFA809] text-sm md:text-[13.33px] text-white font-medium text-white px-3 py-5 rounded-[20px] md:px-6 md:py-4 md:rounded-[16.67px] h-14 mx-auto">
                Get updates
              </Button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-between h-[60px]">
            <div className="w-full border-t border-solid border-t-black"></div>
            <p className="text-xs font-medium text-center md:text-base">
              Copyright @ 2024 ArchiBuzz Studios LLC. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
