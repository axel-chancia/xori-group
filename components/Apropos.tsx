'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function APropos() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 px-6 sm:px-10 lg:px-20 py-20 font-sans shadow-2xl">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
        {/* Image entreprise */}
        <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpg"
            alt="Énergie et maintenance industrielle"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out hover:scale-105"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-gray-900">
            À propos de <span className="text-black-200">Mon Entreprise</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-700">
            Nous sommes une entreprise spécialisée dans l’énergie et la maintenance industrielle. Depuis notre création,
            nous apportons des solutions techniques fiables et sur mesure à nos clients issus de secteurs critiques.
          </p>
          <p className="text-base md:text-lg text-gray-600 tracking-wide leading-relaxed">
            Notre équipe est composée d’experts passionnés, mobilisés autour de l’innovation, la sécurité et la performance.
            En tant qu’acteur engagé dans la transition énergétique, nous plaçons la durabilité au cœur de notre stratégie.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-6">
            <Link href="/a-propos">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
                En savoir plus
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition-all duration-300">
                Écrivez-nous
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
