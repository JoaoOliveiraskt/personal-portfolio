import Image from "next/image";
import featureCover from "@/public/icons/feature-cover.svg";

interface CardBgProps {
  className?: string;
}

export default function CardBg({ className }: CardBgProps) {
  return (
    <Image
      src={featureCover}
      alt="feature-cover"
      className={`absolute inset-0 ${className} hidden dark:block object-cover w-full h-full`}
    />
  );
}
