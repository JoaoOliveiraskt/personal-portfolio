import { Socials } from "@/constants";
import Avatar from "./Avatar";
import SocialIcon from "./SocialIcon";
import Presentaion from "./PresentationText";
import { Button } from "../ui/button";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function ProfileHeader() {
    return (
        <div className=" flex flex-col gap-4 med:gap-4 px-4">
        <div className="flex justify-between">
          <a href="/">
            <Button variant="ghost" className="space-x-1">
              <FiArrowLeft />
              <span className="text-primary">Home</span>
            </Button>
          </a>
            <Link href="/profile/curriculo"><Button variant="outline" className="bg-card">Resume</Button></Link>
        </div>
        <div className="flex justify-between items-center med:flex-col med:items-start med:gap-5">
          <div className="flex items-center gap-4">
            <div className="relative overflow-hidden border-2 border-zinc-500 rounded-full w-12 h-12">
              <Avatar
                width={180}
                height={100}
                className="absolute top-0 bottom-0 left-0 right-0 m-auto"
              />
            </div>
            <div className="tracking-wide space-y-1 antialiased">
              <h1 className="text-primary text-sm font-semibold">João Oliveira</h1>
              <p className="text-sm text-text font-light">
                Software Developer
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            {Socials.map((social, index) => (
              <a href={social.link} key={index} target="_blank">
                <SocialIcon
                  name={social.name}
                  Icon={social.icon}
                  hoverColor={social.hoverColor}
                />
              </a>
            ))}
          </div>
        </div>
        <Presentaion className="text-primary  sm:text-sm font-extralight leading-relaxed mx-0 mt-8 med:mt-4" />
      </div>
    )
}