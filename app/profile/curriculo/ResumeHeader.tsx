import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "../../../components/ui/button";

export default function ResumeHeader() {
  return (
    <header className="max-w-[60rem]  px-3 fixed left-0 right-0 top-0 h-16 m-auto flex items-center">
      <div className="w-full flex items-center space-x-3 justify-between">
        <Link href="/profile">
          <Button
            variant={"ghost"}
            className="text-primary flex items-center justify-center gap-4 sm:gap-2 px-4 sm:px-1 rounded-xl"
          >
            <FaLongArrowAltLeft />
            <span>Perfil</span>
          </Button>
        </Link>
        <div className="flex items-center space-x-3 ">
          <Link href="/">
            <Button
              variant={"ghost"}
              className="text-primary flex items-center justify-center gap-4 sm:gap-2 px-4 sm:px-1 rounded-xl"
            >
              <HiHome className="text-primary" />
              <span className="text-primary">Início</span>
            </Button>
          </Link>
          <a href="/CurriculoJoaoVictorOliveira.pdf" download={true}>
            <Button
              variant={"ghost"}
              className="text-primary flex items-center justify-center gap-4 sm:gap-2 px-4 sm:px-1 rounded-xl"
            >
              <IoCloudDownloadOutline className="text-primary" />
              <span className="text-primary">Download</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
