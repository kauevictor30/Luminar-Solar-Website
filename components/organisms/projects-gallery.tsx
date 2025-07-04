import { ProjectCard } from "../molecules/project-card"
import { Heading2 } from "../atoms/typography"

export function ProjectsGallery() {
  const projects = [
    { tipo: "Residencial", local: "São Paulo - SP" },
    { tipo: "Rural", local: "Campinas - SP" },
    { tipo: "Comercial", local: "Santos - SP" },
    { tipo: "Residencial", local: "Ribeirão Preto - SP" },
    { tipo: "Rural", local: "Sorocaba - SP" },
    { tipo: "Comercial", local: "São José dos Campos - SP" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Heading2 className="text-center mb-12 text-gray-900">Projetos realizados</Heading2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} type={project.tipo} location={project.local} />
          ))}
        </div>
      </div>
    </section>
  )
}
