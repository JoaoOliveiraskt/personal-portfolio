import HandleOnMouseMove from "@/utils/hoverEffect";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import RadialGradient from "../ui/radial-gradient";
import CardBg from "../ui/card-background";
interface Props {
  icon: JSX.Element;
  text: string;
  description: string;
  url: string;
  className: string;
}

export default function ContactCard({
  icon,
  text,
  description,
  url,
  className,
}: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState("");

  const handleCopy = (copyText: string) => {
    setCopied(copyText);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setCopied(""), 3000);
  };

  const cardContent = (
    <div className={`flex flex-col h-full justify-between ${className}`}>
      <div className="flex flex-col h-full justify-between">
        <div className="w-12 h-12 z-10 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
          {icon}
        </div>
        <div className="flex flex-col space-y-3">
          <span className="font-semibold">{description}</span>
          <div className="flex flex-wrap gap-2 items-center">
            {!text.includes("joaoliveiraam@gmail.com") ? (
              <span
              title={description}
              className="text-xl text-muted-foreground z-20 hover:text-blue-500">
                {text}
              </span>
            ) : (
              <button 
              title="copiar e-mail"
              onClick={() => handleCopy(text)}
              className="flex items-center justify-center gap-1 text-muted-foreground hover:text-blue-500">
                <span className="text-xl z-20 ">
                  {text}
                </span>
                <div
                  className="flex items-center justify-center p-1 rounded-lg border hover:bg-accent "
                  
                >
                  {copied ? (
                    <FaCheckCircle />
                  ) : (
                    <MdContentCopy className="z-20" />
                  )}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
      className="p-[1px] relative flex flex-col h-full w-full justify-between med:col-span-3 rounded-xl dark:bg-gradient-to-bl from-zinc-100/20 to-zinc-300/5"
    >
      <div
        className={
          "rounded-xl p-4 relative h-[10rem]  bg-gradient-to-bl from-card to-background border border-zinc-200 dark:border-none overflow-x-hidden shadow-sm dark:shadow-none"
        }
      >
        {url ? (
          <a href={url} target="_blank">
            {cardContent}
          </a>
        ) : (
          <div className="h-full">{cardContent}</div>
        )}
      </div>
      <CardBg />
      <RadialGradient
        className="absolute inset-0"
        mousePosition={mousePosition}
      />
    </div>
  );
}
