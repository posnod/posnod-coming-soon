"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const buttonText = pathname === "/about" ? "Tentang Posnod" : "Apa itu Posnod?";

  const navClass =
    pathname === "/"
      ? "fixed top-0 left-0 z-50"
      : "static";

  return (
    <div className={`w-full flex justify-center pt-10 bg-[#FBFBFB] pb-4 ${navClass}`}>
      <button
        onClick={() => router.push("/about")}
        className="flex items-center gap-3 px-6 py-3 rounded-full text-sm bg-white border border-gray-300 shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:bg-white transition"
      >
        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center p-2">
          <Image src="/images/butterfly.png" alt="Butterfly Icon" width={20} height={20} />
        </span>

        <span className="font-medium border border-gray-300 rounded-full px-2 py-2">
          {buttonText}
        </span>
      </button>
    </div>
  );
}
