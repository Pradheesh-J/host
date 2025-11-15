import { Github, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<section className="relative min-h-screen bg-arch-bg grid-pattern flex flex-col">
<div className="hero-bg"></div>
 <div className="stars" />  
      {/* NAV */}
      <nav className="section-container pt-12 z-10">
        <div className="flex justify-center gap-8">
          <button onClick={() => scrollToSection("about")} className="button-ghost text-sm">About</button>
          <button onClick={() => scrollToSection("skills")} className="button-ghost text-sm">Skills</button>
          <button onClick={() => scrollToSection("projects")} className="button-ghost text-sm">Projects</button>
          <button onClick={() => scrollToSection("interests")} className="button-ghost text-sm">Interests</button>
        </div>
      </nav>

      {/* Right-side social icons (NO gradient) */}
      <div
        className="
          absolute top-1/2 right-6 -translate-y-1/2
          hidden md:flex flex-col items-center gap-6
          z-50
        "
      >

        {/* GitHub */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-arch-text-secondary/60 hover:text-arch-accent transition-colors"
        >
          <Github size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-arch-text-secondary/60 hover:text-arch-accent transition-colors"
        >
          <Linkedin size={22} />
        </a>
      </div>

      {/* HERO CONTENT */}
<div className="section-container flex items-center justify-center flex-1 -mt-44">

        <div className="max-w-3xl text-center ">
          <div className="label-uppercase mb-6 font-bold -translate-x-3">Aspiring Backend Engineer</div>

          {/* ONLY this text has gradient */}
          <h1 className="text-5xl md:text-6xl font-space-mono font-bold leading-tight mb-6">
            <span className="gradient-text">Hey, I'm Pradheesh</span>
          </h1>

          <p className="text-lg text-arch-text-secondary font-inter leading-relaxed mb-8">
Building backend systems while constantly learning and searching for better ways to do it.
          </p>

          <div className="flex gap-4 items-center justify-center">
            <button onClick={() => scrollToSection("projects")} className="button-primary">View Projects</button>
<a
  href="https://www.linkedin.com/in/pradheesh-j5/overlay/1763222586796/single-media-viewer/?profileId=ACoAAEQBO3oBUTY9AdR1zbp3nxRdkHpmPQDfB5o"
  target="_blank"
  rel="noopener noreferrer"
  className="button-ghost"
>
  Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
