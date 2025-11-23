'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function LandingPage({ users = [] }) {
  const [email, setEmail] = useState("");

  const getInitials = (email) => {
    if (!email) return "?";
    const name = email.split("@")[0];
    return name
      .split(/[._]/)
      .map((part) => part[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const canSubmit = isValidEmail(email);

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          The Living System
        </h1>

        <p className="text-gray-600 max-w-xl mb-2">
          Rasakan cara baru belajar, kolaborasi, dan berkembang, di satu tempat
        </p>

        <p className="text-gray-600 max-w-xl mb-8">
          Daftar untuk menjadi yang pertama mencoba Posnod
        </p>

        <a
          href="#"
          className="text-[#4B3B72] text-lg font-medium mb-10 block no-underline outline-none focus:underline"
        >
          Dapatkan Early Access
        </a>

        {/* FORM EMAIL */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white border border-gray-200 shadow-sm rounded-full px-6 py-3 flex items-center w-full md:w-auto">
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none flex-1 text-sm"
            />

            <button
              disabled={!canSubmit}
              className={
                "w-10 h-10 rounded-full ml-3 text-lg leading-none flex items-center justify-center transition-all " +
                (canSubmit
                  ? "bg-[#3f3066] text-white shadow-md hover:scale-110 hover:shadow-lg"
                  : "bg-[#4B3B72] text-white opacity-50 cursor-not-allowed")
              }
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="flex -space-x-3">
              {users.slice(0, 2).map((user, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border bg-gray-200 flex items-center justify-center text-sm font-semibold shadow-lg"
                >
                  {getInitials(user.email)}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-600">
              Bergabunglah dengan komunitas <br /> pembelajar masa depan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
