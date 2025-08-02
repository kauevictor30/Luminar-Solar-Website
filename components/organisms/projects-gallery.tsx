import { ProjectCard } from "../molecules/project-card"
import { Heading2 } from "../atoms/typography"

/**
 * Galeria de projetos realizados
 */
export function ProjectsGallery() {
  const projects = [
  { tipo: "Parnaíba", local: "Piauí", imageUrl: "/projeto-parnaiba-01.jpeg" },
  { tipo: "Parnaíba", local: "Piauí", imageUrl: "/projeto-parnaiba-02.jpeg" },
  { tipo: "Parnaíba", local: "Piauí", imageUrl: "/projeto-parnaiba-03.jpeg" },
  { tipo: "Luzilândia", local: "Piauí", imageUrl: "/projeto-luzilandia-01.jpeg" },
  { tipo: "Luís Correia", local: "Piauí", imageUrl: "/projeto-luiscorreia-01.mp4" },
]


  return (
    <section id="galeria" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Heading2 className="text-center mb-12 text-gray-900 dark:text-white">Projetos realizados</Heading2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
                key={index}
                type={project.tipo}
                location={project.local}
                imageUrl={project.imageUrl} // <- Tem que ser imageUrl, igual na interface
            />
          ))}
        </div>
      </div>
    </section>
  )
}
