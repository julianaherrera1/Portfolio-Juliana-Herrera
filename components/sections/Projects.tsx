"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  details: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "MiNegocioApp",
    description:
      "Business management platform designed for entrepreneurs and small businesses.",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Laravel Breeze"],
    details: `
MiNegocioApp is a business management platform currently in development, created for entrepreneurs and small businesses that need a simple way to manage and promote their operations online.

The system centralizes product management, customer records, sales tracking and business analytics in a single dashboard.

The backend architecture is built with Laravel following MVC principles. Authentication is handled with Laravel Breeze, while the interface is developed using Blade and TailwindCSS.

Future improvements include role-based access control, advanced product modules and expanded analytics tools.
`,
    images: [
      "/projects/minegocioapp/homePage.png",
      "/projects/minegocioapp/panelAdministrador.png",
      "/projects/minegocioapp/panelAdmin2.png",
      "/projects/minegocioapp/panelCliente1.png",
      "/projects/minegocioapp/panelCliente2.png",
      "/projects/minegocioapp/panelCliente3.png",
      "/projects/minegocioapp/panelEmprendedor1.png",
      "/projects/minegocioapp/panelEmprendedor2.png",
      "/projects/minegocioapp/panelEmprendedor3.png",
    ],
  },
  {
    title: "Solano Azul",
    description:
      "Modern landing page for a premium seafood brand focused on the Colombian Pacific.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    details: `
Solano Azul is a modern and responsive landing page developed for a seafood brand that distributes premium fresh tuna from the Colombian Pacific.

The goal of the project was to create a strong digital presence with a clean design and smooth user experience.

The website was built using Next.js with TypeScript to ensure scalability and maintainability. TailwindCSS was used to create a consistent design system while Framer Motion adds subtle animations that improve user engagement.

The site is fully responsive and optimized for performance.
`,
    images: [
      "/projects/solanoazul/homePage.png",
      "/projects/solanoazul/secondSection.png",
      "/projects/solanoazul/productsSection.png",
      "/projects/solanoazul/howToBuySection.png",
      "/projects/solanoazul/contactSection.png",
      "/projects/solanoazul/footerSection.png",
    ],
  },
 
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-purple-600">Projects</span>
        </h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A selection of projects where I applied frontend, backend and
          full-stack development to build scalable and user-focused web
          applications.
        </p>

      </div>

      {/* Grid */}
      <div className="mt-14 grid md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7
            hover:shadow-lg hover:-translate-y-1 hover:border-purple-400
            transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-5 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="text-purple-600 font-medium hover:underline mt-auto"
            >
              View Project →
            </button>

          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6 py-10 z-50">

          <div className="bg-white dark:bg-neutral-900 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 relative p-8">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6">
              {selectedProject.title}
            </h3>

            {selectedProject.images.length > 0 && (
              <div className="mb-8">
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="min-w-[300px] md:min-w-[400px] rounded-xl border border-neutral-200 dark:border-neutral-800"
                    />
                  ))}
                </div>
              </div>
            )}

            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed whitespace-pre-line mb-8">
              {selectedProject.details}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}