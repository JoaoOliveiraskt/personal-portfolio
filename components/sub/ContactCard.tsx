import HandleOnMouseMove from "@/utils/hoverEffect";
import { useState } from "react";

interface Props {
  icon: JSX.Element;
  text: string;
  description: string;
}

export default function ContactCard({ icon, text, description }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
      className="relative med:col-span-3 bg-card rounded-xl p-8 border border-zinc-200 dark:border-zinc-700 overflow-x-hidden"
    >
      <div className="flex flex-col h-full  justify-between">
        <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
          {icon}
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-xl flex flex-wrap z-50">{text}</span>
          <span className="font-semibold z-50">{description}</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.07), transparent)`,
          }}
        ></div>
      </div>
    </div>
  );
}
