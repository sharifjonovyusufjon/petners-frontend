import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-slate-700 text-white text-3xl font-bold

"
    >
      welcome
    </div>
  );
}
