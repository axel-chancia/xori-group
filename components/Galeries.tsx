"use client";
import { useEffect, useRef } from "react";
import Link from "next/link"; // ✅ Import pour navigation interne

const galleryItems = [
  {
    src: "/img1.jpg",
    title: "Maintenance des engins lourds",
    link: "/formations/maintenance-engins",
  },
  {
    src: "/img2.avif",
    title: "Installations et câblages électrotechniques",
    link: "/formations/electrotechnique",
  },
  {
    src: "/img3.jpeg",
    title: "Dépannage industriel",
    link: "/formations/depannage-industriel",
  },
  {
    src: "/img4.jpeg.webp",
    title: "Gestion de chantiers multi techniques",
    link: "/formations/gestion-chantiers",
  },
];

export default function Galeries() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft >= maxScrollLeft) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f4f4f6] py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#23223b]">
        Nos Galeries
      </h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth gap-8 px-6 md:px-16 no-scrollbar"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] h-[400px] relative rounded-xl overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <Link
                href={item.link}
                className="text-white text-2xl font-bold p-6 hover:underline"
              >
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

