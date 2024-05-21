import Image from "next/image"
import featureCover from "@/public/feature-cover.svg"

interface CardBgProps {
    className?: string
}

export default function CardBg({className}: CardBgProps) {
    return (
        <Image src={featureCover} alt="feature-cover" layout="fill" objectFit="cover" className={`absolute inset-0 ${className}`}/>
    )
}