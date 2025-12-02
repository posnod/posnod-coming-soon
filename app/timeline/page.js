"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Discover",
    desc: "Menemukan ide, topik, dan perspektif baru lewat alur sosial yang hidup",
    img: "/timeline/Discover.svg",
  },
  {
    title: "Connect",
    desc: "Berinteraksi dengan orang yang selaras dan membangun ruang belajar yang aman",
    img: "/timeline/Connect.svg",
  },
  {
    title: "Observe",
    desc: "Melihat bagaimana orang lain berpikir, menyusun, dan membangun pengetahuan",
    img: "/timeline/Observe.svg",
  },
  {
    title: "Learn",
    desc: "Menangkap inti dari sebuah konsep percakapan, contoh, dan praktik kecil",
    img: "/timeline/Learn.svg",
  },
  {
    title: "Create",
    desc: "Mengubah pemahaman menjadi karya, proyek atau eksperimen sederhana",
    img: "/timeline/Create.svg",
  },
  {
    title: "Share",
    desc: "Membagikan prosesmu untuk menginspirasi dan membuka ruang diskusi baru",
    img: "/timeline/Share.svg",
  },
  {
    title: "Reflect",
    desc: "Mengamati pola perjalananmu, mengetahui apa yang bekerja dan apa yang tidak",
    img: "/timeline/Reflect.svg",
  },
  {
    title: "Grow",
    desc: "Mengembangkan cara belajar pribadi, memperluas jaringan, dan membangun kompetensi",
    img: "/timeline/Grow.svg",
  },
];

export default function TimelineSection() {
  const router = useRouter();
  const buttonText = "Posnod Timeline";

  return (
    <section className="w-full min-h-screen bg-[#FBFBFB]">
      {/* Navbar */}
      <div className="w-full flex justify-center pt-20 bg-[#FBFBFB] pb-4 sm:static z-40">
        <div className="flex items-center gap-3 px-2 py-2 rounded-full text-sm border border-gray-300 bg-transpara">

          <span
            onClick={() => router.push("/")}
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-black transition hover:scale-110 hover:shadow-sm cursor-pointer"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo Posnod"
              width={16}
              height={16}
            />
          </span>

          <span className="font-[14px] rounded-full px-6 py-2 bg-white transition hover:scale-105 hover:shadow-sm cursor-default">
            {buttonText}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full py-14 px-6 md:px-10 lg:px-20">
        <h2 className="text-[28px] sm:text-[38px] md:text-4xl font-normal mb-16 sm:mb-[90px] text-center">
          Arsitektur pembelajaran sosial
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-200 py-14 px-6 flex flex-col items-start"
            >
              <div className="w-full flex justify-center mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={433}
                  height={244}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-normal text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
