<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cce40a7 (version 4)
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
<<<<<<< HEAD

const projects = [
  {
    title: "Entretien de gros engins",
    description: "Nous avons réparé et entretenu plusieurs bulldozers sur un site minier au Mali.",
    image: "/engins.jpg",
    year: "2024",
    category: "Entretien d’engins lourds",
  },
  {
    title: "Installation électrique pour une usine",
    description: "Pose de gros tableaux électriques pour une usine de production alimentaire.",
    image: "/projets/installation-hta.jpg",
    year: "2023",
    category: "Électricité industrielle",
  },
  {
    title: "Énergie solaire pour un site isolé",
    description: "Nous avons installé des panneaux solaires et des batteries pour alimenter un site loin de tout réseau.",
    image: "/projets/solaire-base.jpg",
    year: "2023",
    category: "Énergie solaire",
  },
  {
    title: "Montage d’un tableau électrique",
    description: "Fabrication et installation d’un tableau électrique pour une chaîne de production.",
    image: "/projets/armoire-industrielle.jpg",
    year: "2022",
    category: "Installation électrique",
  },
  {
    title: "Réparation rapide d’un moteur",
    description: "Nous avons remplacé un gros moteur en panne sur une station de pompage.",
    image: "/projets/pompage-depannage.jpg",
    year: "2024",
    category: "Réparation urgente",
  },
  {
    title: "Assistance sur un chantier pétrolier",
    description: "Aide technique pour gérer l’électricité et les générateurs sur un chantier en mer.",
    image: "/projets/chantier-petrolier.jpg",
    year: "2023",
    category: "Support technique sur site",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* 🌁 Image floue en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/engins.jpg"
          alt="Image de fond"
          className="w-full h-full object-cover blur-sm brightness-75"
        />
      </div>

      {/* 🧾 Contenu */}
      <div className="flex flex-col md:flex-row-reverse h-full max-w-7xl mx-auto px-4 md:px-10 py-10">
        {/* Liste des projets */}
        <div className="md:w-[30%] w-full md:border-l border-gray-200 p-4 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-md">
          <ul className="space-y-4">
            {projects.map((project) => (
              <motion.li
                key={project.title}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(project)}
                className={`cursor-pointer border rounded p-4 transition duration-300 ${
                  selected.title === project.title
                    ? 'bg-gray-100 border-gray-400'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-gray-500">{project.category} · {project.year}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Détail du projet sélectionné */}
        <div className="md:w-[70%] w-full flex items-center justify-center px-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md p-6 rounded shadow-lg">
            <AnimatePresence mode="wait">
              <ProjectCard key={selected.title} project={selected} />
            </AnimatePresence>
          </div>
        </div>
=======
import { ProjectCard } from "@/components/ProjectCard";
=======
>>>>>>> cce40a7 (version 4)

const projects = [
  {
    title: "Entretien de gros engins",
    description: "Nous avons réparé et entretenu plusieurs bulldozers sur un site minier au Mali.",
    image: "/engins.jpg",
    year: "2024",
    category: "Entretien d’engins lourds",
  },
  {
    title: "Installation électrique pour une usine",
    description: "Pose de gros tableaux électriques pour une usine de production alimentaire.",
    image: "/projets/installation-hta.jpg",
    year: "2023",
    category: "Électricité industrielle",
  },
  {
    title: "Énergie solaire pour un site isolé",
    description: "Nous avons installé des panneaux solaires et des batteries pour alimenter un site loin de tout réseau.",
    image: "/projets/solaire-base.jpg",
    year: "2023",
    category: "Énergie solaire",
  },
  {
    title: "Montage d’un tableau électrique",
    description: "Fabrication et installation d’un tableau électrique pour une chaîne de production.",
    image: "/projets/armoire-industrielle.jpg",
    year: "2022",
    category: "Installation électrique",
  },
  {
    title: "Réparation rapide d’un moteur",
    description: "Nous avons remplacé un gros moteur en panne sur une station de pompage.",
    image: "/projets/pompage-depannage.jpg",
    year: "2024",
    category: "Réparation urgente",
  },
  {
    title: "Assistance sur un chantier pétrolier",
    description: "Aide technique pour gérer l’électricité et les générateurs sur un chantier en mer.",
    image: "/projets/chantier-petrolier.jpg",
    year: "2023",
    category: "Support technique sur site",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(projects[0]);

  return (
<<<<<<< HEAD
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
>>>>>>> 0a2747e (projets et contact)
=======
    <div className="relative h-screen overflow-hidden">
      {/* 🌁 Image floue en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/engins.jpg"
          alt="Image de fond"
          className="w-full h-full object-cover blur-sm brightness-75"
        />
      </div>

      {/* 🧾 Contenu */}
      <div className="flex flex-col md:flex-row-reverse h-full max-w-7xl mx-auto px-4 md:px-10 py-10">
        {/* Liste des projets */}
        <div className="md:w-[30%] w-full md:border-l border-gray-200 p-4 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-md">
          <ul className="space-y-4">
            {projects.map((project) => (
              <motion.li
                key={project.title}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(project)}
                className={`cursor-pointer border rounded p-4 transition duration-300 ${
                  selected.title === project.title
                    ? 'bg-gray-100 border-gray-400'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-gray-500">{project.category} · {project.year}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Détail du projet sélectionné */}
        <div className="md:w-[70%] w-full flex items-center justify-center px-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md p-6 rounded shadow-lg">
            <AnimatePresence mode="wait">
              <ProjectCard key={selected.title} project={selected} />
            </AnimatePresence>
          </div>
        </div>
>>>>>>> cce40a7 (version 4)
      </div>
    </div>
  );
}
