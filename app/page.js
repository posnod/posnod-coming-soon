"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Fungsi mengambil inisial dari email
function getInitials(email) {
  if (!email) return "?";
  const name = email.split("@")[0];
  return name
    .split(/[._-]/)
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
}

// Simulasi inisial email
export default function AvatarSimulation() {
  const router = useRouter();
  const pathname = usePathname();

  const [email, setEmail] = useState("");

  const dummyUsers = [
    { email: "agus.susanto@example.com" },
    { email: "rina_putri@example.com" },
    { email: "budi@example.com" },
  ];

  const buttonText =
    pathname === "/about"
      ? "Tentang Posnod"
      : pathname === "/timeline"
      ? "Posnod Timeline"
      : "Apa itu Posnod?";

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const canSubmit = isValidEmail(email);

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      {/* Navbar */}
      <div className="w-full flex justify-center pt-20 bg-[#FBFBFB] pb-4 sm:static md:fixed md:top-0 md:left-0 z-50">
        <button
          onClick={() => router.push("/about")}
          className="flex items-center gap-3 px-2 py-2 rounded-full text-sm border border-gray-300 bg-transpara"
        >
          {/* Logo */}
          <span
            onClick={(e) => {
              e.stopPropagation();
              router.push("/");
            }}
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-black transition hover:scale-110 hover:shadow-sm cursor-pointer"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo Posnod"
              width={16}
              height={16}
            />
          </span>

          {/* Text */}
          <span className="font-[14px] rounded-full px-6 py-2 bg-white transition hover:scale-105 hover:shadow-sm cursor-pointer">
            {buttonText}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="pt-14 md:pt-[200px] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[32px] md:text-[48px] mb-[44px] md:mb-8">
          The Living System
        </h1>

        <p className="text-[#6B6B6B] text-[14px] md:text-[18px] max-w-sm md:max-w-2xl">
          Rasakan cara baru untuk belajar, berkolaborasi, dan berkembang di satu
          tempat.
        </p>

        <p className="text-[#6B6B6B] text-[14px] md:text-[18px] max-w-sm md:max-w-xl mb-[44px] md:mb-8">
          Daftar untuk menjadi yang pertama mencoba Posnod.
        </p>

        {/* Timeline */}
        <div className="flex items-center gap-3 mb-[70px] md:mb-10">
          <span className="text-[#4B3B72] text-[14px] md:text-[16px] select-none">
            Bagaimana Posnod bekerja?
          </span>

          <Link
            href="/timeline"
            className="group inline-flex items-center justify-center rounded-full border border-gray-300 w-10 h-10 cursor-pointer transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/icons/arrow 3.svg"
              alt="arrow"
              width={16}
              height={16}
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </Link>
        </div>

        {/* Form email */}
        <div className="max-w-sm md:max-w-2xl w-full flex flex-col md:flex-row items-center md:items-start justify-start gap-3 md:gap-4 mt-6 md:mt-8">
          {/* Input email */}
          <div className="bg-[#4B3B72]/5 rounded-full pl-6 pr-2 py-2 flex items-center w-full md:w-auto ml-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent text-left flex-1 text-xs md:text-sm min-w-[200px] md:min-w-[250px]"
            />
            {/* Submit button */}
            <button
              disabled={!canSubmit}
              className={
                "w-8 h-8 md:w-9 md:h-9 rounded-full ml-2 md:ml-3 flex items-center justify-center transition-all " +
                (canSubmit
                  ? "bg-[#111] text-white shadow-md hover:scale-110 hover:shadow-lg"
                  : "bg-[#111] text-white opacity-70 cursor-not-allowed")
              }
            >
              <Image
                src="/icons/Proced.svg"
                alt="Submit Icon"
                width={20}
                height={20}
                className="md:w-[24px] md:h-[24px]"
              />
            </button>
          </div>

          {/* Inisial email + text */}
          <div className="flex flex-row items-center md:items-start gap-3 text-left mt-1 ml-4">
            <div className="flex justify-center md:justify-start -space-x-2 mt-[2px]">
              {dummyUsers.slice(0, 2).map((user, i) => (
                <div
                  key={i}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border-[1.5px] border-gray-300 flex items-center justify-center text-[9px] md:text-[11px] font-bold text-gray-700"
                >
                  {getInitials(user.email)}
                </div>
              ))}
            </div>

            <p className="text-[10px] md:hidden text-[#6B6B6B] leading-4 text-left">
              Bergabunglah dengan komunitas pembelajar masa depan
            </p>

            <p className="hidden md:block text-sm text-[#6B6B6B] leading-5">
              Bergabunglah dengan komunitas <br /> pembelajar masa depan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
