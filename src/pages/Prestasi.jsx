import React from 'react';
import { Trophy } from 'lucide-react';

export default function PrestasisPage() {
  const prestasi = [
    {
      id: 1,
      title: 'Pengakuan Kompetensi Nasional',
      description: 'Dengan kepemilikan sertifikat BNSP, lulusan Jurusan Bisnis Daring dan Pemasaran SMK MT Kalijaga Timur diakui memiliki kompetensi profesional dan siap bersaing di dunia kerja maupun wirausaha.'
    },
    {
      id: 2,
      title: 'Penghargaan Proyek Kewirausahaan Sekolah',
      description: 'Sekolah memberikan penghargaan untuk proyek kewirausahaan terbaik yang dilakukan siswa jurusan Bisnis Daring dan Pemasaran, misalnya hasil penjualan produk/jasa secara online.'
    },
    {
      id: 3,
      title: 'Juara Kesenian Tingkat Kecamatan',
      description: 'Siswa SMK MT Kalijaga Timur berhasil meraih Juara I pada ajang lomba kesenian tingkat kecamatan dalam cabang seni vocal grup kreasi. '
    },
    {
      id: 4,
      title: 'Menghasilkan lulusan yang siap kerja',
      description: 'SMK MT Kalijaga Timur menghasilkan lulusan yang siap kerja di dalam negeri maupun mancanegara dengan bekal kompetensi keahlian, sertifikasi, serta karakter kerja yang profesional.'
    },
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
            <Trophy size={48} className="mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl font-bold md:text-5xl">Prestasi Kami</h1>
          </div>
        </div>
      </section>

      {/* Prestasi Cards */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {prestasi.map((item) => (
              <div
                key={item.id}
                className="p-6 transition bg-white border-2 border-blue-200 rounded-lg hover:shadow-lg hover:border-blue-600"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <p>&copy; 2026 SMA Mt Kalijaga Timur</p>
        </div>
      </footer>
    </div>
  );
}