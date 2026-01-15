import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

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
        className="relative w-full h-64 bg-center bg-cover md:h-80"
        style={{
          backgroundImage: 'url(img/homepage.jpeg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">Profil Sekolah</h1>
            <p className="text-lg md:text-xl">Mengenal Lebih Dekat SMK Mt Kalijaga Timur</p>
          </div>
        </div>
      </section>

      {/* Kepala Sekolah Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Foto Kepala Sekolah */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/img/kepal.jpeg"
                  alt="Kepala Sekolah"
                  className="object-cover rounded-lg shadow-lg w-80 h-96"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg bg-gradient-to-t from-black to-transparent">
                  <p className="text-lg font-bold text-white">M. Syamsul Khaeri Pratama, M.Pd.</p>
                  <p className="text-sm text-blue-200">Kepala Sekolah</p>
                </div>
              </div>
            </div>

            {/* Deskripsi Kepala Sekolah */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Kepala Sekolah</h2>
              <p className="leading-relaxed text-gray-700">
                M. Syamsul Khaeri Pratama, M.Pd. lahir di Kalijaga pada 5 April 1993. Ia merupakan seorang pendidik yang meniti perjalanan akademik dan profesional dengan konsistensi serta dedikasi tinggi di bidang pendidikan. Pendidikan sarjana ditempuh dan diselesaikan di IKIP Mataram pada tahun 2016, yang menjadi fondasi awal dalam membangun kompetensi sebagai tenaga pendidik.
              </p>
              <p className="leading-relaxed text-gray-700">

                Semangat untuk terus mengembangkan kapasitas keilmuan membawanya melanjutkan studi magister dan berhasil meraih gelar Magister Pendidikan (M.Pd.) dari Universitas Pendidikan Mandalika (UNDIKMA) Mataram pada tahun 2025. Perjalanan akademik tersebut mencerminkan komitmennya terhadap peningkatan mutu pendidikan dan pengembangan sumber daya manusia.
              </p>
              <p className="leading-relaxed text-gray-700">

                Dalam kiprah profesional, ia tidak hanya berperan sebagai guru, tetapi juga mengemban amanah sebagai dosen di Sekolah Tinggi Ekonomi Islam (STEI) Hamzar Lombok Timur. Melalui peran ganda tersebut, ia aktif berkontribusi dalam dunia pendidikan, baik pada ranah praktik pembelajaran maupun pengembangan keilmuan di lingkungan perguruan tinggi, khususnya dalam konteks pendidikan dan ekonomi Islam.
              </p>
              <p className="leading-relaxed text-gray-700">

                Dengan latar belakang akademik yang kuat dan pengalaman mengajar yang berkelanjutan, M. Syamsul Khaeri Pratama, M.Pd. terus berupaya menjadi pendidik yang inspiratif, adaptif, dan berorientasi pada nilai-nilai keilmuan serta kemajuan generasi masa depan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Visi dan Misi</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Visi */}
            <div className="p-8 text-white rounded-lg shadow-lg bg-gradient-to-br from-blue-600 to-blue-800">
              <h3 className="mb-4 text-2xl font-bold">Visi</h3>
              <p className="text-lg leading-relaxed">
                Mewujudkan insan yang mandiri secara ekonomi, berlandaskan iman dan takwa, serta berprestasi dalam dunia kerja.
              </p>
            </div>

            {/* Misi */}
            <div className="p-8 text-white rounded-lg shadow-lg bg-gradient-to-br from-green-600 to-green-800">
              <h3 className="mb-4 text-2xl font-bold">Misi</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">1</span>
                  <span>Menyelenggarakan kegiatan belajar mengajar yang berkualitas untuk mencapai kompetensi peserta didik sesuai standar nasional.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">2</span>
                  <span>Meningkatkan kompetensi pendidik dan tenaga kependidikan dalam rangka mewujudkan Standar Pelayanan Minimal (SPM).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">3</span>
                  <span>Mengembangkan kualitas dan kuantitas sarana serta prasarana pendidikan guna mendukung penguasaan ilmu pengetahuan dan teknologi (IPTEK).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">4</span>
                  <span>Meningkatkan kualitas sumber daya manusia serta pembinaan kesiswaan dalam rangka membentuk keimanan, ketakwaan, dan sikap kemandirian.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">5</span>
                  <span>Memperkuat kemitraan dengan Dunia Usaha dan Dunia Industri (DU/DI) sesuai dengan prinsip demand driven.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">6</span>
                  <span>Meningkatkan kualitas pengelolaan unit produksi sebagai penunjang kegiatan pendidikan dan pelatihan untuk menghasilkan sumber daya manusia yang unggul.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">7</span>
                  <span>Memberdayakan lingkungan sekolah dalam mewujudkan wawasan Wiyata Mandala.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Fasilitas Sekolah</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="overflow-hidden transition transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="object-cover w-full h-full transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-center text-gray-800">
                    {facility.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Ikuti Kami</h2>

          <div className="flex items-center justify-center space-x-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BspvGT2gW/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 transition transform bg-blue-600 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-700 hover:scale-110">
                <Facebook size={48} className="text-white" />
              </div>
              <p className="mt-3 font-semibold text-center text-gray-800 transition group-hover:text-blue-600">
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
              <div className="p-6 transition transform rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-2xl hover:scale-110">
                <Instagram size={48} className="text-white" />
              </div>
              <p className="mt-3 font-semibold text-center text-gray-800 transition group-hover:text-pink-600">
                Instagram
              </p>
            </a>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Dapatkan informasi terbaru tentang SMK MT KALIJAGA TIMUR melalui media sosial kami
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p>&copy; 2026 SMK MT Kalijaga Timur </p>
        </div>
      </footer>
    </div>
  );
}