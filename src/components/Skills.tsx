import NextSectionArrow from "./SectionArrowProps";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Core Java",
        "Spring Boot",
        "Spring Data JPA",
        "REST API",
        "Maven",
        "Git / GitHub",
      ],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MariaDB"],
    },
    {
      title: "Web Essentials",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-arch-bg border-t border-arch-border py-40"
    >
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-bordered p-6">
              <h3 className="label-uppercase mb-6">{category.title}</h3>

              <ul className="font-ibm-plex text-arch-text-secondary space-y-2 font-bold">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* floating arrow to projects */}
      <NextSectionArrow nextId="projects" className="bottom-20" />
    </section>
  );
}
