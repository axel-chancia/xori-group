'use client';

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Maintenance des engins lourds",
    description:
      "Assurez la performance et la durabilité de vos équipements grâce à nos services spécialisés de maintenance sur site ou en atelier.",
    image: "/img1.jpg",
    link: "/formations/maintenance-engins",
  },
  {
    title: "Installations et câblages électrotechniques",
    description:
      "Nous réalisons des installations électriques complexes, adaptées aux environnements industriels les plus exigeants.",
    image: "/img2.avif",
    link: "/formations/installation-cablage",
  },
  {
    title: "Dépannage industriel",
    description:
      "Une intervention rapide et efficace pour minimiser les arrêts de production et garantir la sécurité de vos installations.",
    image: "/img3.jpeg",
    link: "/formations/depannage-industriel",
  },
  {
    title: "Gestion de chantiers multi techniques",
    description:
      "Nous pilotons vos projets techniques avec rigueur, depuis la planification jusqu'à la mise en service.",
    image: "/img4.jpeg.webp",
    link: "/formations/gestion-chantiers",
  },
];

export default function Service() {
  return (
    <main className="bg-[#f4f4f6] py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#23223b] mb-12">
        Nos Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#23223b] mb-2">
                {service.title}
              </h2>
              <p className="text-[#444] text-sm sm:text-base mb-4 flex-1">
                {service.description}
              </p>
              <Link href={service.link} className="w-fit">
                <button className="bg-[#23223b] text-white px-6 py-2 text-sm sm:text-base font-medium rounded-md hover:bg-[#181829] transition-colors">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

