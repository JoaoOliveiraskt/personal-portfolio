import HandleOnMouseMove from "@/utils/hoverEffect";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
interface Props {
  icon: JSX.Element;
  text: string;
  description: string;
  url: string;
  className: string;
}

export default function ContactCard({ icon, text, description, url, className }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState("");

  const handleCopy = (copyText: string) => {
    setCopied(copyText);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setCopied(""), 3000);
  };

  const cardContent = (
    <div
      onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
      className={`flex flex-col h-full justify-between ${className}`}

    >
      <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
        {icon}
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xl flex flex-wrap z-50 hover:text-blue-500">
            {text}
          </span>
          {text.includes("joaoliveiraam@gmail.com") && (
            <button
              className="flex items-center justify-center p-1 rounded-lg border hover:bg-accent"
              onClick={() => handleCopy(text)}
            >
              {copied ? <FaCheckCircle /> : <MdContentCopy className="z-50" />}
            </button>
          )}
        </div>
        <span className="font-semibold">{description}</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent)`,
        }}
      ></div>
    </div>
  );
  return (
    <div className={("relative med:col-span-3 bg-card rounded-xl p-4 border border-zinc-200 dark:border-zinc-700 overflow-x-hidden shadow-md")
    }>
      {url ? (
        <a href={url} target="_blank">
          {cardContent}
        </a>
      ) : (
        <div className="h-full">{cardContent}</div>
      )}
    </div>
  );
}
