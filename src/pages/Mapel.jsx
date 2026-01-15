import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Mapel() {
  const mataPelajaran = [
    {
      id: 1,
      name: 'PAI',
      image: '/img/pai.jpeg'
    },
    {
      id: 2,
      name: 'PPKN',
      image: '/img/pnk.jpeg'
    },
    {
      id: 3,
      name: 'Matematika',
      image: '/img/mtk.jpeg'
    },
    {
      id: 4,
      name: 'BHS. Indonesia',
      image: '/img/bindo.jpeg'
    },
    {
      id: 5,
      name: 'BHS. Inggris',
      image: '/img/bing.jpeg'
    },
    {
      id: 6,
      name: 'PJOK',
      image: '/img/pjok.jpeg'
    },
    {
      id: 7,
      name: 'Penataan Produk',
      image: '/img/pp.jpeg'
    },
    {
      id: 8,
      name: 'Bisnis Online',
      image: '/img/bo.jpeg'
    },
    {
      id: 9,
      name: 'PKK',
      image: '/img/pkk.jpeg'
    },
    {
      id: 10,
      name: 'Peng bisnis ritel',
      image: '/img/peng.jpeg'
    },
    {
      id: 11,
      name: 'ADM transaksi',
      image: '/img/adm.jpeg'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Half Screen */}
      <section
        className="relative w-full h-64 bg-center bg-cover md:h-80"
        style={{
          backgroundImage: 'url(/img/homepage.jpeg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <BookOpen size={48} className="mx-auto mb-4" />
            <h1 className="text-4xl font-bold md:text-5xl">Mata Pelajaran</h1>
          </div>
        </div>
      </section>

      {/* Mata Pelajaran Grid */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {mataPelajaran.map((pelajaran) => (
              <div
                key={pelajaran.id}
                className="overflow-hidden transition transform bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 group"
              >
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <img
                    src={pelajaran.image}
                    alt={pelajaran.name}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name Container */}
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-gray-800 transition group-hover:text-blue-600">
                    {pelajaran.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p>&copy; 2026 SMA MT Kalijaga Timur</p>
        </div>
      </footer>
    </div>
  );
}