import { ExternalLink } from "lucide-react";
import NextSectionArrow from "./SectionArrowProps";

interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Movie Discovery Web Application with Smart Search Analytics",
    description:
      "Responsive movie discovery platform using TMDB API integration with modern frontend tooling.",
    highlights: [
      "Built responsive UI with TMDB API integration",
      "Implemented smart search and data fetching",
      "Used Vite for fast modern build tooling"
    ],
    technologies: ["React", "JavaScript", "TMDB API", "Vite"],
    link: "https://github.com/Pradheesh-J/MovieApp.git"
  },
  {
    id: "2",
    title: "Book Management System — Spring Boot & JPA",
    description:
      "Layered architecture with CRUD operations, interceptors, custom queries, DTOs, and logging.",
    highlights: [
      "Built layered architecture with Spring Boot + JPA",
      "Created CRUD operations with interceptors and custom queries",
      "Implemented DTOs and proper logging for efficient data handling"
    ],
    technologies: ["Java", "Spring Boot", "JPA", "MySQL"],
    link: "https://github.com/Pradheesh-J/Book-Management.git"
  },
  {
    id: "3",
    title: "School Management System — Java OOP Application",
    description:
      "Modular Java OOP system with service layer, exception handling, and design pattern usage.",
    highlights: [
      "Built modular service layer architecture",
      "Implemented custom exception handling for enrollment and validation",
      "Demonstrated proficiency in Java design patterns and error handling"
    ],
    technologies: ["Java", "OOP", "Collections", "Exception Handling"],
    link: "https://github.com/Pradheesh-J/SchoolManagementSystem.git"
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-arch-bg border-t border-arch-border"
    >
      <div className="section-container flex items-center">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card-bordered p-6 flex flex-col h-full">
                <h3 className="text-lg font-space-mono font-bold text-arch-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-inter text-arch-text-secondary mb-4 flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-ibm-plex text-arch-text-secondary flex items-start"
                    >
                      <span className="mr-2 text-arch-accent">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-jetbrains text-arch-text-secondary/60 bg-arch-bg px-2 py-1 border border-arch-border rounded-arch"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-ibm-plex text-sm text-arch-accent hover:text-arch-text-primary transition-colors duration-150"
                >
                  View Repository
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NextSectionArrow nextId="interests" className="bottom-28 z-40" />
    </section>
  );
}
