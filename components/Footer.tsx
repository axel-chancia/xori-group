'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#121138] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Colonne gauche */}
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Parlez-nous de <br /> votre projet
          </h2>
          <p className="text-gray-300 mb-6">
            Nous sommes curieux de connaître votre prochain défi
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition inline-flex items-center">
            En savoir plus <span className="ml-2 text-xl">→</span>
          </button>

          {/* Informations légales */}
          <div className="mt-10 text-sm leading-relaxed space-y-2">
            <p className="font-semibold">Certification et politiques</p>
            <p>Chaîne de signalement des dénonciations</p>
            <p>Xori Holding Srl</p>
            <p>REA: À - 322177</p>
            <p>Capital social : 50 000,00 €</p>
            <p>
              PEC: <a href="mailto:xoriholding@legalmail.it" className="underline">xoriholding@legalmail.it</a>
            </p>
            <p>TVA: IT 12869820014</p>
            <p>Politique de l’entreprise</p>
            <p>Politique de responsabilité sociale</p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center">
            <Image
              src="/ab.jpg" // à adapter selon ton fichier
              alt="ab"
              width={120}
              height={120}
              className="mb-2"
            />
            <p className="text-xl font-semibold">Xori Group</p>
            <p className="text-sm text-gray-400">Far-reaching value</p>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-6 flex space-x-4 text-2xl">
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="hover:text-pink-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bas de page */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="space-x-4 flex flex-wrap justify-center md:justify-start">
          <span>Ingénierie et conception</span>
          <span>Énergie</span>
          <span>Immobilier</span>
          <span>Consultatif</span>
          <span>Ventes et marketing</span>
        </div>

        <div className="mt-4 md:mt-0 space-x-4 flex items-center">
          <Link href="/politique-de-confidentialite" className="hover:underline">
            Politique de confidentialité
          </Link>
          <Link href="/politique-cookies" className="hover:underline">
            Politique relative aux cookies
          </Link>
          <span>© 2023 Tous droits réservés</span>
        </div>
      </div>
    </footer>
  )
}
