import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Profile", to: "/profil" },
    { label: "Prestasi", to: "/prestasi" },
    { label: "Mata Pelajaran", to: "/mapel" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full text-white bg-teal-600 shadow">
        <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/img/logo_sklh.png"
              alt="Logo"
              className="w-11 h-11"
            />
            <h1 className="text-lg font-semibold">
              SMK MT KALIJAGA TIMUR
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="transition hover:text-teal-200"
              >
                {item.label}
              </Link>
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
              <Link
                key={i}
                to={item.to}
                className="block py-2 border-b border-teal-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}
