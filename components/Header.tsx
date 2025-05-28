'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/ab.jpg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-xl font-bold text-blue-600 ml-2">MonEntreprise</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-blue-600">À propos</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Nos services</Link>
            <Link href="/projets" className="text-gray-700 hover:text-blue-600">Réalisations</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/devis">
              <button className="ml-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">
                écrivez-nous
              </button>
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
                <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Accueil</Link>
                <Link href="/a-propos" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>À propos</Link>
                <Link href="/services" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Nos services</Link>
                <Link href="/projets" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Réalisations</Link>
                <Link href="/contact" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
                <Link href="/devis">
                  <button
                    onClick={toggleMenu}
                    className="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition"
                  >
                    écrivez-nous
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
