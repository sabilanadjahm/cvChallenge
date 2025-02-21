import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-purple-900 via-pink-700 to-red-500 text-white shadow-xl z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h2 className="text-4xl font-extrabold tracking-widest drop-shadow-lg">My Portfolio</h2>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">🏠 Home</Link>
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">💡 About</Link>
          <Link href="/skills" className="hover:text-yellow-300 transition duration-300">🚀 Skills</Link>
          <Link href="/portfolio" className="hover:text-yellow-300 transition duration-300">🎨 Portfolio</Link>
          <Link href="/services" className="hover:text-yellow-300 transition duration-300">💎 Services</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition duration-300">📞 Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-pink-800 text-white flex flex-col items-center py-6 space-y-6 md:hidden text-xl font-bold">
          <Link href="/" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <Link href="/about" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>💡 About</Link>
          <Link href="/skills" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>🚀 Skills</Link>
          <Link href="/portfolio" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>🎨 Portfolio</Link>
          <Link href="/services" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>💎 Services</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>📞 Contact</Link>
        </nav>
      )}
    </header>
  );
}
