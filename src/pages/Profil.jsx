import React from 'react';
import { Facebook, Instagram, Award, BookOpen, Users } from 'lucide-react';

export default function Profil() {
  const facilities = [
    { id: 1, name: 'Perpustakaan & Lab', image: 'img/fas1.jpeg' },
    { id: 2, name: 'Mushola', image: 'img/fas2.jpeg' },
    { id: 3, name: 'Perpustakaan & Lab', image: 'img/fas3.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Half Screen */}
      <section
        className="relative w-full h-64 bg-center bg-cover md:h-96"
        style={{
          backgroundImage: 'url(img/homepage.jpeg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 text-center text-white">
            <div className="inline-block px-4 py-2 mb-4 border rounded-full bg-teal-400/20 border-teal-300/50">
              <span className="text-sm font-semibold text-teal-100">PROFIL SEKOLAH</span>
            </div>
            <h1 className="mb-3 text-4xl font-bold md:text-6xl">Profil Sekolah</h1>
            <p className="text-lg md:text-xl text-teal-50">Mengenal Lebih Dekat SMK Mt Kalijaga Timur</p>
          </div>
        </div>
      </section>

      {/* Kepala Sekolah Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            {/* Foto Kepala Sekolah */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute transition duration-300 opacity-25 -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur group-hover:opacity-75"></div>
                <div className="relative">
                  <img
                    src="/img/kepal.jpeg"
                    alt="Kepala Sekolah"
                    className="object-cover border-4 border-white shadow-2xl rounded-xl w-80 h-96"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-xl bg-gradient-to-t from-teal-900 via-teal-800/80 to-transparent">
                    <p className="text-xl font-bold text-white">M. Syamsul Khaeri Pratama, M.Pd.</p>
                    <p className="text-sm font-medium text-teal-100">Kepala Sekolah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deskripsi Kepala Sekolah */}
            <div className="space-y-5">
              <div>
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">KEPEMIMPINAN</span>
                <h2 className="mb-2 text-4xl font-bold text-teal-900">Kepala Sekolah</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-teal-400"></div>
              </div>

              <p className="leading-relaxed text-justify text-gray-700">
                M. Syamsul Khaeri Pratama, M.Pd. lahir di Kalijaga pada 5 April 1993. Ia merupakan seorang pendidik yang meniti perjalanan akademik dan profesional dengan konsistensi serta dedikasi tinggi di bidang pendidikan. Pendidikan sarjana ditempuh dan diselesaikan di IKIP Mataram pada tahun 2016, yang menjadi fondasi awal dalam membangun kompetensi sebagai tenaga pendidik.
              </p>
              <p className="leading-relaxed text-justify text-gray-700">
                Semangat untuk terus mengembangkan kapasitas keilmuan membawanya melanjutkan studi magister dan berhasil meraih gelar Magister Pendidikan (M.Pd.) dari Universitas Pendidikan Mandalika (UNDIKMA) Mataram pada tahun 2025. Perjalanan akademik tersebut mencerminkan komitmennya terhadap peningkatan mutu pendidikan dan pengembangan sumber daya manusia.
              </p>
              <p className="leading-relaxed text-justify text-gray-700">
                Dalam kiprah profesional, ia tidak hanya berperan sebagai guru, tetapi juga mengemban amanah sebagai dosen di Sekolah Tinggi Ekonomi Islam (STEI) Hamzar Lombok Timur. Melalui peran ganda tersebut, ia aktif berkontribusi dalam dunia pendidikan, baik pada ranah praktik pembelajaran maupun pengembangan keilmuan di lingkungan perguruan tinggi, khususnya dalam konteks pendidikan dan ekonomi Islam.
              </p>
              <p className="leading-relaxed text-justify text-gray-700">
                Dengan latar belakang akademik yang kuat dan pengalaman mengajar yang berkelanjutan, M. Syamsul Khaeri Pratama, M.Pd. terus berupaya menjadi pendidik yang inspiratif, adaptif, dan berorientasi pada nilai-nilai keilmuan serta kemajuan generasi masa depan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">FONDASI SEKOLAH</span>
            <h2 className="mb-3 text-4xl font-bold text-teal-900">Visi dan Misi</h2>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-400"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Visi */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 text-white border shadow-lg bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl border-teal-600/50">
                <div className="flex items-center mb-4">
                  <BookOpen size={32} className="mr-3 text-teal-200" />
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-lg leading-relaxed text-teal-50">
                  Mewujudkan insan yang mandiri secara ekonomi, berlandaskan iman dan takwa, serta berprestasi dalam dunia kerja.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 text-white border shadow-lg bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl border-teal-500/50">
                <div className="flex items-center mb-4">
                  <Award size={32} className="mr-3 text-teal-200" />
                  <h3 className="text-2xl font-bold">Misi</h3>
                </div>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Menyelenggarakan kegiatan belajar mengajar berkualitas sesuai standar nasional</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Meningkatkan kompetensi pendidik dan tenaga kependidikan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Mengembangkan sarana prasarana untuk penguasaan IPTEK</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Membentuk keimanan, ketakwaan, dan kemandirian siswa</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Memperkuat kemitraan dengan DU/DI</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Meningkatkan kualitas unit produksi sekolah</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 font-bold text-teal-200">•</span>
                    <span>Mewujudkan wawasan Wiyata Mandala</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">INFRASTRUKTUR</span>
            <h2 className="mb-3 text-4xl font-bold text-teal-900">Fasilitas Sekolah</h2>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-400"></div>
            <p className="mt-4 text-gray-600">Fasilitas lengkap mendukung proses pembelajaran optimal</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="relative overflow-hidden transition duration-300 shadow-lg group rounded-xl hover:shadow-2xl"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative overflow-hidden bg-white border border-teal-100 rounded-xl">
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-t from-teal-900/40 to-transparent group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6 border-t-4 border-teal-400">
                    <h3 className="text-lg font-bold text-center text-teal-900">
                      {facility.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">TERHUBUNG</span>
            <h2 className="mb-3 text-4xl font-bold text-teal-900">Ikuti Kami</h2>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-400"></div>
          </div>

          <div className="flex items-center justify-center space-x-12">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BspvGT2gW/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative mb-4">
                <div className="absolute transition duration-300 rounded-full opacity-25 -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 blur group-hover:opacity-75"></div>
                <div className="relative p-6 transition transform bg-teal-600 rounded-full shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:bg-teal-700">
                  <Facebook size={48} className="text-white" />
                </div>
              </div>
              <p className="font-semibold text-center text-teal-900 transition group-hover:text-teal-600">
                Facebook
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/smkmtkalijagatimur?igsh=eHo1OXU3bWRxZWt1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative mb-4">
                <div className="absolute transition duration-300 rounded-full opacity-25 -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 blur group-hover:opacity-75"></div>
                <div className="relative p-6 transition transform rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-700 group-hover:shadow-2xl group-hover:scale-110">
                  <Instagram size={48} className="text-white" />
                </div>
              </div>
              <p className="font-semibold text-center text-teal-900 transition group-hover:text-teal-600">
                Instagram
              </p>
            </a>
          </div>

          <p className="mt-12 text-lg text-center text-gray-600">
            Dapatkan informasi terbaru tentang SMK MT KALIJAGA TIMUR melalui media sosial kami
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-teal-100 shadow-lg bg-gradient-to-r from-teal-900 to-teal-800">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p className="font-semibold">&copy; 2026 SMK MT Kalijaga Timur. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}