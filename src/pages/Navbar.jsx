import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profil" },
    { label: "Prestasi", href: "/prestasi" },
    { label: "Mata Pelajaran", href: "/mapel" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full text-white bg-teal-600 shadow">
        <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">


          {/* Logo */}
          <div className="flex items-center justify-center gap-x-3">
            <img src="/img/logo_sklh.png" alt="" className="w-11 h-11" />
            <h1 className="text-lg font-semibold">SMK MT KALIJAGA TIMUR</h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="transition hover:text-teal-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="px-4 pb-4 space-y-2 bg-teal-600 md:hidden">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block py-2 border-b border-teal-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* SPACER agar konten tidak ketutup navbar */}
      <div className="h-16"></div>
    </>
  );
}
