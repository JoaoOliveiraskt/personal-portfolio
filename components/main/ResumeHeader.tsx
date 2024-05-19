import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function ResumeHeader() {
  return (
    <header className="max-w-[60rem]  px-3 fixed left-0 right-0 top-0 h-16 m-auto flex items-center">
      <div className="w-full flex items-center space-x-3 justify-between">
        <Link
          href="/profile"
          className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-4 w-ful px-4 sm:px-1  h-9 rounded-xl"
        >
          <FaLongArrowAltLeft className="text-primary" />
          <span>Perfil</span>
        </Link>
        <div className="flex items-center space-x-3 ">
          <Link
            href="/"
            className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-1 w-ful px-4 sm:px-1 h-9 rounded-xl"
          >
            <HiHome className="text-primary" />
            <span className="text-primary">Início</span>
          </Link>
          <a
            href="/CurriculoJoaoVictorOliveira.pdf"
            download={true}
            className=" hover:bg-[#434343b3] text-primary flex items-center justify-center gap-2 w-ful px-4 sm:px-1 h-9 rounded-xl"
          >
            <IoCloudDownloadOutline className="text-primary" />
            <span className="text-primary">Download</span>
          </a>
        </div>
      </div>
    </header>
  );
}
