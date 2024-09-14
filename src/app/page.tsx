import Image from "next/image";
import heroPic from "../../public/assets/images/hero-pic.png";
import Button from "./component/common/archi-button";
import featuresPic from "../../public/assets/images/features.png";
import landImg2 from "../../public/assets/images/land-img-2.png";
import archibuzzLogo from "../../public/icons/archibuzz-logo.svg";
import ArchNumbers from "./component/common/landing-page-numbers";

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
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

export async function TextRevealDemo() {
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
      <section className="pt-[100px] pb-8 md:pb-[193px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row  gap-[55px] container max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-5 w-full max-w-[789px] text-center lg:text-left">
            <TextRevealDemo />
            <p className="text-xs font-medium leading-8 md:text-xl md:leading-10 text-pretty">
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
              styles="bg-[#FFA809] text-sm text-white font-medium mx-auto md:mx-0 px-2 py-[10px] rounded-lg md:px-6 md:py-4 md:rounded-[20px] border-r-[3px] border-r-black border-b-[3px] border-b-black"
            >
              Join our Community
            </Button>
          </div>
          <Image
            src={heroPic}
            width={572}
            height={475}
            alt="This is a pic"
            className="w-full h-full mx-auto"
          />
        </div>
      </section>

      <section className="pb-[50px] lg:pb-[193px] px-[14px] lg:px-0 pt-[35px] md:pt-0">
        <div className="flex flex-col-reverse py-8 md:flex-row items-center justify-around gap-[55px] container max-w-[1440px] mx-auto">
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
              styles="bg-[#FFA809] text-sm text-white mr-auto font-medium mx-auto px-2 py-[10px] rounded-lg md:px-6 md:py-4 md:rounded-[20px] ml-auto"
            >
              Watch the Video
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-[80px] md:pb-[200px] px-4 bg-[#FBE0B0]">
        <div className="grid gap-[17.52px] md:gap-[55px] py-[17.52px] md:py-[33.33px] container max-w-[1440px] mx-auto">
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
        <div className="grid gap-10 container max-w-[1440px] mx-auto">
          <Image
            src={featuresPic}
            alt=""
            height={691}
            width={1134.86}
            className="mx-auto relative px-4 -top-[5%] sm:-top-[15%] lg:-top-[18%]"
          />
          {/* <div className="h-[200px] md:h-[420px] lg:h-[491px] max-w-[1134.86px] mx-auto"></div> */}
          <div className="max-w-[1273.33px] mx-auto">
            <h1 className="text-5 md:text-[40px] font-normal leading-[23.97px] md:leading-[47.95px] text-center mb-4">
              Features
            </h1>
            <div className="grid md:grid-cols-3 gap-[18px] md:gap-8 w-full max-w-[995px] mx-auto">
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[60px] h-[60px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] text-6 md:text-[40px] font-bold leading-8 md:leading-[60px]">
                  1
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  Provides a general forum for showcasing work, where users can
                  post, interact, like, save and comment.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[60px] h-[60px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] text-6 md:text-[40px] font-bold leading-8 md:leading-[60px]">
                  2
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  Provides a general forum for showcasing work, where users can
                  post, interact, like, save and comment.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center max-w-[315px] text-center">
                <p className="flex items-center justify-center w-[60px] h-[60px] md:w-[83.33px] md:h-[83.33px] rounded-full bg-[#D9D9D9] text-6 md:text-[40px] font-bold leading-8 md:leading-[60px]">
                  3
                </p>
                <p className="text-center text-xs md:text-base leading-[14.64px] md:leading-8 font-medium">
                  Provides a general forum for showcasing work, where users can
                  post, interact, like, save and comment.
                </p>
              </div>
            </div>
          </div>
          <p className="text-base md:text-[40px] text-center font-medium leading-[19.25px] md:leading-[48.8px] mx-auto">
            and many more... So,
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
            styles="bg-[#FFA809] text-[13.33px] text-white font-medium text-white px-2 py-[10px] rounded-lg md:px-6 md:py-4 md:rounded-[20px] h-14 mx-auto"
          >
            Get started
          </Button>
          <MarqueeDemo />
        </div>
      </section>

      <section className="pt-8 pb-16 px-4 bg-[#FFE4B2]">
        <div className="grid gap-10 container max-w-[1440px] mx-auto">
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
        <div className="max-w-[1250px] mx-auto bg-[#f3f3f3]">
          <ArchNumbers number="3" />
          <h1 className="text-2xl md:text-[53.33px] text-center leading-[48px] md:leading-[106.67px] font-medium mt-5 px-4">
            Our Design Studio
          </h1>
          <div className="w-full max-w-[1226px] h-full pt-[70px] pb-[100px] relative">
            <div className="grid gap-4 mx-auto md:mx-0 max-w-[521px] px-4">
              <h3 className="text-2xl md:text-[2rem] leading-[3rem] md:leading-[4rem] mt-6 z-10">
                Welcome to Our Design Studio
              </h3>
              <p className="text-xs md:text-base leading-6 md:leading-[2rem] z-10">
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
              className="absolute inset-0 h-full"
            />
          </div>
        </div>
        <div className="h-[45px] bg-[#FFDB99]"></div>
        <div className="h-[22.5px] bg-[#FFC966]"></div>
        <div className="h-[22.5px] bg-[#FFA500]"></div>
      </section>
      <footer className="px-4 pt-8 pb-12">
        <div className="max-w-[1250px] mx-auto grid gap-16">
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
                <div className="h-[22.59px] w-[138.06px] bg-[#FFE4B2]"></div>
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
            <ul className="flex flex-col gap-1 mb-5 text-2xl font-medium md:text-base leading-12 md:leading-8 md:font-bold md:mb-0">
              <li>About</li>
              <li>Products</li>
              <li>Home</li>
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
              <Button styles="bg-[#FFA809] text-sm md:text-[13.33px] text-white font-medium text-white px-3 py-5 rounded-[20px] md:px-6 md:py-4 md:rounded-[16.67px] h-14 mx-auto">
                Get updates
              </Button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-between h-[60px]">
            <div className="w-full border-t border-solid border-t-black"></div>
            <p className="text-xs font-medium text-center md:text-base">
              Cpoyright @ 2024 ArchiBuzz Studios LLC. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
