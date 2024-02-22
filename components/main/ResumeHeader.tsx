import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function HeaderCv() {
  return (
    <header className="bg-card max-w-[60rem]  px-3 sm:px-3 fixed left-0 right-0 top-0 h-16 m-auto flex items-center">
      <div className="w-full flex items-center space-x-3 justify-between">
        <Link
          href="/profile"
          className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-4 w-ful px-4  h-9 rounded-xl"
        >
          <FaLongArrowAltLeft className="text-primary" />
          <span>Return</span>
        </Link>
        <div className="flex items-center space-x-3">
        <Link
          href="/"
          className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-4 w-ful px-4  h-9 rounded-xl"
        >
          <HiHome className="text-primary" />
          <span className="text-primary">Home</span>
        </Link>
        <a
          href="/CurriculoJoaoVictorOliveira.pdf"
          download={true}
          className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-4 w-ful px-4  h-9 rounded-xl"
        >
          <IoCloudDownloadOutline className="text-primary"/>
          <span className="text-primary">Download </span>
        </a>
        </div>
      </div>
    </header>
  );
}
