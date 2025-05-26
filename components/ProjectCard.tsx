'use client';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
      />
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-gray-500">{project.category} · {project.year}</p>
      <p className="text-gray-700">{project.description}</p>
    </motion.div>
  );
}
