"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mid1 from "../../../../public/images/ai/mid-1.png";
import mid2 from "../../../../public/images/ai/mid-2.png";
import mid3 from "../../../../public/images/ai/mid-3.png";
import mid4 from "../../../../public/images/ai/mid-4.png";
import prome1 from "../../../../public/images/ai/prome-1.png";
import prome2 from "../../../../public/images/ai/prome-2.png";
import prome3 from "../../../../public/images/ai/prome-3.png";

interface AiTool {
  title: string;
  description: string;
  imageUrl: StaticImageData[];
}

export const mockAiToolDescription: AiTool[] = [
  {
    title: "Midjourney AI",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [mid1, mid2, mid4, mid3],
  },
  {
    title: "Flux AI",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [prome1, prome2, mid4, prome3],
  },
  {
    title: "LookX AI",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [mid1, mid2, mid4, mid3],
  },
  {
    title: "Prome AI",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [prome1, prome2, mid4, prome3],
  },
  {
    title: "GPT",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [mid1, mid2, mid4, mid3],
  },
  {
    title: "GPT 4.1",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [prome1, prome2, mid4, prome3],
  },
  {
    title: "GPT",
    description:
      "With its ability to produce photorealistic renderings and abstract interpretations, Midjourney AI enhances the creative process, enabling architects to experiment with new concepts, refine their ideas, and present compelling visuals to clients and stakeholders.",
    imageUrl: [mid1, mid2, mid4, mid3],
  },
];

export async function fetchAiTool(): Promise<AiTool[] | undefined> {
  try {
    const response = await fetch("htyvfff");
    console.log(response);
    if (!response.ok) {
      return mockAiToolDescription;
    }
    const data: AiTool[] = await response.json();
    return data;
  } catch {
    return mockAiToolDescription;
  }
}

const AiToolDescription = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTool, setSelectedTool] = useState(0);
  const [isError, setIserror] = useState<string | undefined>(undefined);
  const [aiToolDescription, setAiToolDescription] = useState<AiTool[]>();
  const isActive = "border-l-4 border-solid border-l-[#FFA500] bg-[#FFE4B2]";

  useEffect(() => {
    const getTools = async () => {
      const aiToolDescription = await fetchAiTool();

      if (!aiToolDescription) {
        setIserror("yep error");
        setIsLoading(true);
        return;
      }
      setIsLoading(false);
      setAiToolDescription(aiToolDescription);
    };
    getTools();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-[53px] max-w-7xl mx-auto pt-3 pb-8 bg-[#F6F5F5] rounded-[16.67px]">
      <div className="grid gap-[16.67px] max-w-full sm:max-w-[416.67px] w-full">
        <h1 className="text-[1.5rem] md:text-[2.5rem] text-center leading-[29.28px] md:leading-[48.8px]">
          AI Tools
        </h1>
        <ul className="">
          {isLoading || (isError && <div>skeleton loader</div>)}
          {aiToolDescription &&
            aiToolDescription.map((ai, index) => (
              <li
                key={index}
                className={`text-xs md:text-base text-center leading-6 md:leading-8 font-medium p-[16.67px] cursor-pointer border-l-4 hover:bg-[#FFE4B2] transition ease duration-100ms ${selectedTool === index ? isActive : ""
                  }`}
                onClick={() => {
                  setSelectedTool(index);
                }}
              >
                {ai.title}
              </li>
            ))}
        </ul>
      </div>
      {isLoading || (isError && <div>skeleton loader</div>)}
      {aiToolDescription && (
        <div className="max-w-[744px] w-full pt-3 px-4">
          <h1 className="text-[1.5rem] md:text-[2.5rem] leading-[29.28px] md:leading-12 font-medium mb-5">
            {aiToolDescription[selectedTool].title}
          </h1>
          <p className="text-xs md:text-base text-[#808080] leading-6 md:leading-8 font-medium mb-10">
            {aiToolDescription[selectedTool].description}
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4">
            <Image
              alt="i don comr"
              src={aiToolDescription[selectedTool].imageUrl[0]}
              width={211}
              height={326}
              objectFit="cover"
              className="row-span-1 col-span-2 sm:row-span-2 sm:col-span-1 order-2 sm:order-1 w-full h-full max-h-[154px] sm:max-h-full"
            />
            <Image
              alt="i don comr"
              src={aiToolDescription[selectedTool].imageUrl[1]}
              width={233}
              height={153}
              objectFit="cover"
              className="order-1 sm:order-2 w-full h-full max-h-[154px] sm:max-h-full"
            />
            <Image
              alt="i don comr"
              src={aiToolDescription[selectedTool].imageUrl[2]}
              width={233}
              height={153}
              objectFit="cover"
              className="col-span-2 sm:col-span-1 order-4 sm:order-3 w-full h-full max-h-[154px] sm:max-h-full"
            />
            <Image
              alt="i don comr"
              src={aiToolDescription[selectedTool].imageUrl[3]}
              width={496}
              height={153}
              objectFit="cover"
              className="col-span-1 sm:col-span-2 order-3 sm:order-4 w-full h-full max-h-[154px] sm:max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AiToolDescription;
