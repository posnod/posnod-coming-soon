"use client";

import { useEffect, useState } from "react";
import EmailBox from "@/components/EmailBox";

export default function Home() {
  const [email, setEmail] = useState(null);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
      setEmail(storedEmail);

      const raw = storedEmail.split("@")[0];

      const parts = raw.split(".");
      let ini = "";

      if (parts.length > 1) {
        ini = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
      } else {
        ini = raw[0].toUpperCase();
      }

      setInitials(ini);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#FBFBFB] text-center pt-20 overflow-hidden px-4 font-hemera">
      <div className="mt-20 md:mt-24 max-w-2xl mx-auto">
        
        {/* TITLE */}
        <h1
          className="font-normal text-center"
          style={{
            fontFamily: "Heme Pro",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "36px",
          }}
        >
          The Living System
        </h1>

        {/* DESCRIPTION */}
        <p
          className="mt-4 md:mt-6 text-center px-2 md:px-0"
          style={{
            fontFamily: "Heme Pro",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "140%",
          }}
        >
          Rasakan cara baru untuk belajar, berkolaborasi, dan berkembang di satu tempat.
          <br className="hidden md:block" />
          Daftar untuk menjadi yang pertama mencoba Posnod.
        </p>

        {/* BUTTON TEXT */}
        <a
          href="#"
          className="block mt-10 md:mt-6 text-purple-700 font-medium no-underline active:underline text-center"
          style={{
            fontFamily: "Heme Pro",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "160%",
          }}
        >
          Dapatkan Early Access
        </a>

        {/* EMAIL + USER */}
        <div
          className="mt-6 flex flex-col items-center justify-center md:flex-row md:gap-6">
          {/* EMAIL BOX */}
          <div className="w-full max-w-xs md:max-w-none md:w-auto">
            <EmailBox />
          </div>

          {/* USER SECTION */}
          {email && (
            <div
              className="
                flex items-center gap-3 mt-4
                md:mt-0 md:ml-4
              "
            >
              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-sm font-semibold">
                {initials}
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-xs md:text-sm w-40 md:w-48 leading-tight text-left">
                Bergabunglah dengan komunitas pembelajar masa depan
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
