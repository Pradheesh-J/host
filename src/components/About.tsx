import NextSectionArrow from "./SectionArrowProps";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-arch-bg border-t border-arch-border py-40"
    >
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-arch-text-secondary font-inter leading-relaxed">
I am a final-year Electronics Engineering student at Panimalar Engineering College,
              focused on becoming a strong backend developer. I work primarily with Java and
              Spring Boot, and I enjoy building systems that behave predictably, scale well, and stay maintainable over time.
            </p>

            <p className="text-arch-text-secondary font-inter leading-relaxed">
I look forward to connecting with developers and mentors who share this mindset, and I’m always looking for opportunities where I can learn, contribute, and improve.
            </p>

            <p className="text-arch-text-secondary font-inter leading-relaxed">
Outside of development, I consistently practice problem-solving and reinforce my engineering fundamentals to grow as a developer.
            </p>
          </div>


          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <div>
              <p className="label-uppercase mb-3">Location</p>
              <p className="font-ibm-plex text-arch-text-secondary">Chennai, IN</p>
            </div>

            <div>
              <p className="label-uppercase mb-3">Currently Exploring</p>
              <ul className="font-ibm-plex text-arch-text-secondary space-y-1">
                <li>Java & Spring Boot backend design</li>
                <li>APIs, databases, and scalable architectures</li>
                <li>Debugging, testing, and clean engineering practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <NextSectionArrow nextId="skills" />
    </section>
  );
}
