export function Interests() {
  const interests = [
    'Reading novels',
    'Reading Self-help books',
    'Programming Video games',
    'Learning about finance',
    'Meditation practices',
    'Problem solving',
  ];

  return (
    <section
      id="interests"
      className="bg-arch-bg border-t border-arch-border/40"
    >
      <div className="section-container pt-40 pb-20">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-10 text-arch-text-primary">
          Interests
        </h2>

        <div className="max-w-5xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {interests.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-arch-accent text-sm mt-[2px]">◆</span>
                <span className="text-arch-text-secondary font-ibm-plex text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
