import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center content-center border-4 py-3 px-8 border-white border-solid">
            <p className="text-3xl tracking-wider uppercase font-medium text-white">Lisa</p>
        </Link>
    )
}