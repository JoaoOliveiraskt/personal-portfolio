import Link from "next/link";

export default function Profile() {
    return (
        <main className="min-h-screen w-full bg-gray-900">
            <Link href="/profile/curriculo" className="text-white">curriculo</Link>
        </main>
    )
}