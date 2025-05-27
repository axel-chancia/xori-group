'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPause, FaPlay } from 'react-icons/fa'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Vidéo en fond */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/focus.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🧾 Couche sombre et texte lisible */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-md p-8 rounded-lg max-w-2xl"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Solutions énergétiques & maintenance industrielle
          </h1>
          <p className="text-gray-300 text-lg">
            Nous accompagnons les entreprises dans leurs projets techniques et énergétiques.
          </p>
        </motion.div>

        {/* ▶️ Bouton play/pause */}
        <button
          onClick={toggleVideo}
          className="mt-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur transition"
          aria-label={isPlaying ? "Mettre en pause" : "Lire la vidéo"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </section>
  )
}
