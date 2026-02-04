import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="w-full h-screen flex items-center justify-between bg-slate-700 text-white text-3xl font-bold

"
    >
      <Link href="/shops">Shops</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/mypage">My Page</Link>
      <Link href="/cs">Customer Service</Link>
      <Link href="/_admin">Admin</Link>
    </div>
  );
}
