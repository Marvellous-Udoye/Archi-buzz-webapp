"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: ReactNode;
  duration?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration = 50,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState<ReactNode>(text);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const plainText = typeof text === "string" ? text : convertReactNodeToString(text);

    let currentIndex = 0;

    const typingEffect = setInterval(() => {
      if (currentIndex < plainText.length) {
        setDisplayedText(plainText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingEffect);
        setIsTyping(false);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [text, duration]);

  return (
    <h1 className={cn("min-h-[96px] lg:h-full font-display text-center text-4xl font-bold leading-[5rem]", className)}>
      {isTyping ? displayedText : text}
    </h1>
  );
};

const convertReactNodeToString = (node: ReactNode): string => {
  if (typeof node === "string") {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(convertReactNodeToString).join("");
  }
  if (typeof node === "object" && node !== null && "props" in node) {
    return convertReactNodeToString(node.props.children);
  }
  return "";
};

export default TypingAnimation;
