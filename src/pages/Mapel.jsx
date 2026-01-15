import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Mapel() {
  const mataPelajaran = [
    {
      id: 1,
      name: 'PAI',
      image: '/img/pai.jpeg',
      category: 'Umum'
    },
    {
      id: 2,
      name: 'PPKN',
      image: '/img/pnk.jpeg',
      category: 'Umum'
    },
    {
      id: 3,
      name: 'Matematika',
      image: '/img/mtk.jpeg',
      category: 'Umum'
    },
    {
      id: 4,
      name: 'BHS. Indonesia',
      image: '/img/bindo.jpeg',
      category: 'Umum'
    },
    {
      id: 5,
      name: 'BHS. Inggris',
      image: '/img/bing.jpeg',
      category: 'Umum'
    },
    {
      id: 6,
      name: 'PJOK',
      image: '/img/pjok.jpeg',
      category: 'Umum'
    },
    {
      id: 7,
      name: 'Penataan Produk',
      image: '/img/pp.jpeg',
      category: 'Keahlian'
    },
    {
      id: 8,
      name: 'Bisnis Online',
      image: '/img/bo.jpeg',
      category: 'Keahlian'
    },
    {
      id: 9,
      name: 'PKK',
      image: '/img/pkk.jpeg',
      category: 'Keahlian'
    },
    {
      id: 10,
      name: 'Peng bisnis ritel',
      image: '/img/peng.jpeg',
      category: 'Keahlian'
    },
    {
      id: 11,
      name: 'ADM transaksi',
      image: '/img/adm.jpeg',
      category: 'Keahlian'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 bg-center bg-cover md:h-96"
        style={{
          backgroundImage: 'url(/img/homepage.jpeg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 rounded-full bg-teal-400/20 border-teal-300/50">
              <BookOpen size={48} className="text-teal-100" />
            </div>
            <h1 className="mb-3 text-4xl font-bold md:text-6xl">Mata Pelajaran</h1>
            <p className="text-lg md:text-xl text-teal-50">Kurikulum Komprehensif untuk Pengembangan Kompetensi Siswa</p>
          </div>
        </div>
      </section>

      {/* Mata Pelajaran Grid */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-teal-900 bg-teal-100 rounded-full">KURIKULUM</span>
            <h2 className="mb-3 text-4xl font-bold text-teal-900">Program Pembelajaran</h2>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-400"></div>
            <p className="mt-4 text-lg text-gray-600">Mata pelajaran yang dirancang untuk mengembangkan kompetensi akademik dan profesional</p>
          </div>

          {/* Mata Pelajaran Umum */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 mr-3 rounded bg-gradient-to-b from-teal-600 to-teal-400"></div>
              <h3 className="text-2xl font-bold text-teal-900">Mata Pelajaran Umum</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {mataPelajaran.filter(p => p.category === 'Umum').map((pelajaran) => (
                <div
                  key={pelajaran.id}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative overflow-hidden transition transform bg-white border border-teal-100 shadow-lg cursor-pointer rounded-xl group-hover:shadow-2xl group-hover:scale-105 group-hover:border-teal-400">
                    {/* Image Container */}
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <img
                        src={pelajaran.image}
                        alt={pelajaran.name}
                        className="object-cover w-full h-full transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-t from-teal-900/40 to-transparent group-hover:opacity-100"></div>
                    </div>

                    {/* Name Container */}
                    <div className="p-4 text-center border-t-2 border-teal-100 group-hover:border-teal-400">
                      <h3 className="text-base font-bold text-teal-900 transition group-hover:text-teal-600">
                        {pelajaran.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mata Pelajaran Keahlian */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 mr-3 rounded bg-gradient-to-b from-teal-600 to-teal-400"></div>
              <h3 className="text-2xl font-bold text-teal-900">Mata Pelajaran Keahlian</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {mataPelajaran.filter(p => p.category === 'Keahlian').map((pelajaran) => (
                <div
                  key={pelajaran.id}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative overflow-hidden transition transform bg-white border border-teal-100 shadow-lg cursor-pointer rounded-xl group-hover:shadow-2xl group-hover:scale-105 group-hover:border-teal-400">
                    {/* Image Container */}
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <img
                        src={pelajaran.image}
                        alt={pelajaran.name}
                        className="object-cover w-full h-full transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-t from-teal-900/40 to-transparent group-hover:opacity-100"></div>
                    </div>

                    {/* Name Container */}
                    <div className="p-4 text-center border-t-2 border-teal-100 group-hover:border-teal-400">
                      <h3 className="text-base font-bold text-teal-900 transition group-hover:text-teal-600">
                        {pelajaran.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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