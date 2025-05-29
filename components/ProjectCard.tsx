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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 uppercase mb-1">
          {project.category} · {project.year}
        </p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
}
