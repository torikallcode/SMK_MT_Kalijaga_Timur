import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data untuk slider
  const sliderImages = [
    { id: 1, url: '/img/foto1.jpeg', alt: '' },
    { id: 2, url: '/img/foto2.jpeg', alt: '' },
    { id: 3, url: '/img/foto3.jpeg', alt: '' },
    { id: 4, url: '/img/foto4.jpeg', alt: '' },
    { id: 5, url: '/img/foto5.jpeg', alt: '' },
    { id: 6, url: '/img/foto6.jpeg', alt: '' },
  ];

  // Data untuk gallery
  const galleryImages = [
    { id: 1, name: 'Kegiatan Imtaq', url: '/img/foto9.jpeg', alt: '' },
    { id: 2, name: 'Kegiatan di ruang sekolah', url: '/img/foto8.jpeg', alt: '' },
    { id: 3, name: 'Foto bersama', url: '/img/foto7.jpeg', alt: '' },
    { id: 4, name: 'Foto bersama', url: '/img/foto1o.jpeg', alt: '' },
  ];

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen bg-center bg-cover"
        style={{
          backgroundImage: 'url(/img/homepage.jpeg)',
          backgroundAttachment: 'fixed'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">SMK MT KALIJAGA TIMUR</h1>
            <p className="text-xl md:text-2xl">Membangun Generasi Unggul dan Berkarakter</p>
          </div>
        </div>
      </section>

      {/* Text Berjalan (Marquee) */}
      <section className="w-full py-4 overflow-hidden text-white bg-teal-600">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8 text-2xl font-bold">
            🎓 Selamat Datang di SMK MT KALIJAGA TIMUR 🎓
          </span>
          {/* <span className="mx-8 text-2xl font-bold">
            🎓 Selamat Datang di SMA Negeri 1 Makassar 🎓
          </span> */}
        </div>
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
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </section>

      {/* Image Slider Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Fasilitas Sekolah</h2> */}

          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
            {/* Slider Container */}
            <div className="relative w-full overflow-hidden h-96 md:h-[500px]">
              {sliderImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute z-10 p-3 text-gray-800 transition transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-70 hover:bg-opacity-100"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute z-10 p-3 text-gray-800 transition transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-70 hover:bg-opacity-100"
            >
              <ChevronRight size={28} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute z-10 flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${index === currentSlide
                    ? 'bg-white'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                />
              ))}
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-lg font-semibold text-white">
                {sliderImages[currentSlide].alt}
              </p>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="mt-4 text-center text-gray-600">
            <p>{currentSlide + 1} / {sliderImages.length}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Galeri Kegiatan</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((imc) => (
              <div
                key={imc.id}
                className="overflow-hidden transition transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imc.url}
                    alt={imc.name}
                    className="object-cover w-full h-full transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-center text-gray-800">
                    {imc.name}
                  </h3>
                </div>
              </div>
              // <div
              //   key={image.id}
              //   className="relative overflow-hidden transition transform rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 group"
              // >
              //   <img
              //     src={image.url}
              //     alt={image.alt}
              //     className="object-cover w-full h-64 transition duration-300 group-hover:scale-110"
              //   />
              //   <div className="absolute inset-0 flex items-center justify-center transition bg-black bg-opacity-0 group-hover:bg-opacity-40">
              //     <span className="font-semibold text-white transition opacity-0 group-hover:opacity-100">
              //       {image.alt}
              //     </span>
              //   </div>
              // </div>


            ))}
          </div>
        </div >
      </section >

      {/* Footer */}
      < footer className="py-8 text-white bg-gray-800" >
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p>&copy; SMK MT Kalijaga timur</p>
        </div>
      </ footer>
    </div >
  );
}