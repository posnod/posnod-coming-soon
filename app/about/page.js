'use client';

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#FBFBFB]">
      <Navbar />
      <div className="w-full bg-[#FBFBFB] flex flex-col items-center justify-center mt-10">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Sebuah kisah tentang <br /> belajar & kebebasan
        </h1>

        {/* Intro Card */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 max-w-3xl text-left text-gray-700 leading-relaxed mb-20">
          <p>
            Hai. Kalau kamu membaca ini, kemungkinan besar kamu merasa sama seperti aku—kadang pendidikan itu
            membingungkan, kadang terasa membosankan, kadang malah membuatmu bertanya: "Ini semua untuk siapa?"
          </p>
          <br />
          <p>
            Kamu mungkin ingat duduk di kelas, mengikuti aturan, mengerjakan tugas, menunggu guru atau dosen memberi
            jawaban. Kamu belajar, tapi bukan karena ingin tahu. Kamu belajar karena diminta.
          </p>
          <br />
          <p>
            Dan di era modern, meskipun dunia serba digital, banyak platform "belajar" justru membuatmu merasa terjebak
            lagi dalam aturan lama, tapi dengan desain yang lebih mewah.
          </p>
          <br />
          <p>
            Posnod lahir dari ketidakpuasan itu. Dari pertanyaan: "Kenapa belajar harus ribet? Kenapa harus mengikuti
            ritme orang lain? Kenapa pertanyaan kita kadang tidak dianggap penting?"
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Sejarah Pendidikan & Apa yang Terjadi?
        </h2>

        {/* Cards Section */}
        <div className="flex flex-col gap-10 w-full max-w-4xl">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-left">
            <img src="/images/LP 1.png" alt="Education Illustration" className="w-40" />
            <p className="text-gray-700 leading-relaxed">
              Pendidikan tradisional awalnya bukan tentang manusia. Itu tentang sistem. Tentang mengulang pola,
              mengukur, menilai, dan menyesuaikan individu dengan standar yang sama.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-left">
            <img src="/images/LP 2.png" alt="Industrial Revolution" className="w-40" />
            <p className="text-gray-700 leading-relaxed">
              Di zaman Revolusi Industri, sekolah dibuat seperti pabrik: disiplin ketat, barisan lurus, suara guru sebagai
              satu-satunya pedoman. Murid berbeda sedikit? Tertinggal. Kreativitas? Sering diabaikan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-left">
            <img src="/images/LP 3.png" alt="Modern Problems" className="w-40" />
            <p className="text-gray-700 leading-relaxed">
              Abad ke-21 datang dengan janji digital: informasi berlimpah, belajar dari mana saja, kapan saja. Tapi
              kenyataannya? Sistem masih kaku, nilai masih menjadi fokus, kurikulum masih menuntut keseragaman. Banyak orang
              belajar di platform "modern", tapi tetap merasa terjebak dalam struktur yang sama.
            </p>
          </div>
        </div>

        {/* Final Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-20 mb-10">Kemana tujuan kami?</h2>

        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 max-w-3xl text-left text-gray-700 leading-relaxed mb-32">
          <p>
            Dan dari kesadaran itu, Posnod lahir. Bukan dari sekedar ide besar, tapi dari kegelisahan yang pelan-pelan tumbuh di
            hati banyak orang yang masih percaya: Pendidikan seharusnya lebih manusiawi dari ini. Kami ingin keluar dari sistem yang sejak awal memang tidak dirancang untuk menumbuhkan kami, sistem yang membuat
            belajar terasa jauh dari maknanya. Posnod hadir bukan sekadar alternatif, tapi sebagai ruang baru untuk membayangkan
            kembali arti belajar, yang hidup, membebaskan, dan membuat manusia tumbuh.
          </p>
          <br />
          <p>
            Sebagai langkah awal kami meramu banyak cara belajar ke dalam satu ruang. Mau eksplorasi ilmu baru? Mendalami hal
            yang membangkitkan rasa ingin tahu? Atau sekadar berdiskusi untuk memahami kehidupan? Semuanya bisa dimulai dari sini. Bahkan kamu bisa merangkai cara belajarmu sendiri, bebas layaknya menyusun potongan puzzle, tanpa batasan silabus,
            tanpa aturan kaku.
          </p>
        </div>
      </div>
    </div>
  );
}
