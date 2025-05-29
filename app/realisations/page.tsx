'use client';

import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Site Vitrine Xori',
    description: 'Développement du site avec Next.js 15, animations Framer Motion, et responsive design.',
    image: '/images/project-xori.jpg',
    year: '2025',
    category: 'Web',
  },
  {
    title: 'Dashboard SaaS',
    description: 'Interface admin moderne, gestion des utilisateurs et statistiques temps réel.',
    image: '/images/project-dashboard.jpg',
    year: '2024',
    category: 'Application',
  },
  {
    title: 'Portfolio 3D',
    description: 'Expérience immersive avec Three.js et motion UI.',
    image: '/images/project-3d.jpg',
    year: '2024',
    category: 'Expérience',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800">Nos projets</h1>
        <p className="mt-2 text-gray-600">Découvrez nos dernières réalisations digitales</p>
      </motion.div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
}
