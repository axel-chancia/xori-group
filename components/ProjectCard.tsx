<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import { motion } from 'framer-motion';
=======
"use client";
import { motion } from "framer-motion";
>>>>>>> 0a2747e (projets et contact)
=======
'use client';
import { motion } from 'framer-motion';
>>>>>>> cce40a7 (version 4)

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
<<<<<<< HEAD
<<<<<<< HEAD
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
=======
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
>>>>>>> 0a2747e (projets et contact)
=======
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
>>>>>>> cce40a7 (version 4)
    >
      <img
        src={project.image}
        alt={project.title}
<<<<<<< HEAD
<<<<<<< HEAD
        className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
      />
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-gray-500">{project.category} · {project.year}</p>
      <p className="text-gray-700">{project.description}</p>
=======
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 uppercase mb-1">{project.category} · {project.year}</p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm">{project.description}</p>
      </div>
>>>>>>> 0a2747e (projets et contact)
=======
        className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
      />
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-gray-500">{project.category} · {project.year}</p>
      <p className="text-gray-700">{project.description}</p>
>>>>>>> cce40a7 (version 4)
    </motion.div>
  );
}
