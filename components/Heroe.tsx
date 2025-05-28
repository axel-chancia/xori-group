"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaPlay, FaPause } from "react-icons/fa"

export default function Hero() {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ]

  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      const video = ref.current
      if (video) {
        if (index === currentVideo) {
          isPlaying ? video.play() : video.pause()
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [currentVideo, isPlaying])

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videoRefs.length)
  }

  const toggleVideo = () => {
    setIsPlaying((prev) => !prev)
  }

  const videoSources = [
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
  ]

  return (
    <section className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden bg-black">
      {videoSources.map((src, index) => (
        <video
          key={index}
          ref={videoRefs[index]}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === index ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          playsInline
          onEnded={handleEnded}
        />
      ))}

      {/* Contenu Hero */}
      <div className="absolute bottom-16 left-10 z-10 text-left max-w-xl space-y-6 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experts en Maintenance Industrielle Lourde
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nous assurons des solutions fiables pour vos systèmes industriels et vos machines critiques dans le secteur de l’énergie.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button size="lg" className="text-white bg-yellow-500 hover:bg-yellow-600">
            Nos Services
          </Button>
          <Button variant="outline" size="lg" className="text-yellow-500">
            Nous Contacter
          </Button>
        </motion.div>
      </div>

      {/* Bouton Play/Pause */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur transition"
        aria-label={isPlaying ? "Mettre en pause" : "Lire la vidéo"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </section>
  )
}

