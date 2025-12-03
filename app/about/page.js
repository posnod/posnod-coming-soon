"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function AboutPage() {
  const router = useRouter();
  const pathname = usePathname();

  const buttonText =
    pathname === "/about" ? "Tentang Posnod" : "Apa itu Posnod?";

  return (
    <div className="w-full min-h-screen bg-[#FBFBFB]">

      {/* Navbar */}
      <div className="w-full flex justify-center pt-20 bg-[#FBFBFB] pb-4">
        <button
          onClick={() => router.push("/about")}
          className="flex items-center gap-3 px-2 py-2 rounded-full text-sm border border-gray-300 bg-transparent"
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
              alt="Logo Posnod"
              width={16}
              height={16}
            />
          </span>

          {/* Text */}
          <span
            className="font-[14px] rounded-full px-6 py-2
            bg-white transition hover:scale-105 hover:shadow-sm cursor-pointer"
          >
            {buttonText}
          </span>
        </button>
      </div>

      {/* About content */}
      <div className="pt-0 md:pt-0 w-full min-h-screen bg-[#FBFBFB]">

        {/* Wrapper */}
        <div
          className="w-full bg-[#FBFBFB] flex flex-col items-center justify-center 
          mt-10 px-6 sm:px-10 md:px-0 lg:px-[240px]"
        >
          {/* Header */}
          <h1
            className="text-[28px] sm:text-[38px] md:text-4xl font-normal 
            mb-16 sm:mb-[90px] text-center leading-snug"
          >
            Sebuah kisah tentang <br /> belajar & kebebasan
          </h1>

          {/* Intro Card */}
          <div
            className="bg-white border border-gray-200 rounded-2xl 
            p-6 sm:p-10 md:p-14 text-[14px] sm:text-[15px] 
            max-w-4xl text-left text-gray-700 leading-relaxed 
            mb-24 sm:mb-36"
          >
            <p>
              Hai. Kalau kamu membaca ini, kemungkinan besar kamu merasa sama
              seperti aku—kadang pendidikan itu membingungkan, kadang terasa
              membosankan, kadang malah membuatmu bertanya: "Ini semua untuk
              siapa?"
            </p>
            <p className="mt-3">
              Kamu mungkin ingat duduk di kelas, mengikuti aturan, mengerjakan
              tugas, menunggu guru atau dosen memberi jawaban. Kamu belajar,
              tapi bukan karena ingin tahu. Kamu belajar karena diminta.
            </p>
            <p className="mt-3">
              Dan di era modern, meskipun dunia serba digital, banyak platform
              "belajar" justru membuatmu merasa terjebak lagi dalam aturan lama,
              tapi dengan desain yang lebih mewah.
            </p>
            <p className="mt-3">
              Posnod lahir dari ketidakpuasan itu. Dari pertanyaan: "Kenapa
              belajar harus ribet? Kenapa harus mengikuti ritme orang lain?
              Kenapa pertanyaan kita kadang tidak dianggap penting?"
            </p>
          </div>

          {/* Section Title */}
          <h2
            className="text-[24px] sm:text-[32px] md:text-3xl font-normal 
            mb-8 sm:mb-12 text-center"
          >
            Sejarah Pendidikan & Apa yang Terjadi?
          </h2>

          {/* Cards Section */}
          <div
            className="flex flex-col gap-4 sm:gap-6 w-full max-w-4xl 
            px-2 md:px-0 mt-10 sm:mt-24 md:mt-0"
          >
            {/* Card 1 */}
            <div
              className="bg-white border border-gray-200 rounded-2xl 
              px-4 py-6 sm:px-6 sm:py-4 md:px-14 
              flex flex-col md:flex-row items-center md:items-start 
              gap-6 sm:gap-10 md:gap-[85px] text-left transition"
            >
              <img
                src="/images/IL1.png"
                alt="Education Illustration"
                className="w-64 sm:w-52 md:w-64 object-contain"
              />

              <div className="flex items-center h-auto sm:h-64">
                <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[16px] md:text-base">
                  Pendidikan tradisional awalnya bukan tentang manusia. Itu
                  tentang sistem. Tentang mengulang pola, mengukur, menilai, dan
                  menyesuaikan individu dengan standar yang sama.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white border border-gray-200 rounded-2xl 
              px-4 py-6 sm:px-6 sm:py-4 md:px-14 
              flex flex-col md:flex-row items-center md:items-start 
              gap-6 sm:gap-10 md:gap-[85px] text-left transition"
            >
              <img
                src="/images/IL2.png"
                alt="Education Illustration"
                className="w-64 sm:w-48 md:w-64 object-contain"
              />

              <div className="flex items-center h-auto sm:h-64">
                <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[16px] md:text-base">
                  Di zaman Revolusi Industri, sekolah dibuat seperti pabrik:
                  disiplin ketat, barisan lurus, suara guru sebagai satu-satunya
                  pedoman. Murid berbeda sedikit? Tertinggal. Kreativitas? Sering
                  diabaikan.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white border border-gray-200 rounded-2xl 
              px-4 py-6 sm:px-6 sm:py-4 md:px-14 
              flex flex-col md:flex-row items-center md:items-start 
              gap-6 sm:gap-10 md:gap-[85px] text-left transition"
            >
              <img
                src="/images/IL3.png"
                alt="Education Illustration"
                className="w-64 sm:w-48 md:w-64 object-contain"
              />

              <div className="flex items-center h-auto sm:h-64">
                <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[16px] md:text-base">
                  Abad ke-21 datang dengan janji digital: informasi berlimpah,
                  belajar dari mana saja, kapan saja. Tapi kenyataannya? Sistem
                  masih kaku, nilai masih menjadi fokus, kurikulum masih
                  menuntut keseragaman.
                </p>
              </div>
            </div>
          </div>

          {/* Final Section */}
          <h2 className="text-[24px] sm:text-3xl font-normal mt-16 sm:mt-20 mb-8 sm:mb-10 text-center">
            Kemana tujuan kami?
          </h2>

          <div
            className="bg-white border border-gray-200 
            text-[14px] sm:text-[16px] 
            rounded-2xl p-6 sm:p-10 md:p-14 
            max-w-4xl text-left text-gray-700 leading-relaxed 
            mb-24 sm:mb-32"
          >
            <p>
              Dan dari kesadaran itu, Posnod lahir. Bukan dari sekedar ide besar,
              tapi dari kegelisahan yang pelan-pelan tumbuh di hati banyak orang
              yang masih percaya: Pendidikan seharusnya lebih manusiawi dari ini.
              Kami ingin keluar dari sistem yang sejak awal memang tidak dirancang
              buat kami, sistem yang membuat belajar terasa jauh dari maknanya.
              Posnod hadir bukan hanya sekedar alternatif, tapi sebagai ruang baru
              untuk membayangkan kembali arti belajar. Yang hidup, membebaskan, dan
              membuat manusia tumbuh.
              </p>

            <p className="mt-3">
              Sebagai langkah awal kami meramu banyak cara belajar ke dalam satu
              ruang. Mau eksplorasi ilmu baru? Mendalami hal yang membangkitkan
              rasa ingin tahu? Atau sekadar berdiskusi untuk memahami kehidupan?
              Semuanya bisa dimulai dari sini. Bahkan kamu bisa merangkai cara belajarmu
              sendiri, bebas layaknya menyusun potongan puzzle, tanpa batasan silabus,
              dan tanpa aturan kaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
