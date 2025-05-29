'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaBolt, FaIndustry, FaLeaf, FaUsers } from 'react-icons/fa'

export default function APropos() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 px-6 sm:px-10 lg:px-20 py-20 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-20 animate-fade-in">

        {/* En-tête */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font text-gray-900">
              À propos de <span className="text-black-600">Mon Entreprise</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Acteur clé du secteur énergétique et industriel, nous fournissons des solutions innovantes, durables et sécurisées
              à nos clients depuis plus de 15 ans. Notre expertise couvre la maintenance industrielle, les énergies renouvelables
              et la performance des installations techniques.
            </p>
            <div className="flex gap-4 pt-4">
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

        {/* Mission, Vision, Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaBolt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
            <p className="text-gray-600">Offrir des solutions fiables et efficaces pour relever les défis énergétiques de demain.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
            <p className="text-gray-600">Accélérer la transition énergétique vers un avenir durable pour tous les secteurs industriels.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaIndustry className="text-4xl text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
            <p className="text-gray-600">Innovation, sécurité, engagement environnemental, excellence technique.</p>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-700">15+</p>
            <p className="text-gray-600">Années d'expérience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">120+</p>
            <p className="text-gray-600">Clients industriels</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">300+</p>
            <p className="text-gray-600">Projets réalisés</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">30</p>
            <p className="text-gray-600">Experts techniques</p>
          </div>
        </div>

        {/* Citation inspirante */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="italic text-xl text-gray-700 border-l-4 border-blue-600 pl-6">
            "Nous croyons qu’une énergie plus propre et une industrie plus intelligente peuvent façonner un avenir meilleur."
          </blockquote>
          <p className="mt-4 text-gray-500">— Directeur Général</p>
        </div>
      </div>
    </section>
  )
}
