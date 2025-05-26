import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Révision complète d'engins miniers",
    description: "Entretien et modernisation de 4 bulldozers CAT D9 dans un site d'extraction au Mali.",
    image: "/projets/bulldozer.jpg",
    year: "2024",
    category: "Maintenance industrielle",
  },
  {
    title: "Installation HTA pour usine",
    description: "Installation de tableaux haute tension et câblage de secours dans une usine agro-industrielle.",
    image: "/projets/installation-hta.jpg",
    year: "2023",
    category: "Électrotechnique",
  },
  {
    title: "Assistance technique sur chantier pétrolier",
    description: "Support électromécanique sur site avec gestion des groupes électrogènes de secours.",
    image: "/projets/chantier-petrolier.jpg",
    year: "2023",
    category: "Intervention sur site",
  },
];

export default function ProjetsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
