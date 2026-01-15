import React from 'react';
import { Trophy, Star, Award, Zap } from 'lucide-react';

export default function PrestasisPage() {
  const prestasi = [
    {
      id: 1,
      title: 'Pengakuan Kompetensi Nasional',
      description: 'Dengan kepemilikan sertifikat BNSP, lulusan Jurusan Bisnis Daring dan Pemasaran SMK MT Kalijaga Timur diakui memiliki kompetensi profesional dan siap bersaing di dunia kerja maupun wirausaha.',
      icon: Award
    },
    {
      id: 2,
      title: 'Penghargaan Proyek Kewirausahaan Sekolah',
      description: 'Sekolah memberikan penghargaan untuk proyek kewirausahaan terbaik yang dilakukan siswa jurusan Bisnis Daring dan Pemasaran, misalnya hasil penjualan produk/jasa secara online.',
      icon: Zap
    },
    {
      id: 3,
      title: 'Juara Kesenian Tingkat Kecamatan',
      description: 'Siswa SMK MT Kalijaga Timur berhasil meraih Juara I pada ajang lomba kesenian tingkat kecamatan dalam cabang seni vocal grup kreasi.',
      icon: Star
    },
    {
      id: 4,
      title: 'Menghasilkan lulusan yang siap kerja',
      description: 'SMK MT Kalijaga Timur menghasilkan lulusan yang siap kerja di dalam negeri maupun mancanegara dengan bekal kompetensi keahlian, sertifikasi, serta karakter kerja yang profesional.',
      icon: Trophy
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 rounded-full bg-teal-400/20 border-teal-300/50">
              <Trophy size={48} className="text-teal-100" />
            </div>
            <h1 className="mb-3 text-4xl font-bold md:text-6xl">Prestasi Kami</h1>
            <p className="text-lg md:text-xl text-teal-50">Pencapaian dan Kebanggaan SMK MT Kalijaga Timur</p>
          </div>
        </div>
      </section>

      {/* Prestasi Cards */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">PENCAPAIAN</span>
            <h2 className="mb-3 text-4xl font-bold text-teal-900">Prestasi dan Penghargaan</h2>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-400"></div>
            <p className="mt-4 text-lg text-gray-600">Komitmen kami dalam menghasilkan lulusan berkualitas dan berprestasi</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {prestasi.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-full p-8 transition duration-300 bg-white border-2 border-teal-200 shadow-lg rounded-xl group-hover:border-teal-500 group-hover:shadow-2xl">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-gradient-to-br from-teal-400 to-teal-600">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="flex-1 ml-4">
                        <h3 className="text-xl font-bold text-teal-900 transition group-hover:text-teal-700">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="leading-relaxed text-justify text-gray-700">
                      {item.description}
                    </p>
                    {/* <div className="pt-4 mt-4 border-t border-teal-100">
                      <div className="flex items-center text-sm font-semibold text-teal-600 transition group-hover:text-teal-700">
                        <span>Lihat Detail</span>
                        <span className="ml-2 transition transform group-hover:translate-x-1">→</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-teal-100 shadow-lg bg-gradient-to-r from-teal-900 to-teal-800">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <p className="font-semibold">&copy; 2026 SMK MT Kalijaga Timur. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}