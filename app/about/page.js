export default function About() {
  return (
    <main className="bg-[#fbfbfb] min-h-screen pb-28 pt-20">

      {/* TITLE */}
      <h1
        className="px-4 text-center font-normal"
        style={{
          fontFamily: "Heme Pro",
          fontSize: "44px",
          fontWeight: 400,
          lineHeight: "120%",
        }}
      >
        Sebuah kisah tentang <br />
        belajar & kebebasan
      </h1>

      {/* PARAGRAPH INTRO */}
      <div className="w-full flex justify-center mt-8 md:mt-10 px-4">
        <div
          className="w-full max-w-[800px] bg-white p-5 md:p-10 rounded-3xl shadow-sm text-gray-700 whitespace-pre-line"
          style={{
            fontFamily: "Heme Pro",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          {`Hai. Kalau kamu membaca ini, kemungkinan besar kamu merasa sama seperti aku—kadang pendidikan itu
            membingungkan, kadang terasa membosankan, kadang malah membuatmu bertanya: “Ini semua untuk siapa?”

            Kamu mungkin ingat duduk di kelas, mengikuti aturan, mengerjakan tugas, menunggu guru atau dosen memberi
            jawaban. Kamu belajar, tapi bukan karena ingin tahu. Kamu belajar karena diminta.

            Dan di era modern, meskipun dunia serba digital, banyak platform “belajar” justru membuatmu merasa terjebak lagi
            dalam aturan lama, tapi dengan desain yang lebih mewah.

            Posnod lahir dari ketidakpuasan itu. Dari pertanyaan: “Kenapa belajar harus ribet? Kenapa harus mengikuti ritme orang
            lain? Kenapa pertanyaan kita kadang tidak dianggap penting?”`}
        </div>
      </div>

      {/* SECTION TITLE 2 */}
      <h2
        className="text-center mt-14 md:mt-24 px-4 font-normal"
        style={{
          fontFamily: "Heme Pro",
          fontSize: "32px",
          fontWeight: 400,
          lineHeight: "32px",
        }}
      >
        Sejarah Pendidikan & Apa yang Terjadi?
      </h2>

      {/* LIST ITEMS */}
      {[
        {
          img: "/images/LP 1.png",
          text: `Pendidikan tradisional awalnya bukan tentang manusia. Itu
          tentang sistem. Tentang mengulang pola, mengukur, menilai,
          dan menyesuaikan individu dengan standar yang sama.`,
        },
        {
          img: "/images/LP 2.png",
          text: `Di zaman Revolusi Industri, sekolah dibuat seperti pabrik:
          disiplin ketat, barisan lurus, suara guru sebagai satu-satunya
          pedoman. Murid berbeda sedikit? Tertinggal. Kreativitas? Sering
          diabaikan.`,
        },
        {
          img: "/images/LP 3.png",
          text: `Abad ke-21 datang dengan janji digital: informasi berlimpah,
          belajar dari mana saja, kapan saja. Tapi kenyataannya? Sistem
          masih kaku, nilai masih menjadi fokus, kurikulum masih
          menuntut keseragaman. Banyak orang belajar di platform
          “modern”, tapi tetap merasa terjebak dalam struktur yang sama.`,
        },
      ].map((item, i) => (
        <div key={i} className="w-full flex justify-center mt-10 md:mt-12 px-4">
          <div
            className="w-full max-w-[800px] bg-white p-5 md:p-10 rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <img
              src={item.img}
              className="w-32 md:w-[210px] rounded-xl mx-auto md:mx-0 object-cover"
              alt=""
            />
            <p
              className="text-gray-700 whitespace-pre-line"
              style={{
                fontFamily: "Heme Pro",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "120%",
              }}
            >
              {item.text}
            </p>
          </div>
        </div>
      ))}

      {/* SECTION TITLE 3 */}
      <h2
        className="text-center mt-20 md:mt-28 px-4 font-normal"
        style={{
          fontFamily: "Heme Pro",
          fontSize: "32px",
          fontWeight: 400,
          lineHeight: "32px",
        }}
      >
        Kemana tujuan kami?
      </h2>

      {/* FINAL PARAGRAPH */}
      <div className="w-full flex justify-center mt-8 md:mt-10 px-4">
        <div
          className="w-full max-w-[800px] bg-white p-5 md:p-10 rounded-3xl shadow-sm text-gray-700 whitespace-pre-line"
          style={{
            fontFamily: "Heme Pro",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          {`Dan dari kesadaran itu, Posnod lahir. Bukan dari sekedar ide besar, tapi dari kegelisahan yang pelan-pelan tumbuh di
          hati banyak orang yang masih percaya: Pendidikan seharusnya lebih manusiawi dari ini. Kami ingin keluar dari sistem
          yang sejak awal memang tidak dirancang untuk menumbuhkan kami, sistem yang membuat belajar terasa jauh dari
          maknanya. Posnod hadir bukan sekedar alternatif, tapi sebagai ruang baru untuk membayangkan kembali arti belajar,
          yang hidup, membebaskan, dan membuat manusia tumbuh.

          Sebagai langkah awal kami meramu banyak cara belajar ke dalam satu ruang. Mau eksplorasi ilmu baru?
          Mendalami hal-hal yang membangkitkan rasa ingin tahu? atau sekedar berdiskusi untuk memahami kehidupan? Semuanya bisa dimulai dari sini. Bahkan kamu bisa merangkai cara belajarmu sendiri, bebas layaknya menyusun
          potongan puzzle, tanpa batasan silabus, tanpa aturan kaku.`}
        </div>
      </div>

    </main>
  );
}
