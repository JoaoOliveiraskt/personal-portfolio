import Link from "next/link";
import BentoLayout from "@/components/main/BentoLayout";

export default function Profile() {
    return (
        <main className="min-h-screen w-full p-10 sm:p-4 space-y-32 sm:pt-10 space-x-4  sm:space-x-0">
           <header className="z-50 bg-black max-w-[71rem] border-b border-b-blue-900  px-3 sm:px-3 fixed left-0 right-0 top-0 h-16 m-auto flex items-center space-x-5">
           <Link href="/profile/curriculo" className="text-white text-center">curriculo</Link>
            <Link href="/" className="text-white text-center">Home</Link>
           </header>

            <BentoLayout/>
        </main>
    )
}