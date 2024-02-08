import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";

export default function HeaderCv() {
  return (
    <header className="bg-neutral-950 max-w-[60rem] border-b border-b-blue-900  px-3 sm:px-3 fixed left-0 right-0 top-0 h-16 m-auto flex items-center">
      <div className="flex items-center space-x-3">
        <Link
          href="/profile"
          className=" hover:bg-[#434343b3] text-white flex items-center justify-center gap-4 w-28  h-9 rounded-xl"
        >
          <FaLongArrowAltLeft className="text-white" />
          Return
        </Link>
        <Link
          href="/"
          className=" hover:bg-[#434343b3] text-white flex items-center justify-center gap-4 w-28  h-9 rounded-xl"
        >
          <HiHome className="text-white" />
          Home
        </Link>
      </div>
    </header>
  );
}
