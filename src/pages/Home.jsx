import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    { id: 1, url: '/img/foto1.jpeg', alt: 'Fasilitas Sekolah' },
    { id: 2, url: '/img/foto2.jpeg', alt: 'Ruang Kelas Modern' },
    { id: 3, url: '/img/foto3.jpeg', alt: 'Laboratorium' },
    { id: 4, url: '/img/foto4.jpeg', alt: 'Perpustakaan' },
    { id: 5, url: '/img/foto5.jpeg', alt: 'Aula Sekolah' },
    { id: 6, url: '/img/foto6.jpeg', alt: 'Lapangan Olahraga' },
  ];

  const galleryImages = [
    { id: 1, name: 'Kegiatan Imtaq', url: '/img/foto9.jpeg' },
    { id: 2, name: 'Kegiatan di Ruang Sekolah', url: '/img/foto8.jpeg' },
    { id: 3, name: 'Foto Bersama', url: '/img/foto7.jpeg' },
    { id: 4, name: 'Foto Bersama', url: '/img/foto1o.jpeg' },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Hero */}
      <section className="relative flex items-center justify-center h-screen bg-center bg-cover" style={{ backgroundImage: 'url(/img/homepage.jpeg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-800/50 to-teal-900/60" />
        <div className="relative px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">SMK MT Kalijaga Timur</h1>
          <p className="mt-3 text-lg font-light md:text-xl">Membangun Generasi Unggul dan Berkarakter</p>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-3 overflow-hidden text-white bg-teal-900">
        <div className="flex space-x-16 animate-marquee whitespace-nowrap">
          <span className="text-sm font-semibold md:text-base lg:text-lg">🎓 Selamat Datang di SMK MT Kalijaga Timur</span>
        </div>
        {/* <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee { animation: marquee 10s linear infinite; }
        `}</style> */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 13s linear infinite;
          }
        `}</style>
      </div>

      {/* Slider */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-2 text-3xl font-semibold text-center text-teal-900 md:text-4xl"></h2>
          <div className="w-16 h-1 mx-auto mb-12 bg-gradient-to-r from-teal-600 to-teal-400" />

          <div className="relative overflow-hidden bg-white border border-teal-200 shadow-lg rounded-xl">
            <div className="relative aspect-video">
              {sliderImages.map((img, i) => (
                <img
                  key={img.id}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            <button onClick={prevSlide} className="absolute p-2 text-white transition -translate-y-1/2 rounded-full left-4 top-1/2 bg-teal-700/70 hover:bg-teal-700"><ChevronLeft size={20} /></button>
            <button onClick={nextSlide} className="absolute p-2 text-white transition -translate-y-1/2 rounded-full right-4 top-1/2 bg-teal-700/70 hover:bg-teal-700"><ChevronRight size={20} /></button>

            <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
              {sliderImages.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition ${i === currentSlide ? 'w-6 bg-teal-400' : 'w-2 bg-white/50'}`} />
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-center text-slate-500">{currentSlide + 1} <span className="text-slate-400">/ {sliderImages.length}</span></p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-2 text-3xl font-semibold text-center text-teal-900 md:text-4xl">Galeri Kegiatan</h2>
          <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-teal-600 to-teal-400" />
          <p className="mb-12 text-center text-slate-600">Dokumentasi kegiatan dan prestasi siswa kami</p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((item) => (
              <div key={item.id} className="relative overflow-hidden transition border border-teal-100 rounded-lg shadow-md group hover:shadow-lg">
                <img src={item.url} alt={item.name} className="object-cover w-full h-48 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent" />
                <span className="absolute text-sm font-medium text-white bottom-3 left-3">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 text-teal-100 bg-teal-900">
        <div className="grid max-w-5xl gap-8 mx-auto text-sm md:grid-cols-3">
          <div>
            <h4 className="mb-3 font-semibold text-white">SMK MT Kalijaga Timur</h4>
            <p>Membangun generasi unggul dan berkarakter untuk masa depan yang lebih baik.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition hover:text-teal-300">Beranda</a></li>
              <li><a href="#" className="transition hover:text-teal-300">Tentang Kami</a></li>
              <li><a href="#" className="transition hover:text-teal-300">Galeri</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Kontak</h4>
            <p>Email: info@smkmtkalijaga.sch.id</p>
            <p>Telepon: (0411) XXXX-XXXX</p>
          </div>
        </div>
        <div className="pt-6 mt-10 text-xs text-center text-teal-300 border-t border-teal-800">
          © 2026 SMK MT Kalijaga Timur. Semua hak cipta dilindungi.
        </div>
      </footer>
    </div>
  );
}