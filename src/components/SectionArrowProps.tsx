import { ChevronDown } from "lucide-react";

interface NextSectionArrowProps {
  nextId: string;
  className?: string; // optional override (e.g. "bottom-20 z-30")
}

export default function NextSectionArrow({ nextId, className = "" }: NextSectionArrowProps) {
  const handleClick = () => {
    const next = document.getElementById(nextId);
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // no hardcoded bottom-* here — allow consumer to control it
  return (
    <button
      onClick={handleClick}
      aria-label="Go to next section"
      // base classes first, then custom className last so it overrides if needed
      className={[
        "absolute left-1/2 -translate-x-1/2",
        "p-3 rounded-full border border-arch-accent/30",
        "hover:border-arch-accent hover:bg-arch-accent/10",
        "transition-all duration-300 animate-float",
        "z-20",
        className,
      ].join(" ")}
    >
      <ChevronDown className="w-6 h-6 text-arch-accent" />
    </button>
  );
}
