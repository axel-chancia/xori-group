'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 space-x-3">
            <Link href="#" className="flex items-center">
              <Image
                src="/ab.jpg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-xl font-bold text-black ml-2">Mon Entreprise</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="#accueil" className="text-gray-700 hover:text-black transition">Accueil</Link>
            <Link href="#About" className="text-gray-700 hover:text-black transition">À propos</Link>
            <Link href="#Section-service" className="text-gray-700 hover:text-black transition">Nos services</Link>
            <Link href="/realisations" className="text-gray-700 hover:text-black transition">Réalisations</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition">Contact</Link>
            <Link href="/contact">
              <Button className="ml-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">
                écrivez-nous
              </Button>
            </Link>
          </nav>

          {/* Burger button mobile */}
          <div className="md:hidden relative">
            <button
              onClick={toggleMenu}
              className={clsx(
                "p-2 rounded-md transition",
                menuOpen ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu Mobile Popup */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg px-6 py-4 space-y-3 z-50 border border-gray-200">
                <Link href="#accueil" className="block text-gray-700 hover:text-black transition" onClick={toggleMenu}>Accueil</Link>
                <Link href="#About" className="block text-gray-700 hover:text-black transition" onClick={toggleMenu}>À propos</Link>
                <Link href="#Section-service" className="block text-gray-700 hover:text-black transition" onClick={toggleMenu}>Nos services</Link>
                <Link href="/realisations" className="block text-gray-700 hover:text-black transition" onClick={toggleMenu}>Réalisations</Link>
                <Link href="/contact" className="block text-gray-700 hover:text-black transition" onClick={toggleMenu}>Contact</Link>
                <Link href="/contact">
                  <Button
                    onClick={toggleMenu}
                    className="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition"
                  >
                    écrivez-nous
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
