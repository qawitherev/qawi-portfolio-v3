import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string | null; // placeholder — replace with actual image path
  tags: string[];
  link: string | null;
}

const projects: Project[] = [
  {
    title: "Open Source Project One",
    description:
      "A developer tool that simplifies CI/CD pipeline configuration across multiple cloud providers. Built from frustration with vendor lock-in.",
    image: null,
    tags: ["Go", "Docker", "GitHub Actions"],
    link: null,
  },
  {
    title: "Infrastructure Toolkit",
    description:
      "Infrastructure-as-code patterns and reusable Terraform modules for bootstrapping production AWS environments in minutes instead of days.",
    image: null,
    tags: ["Terraform", "AWS", "HCL"],
    link: null,
  },
  {
    title: "DevEx Utilities",
    description:
      "A collection of CLI tools and VS Code extensions that automate the boring parts of daily development — environment setup, log tailing, and config management.",
    image: null,
    tags: ["TypeScript", "Node.js", "VS Code API"],
    link: null,
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-apple-tile-1 w-full flex justify-center overflow-hidden">
      <div className="max-w-apple-text w-full px-6 py-apple-section max-sm:py-12 text-center">
        {/* ── Section heading ── */}
        <h2 className="text-display-md text-white">Projects</h2>

        {/* ── Carousel ── */}
        <div className="mt-apple-xxl relative">
          {/* Viewport */}
          <div className="overflow-hidden rounded-apple-lg">
            {/* Track */}
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-apple-tile-2 border border-white/10 rounded-apple-lg overflow-hidden text-left">
                    {/* Image / banner placeholder */}
                    <div className="aspect-[16/9] w-full bg-apple-tile-3 flex items-center justify-center border-b border-white/5">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-3 text-apple-ink-soft">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="opacity-30"
                          >
                            <rect
                              x="4"
                              y="8"
                              width="40"
                              height="32"
                              rx="3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <rect
                              x="12"
                              y="16"
                              width="24"
                              height="16"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            />
                            <circle cx="20" cy="12" r="2" fill="currentColor" />
                          </svg>
                          <span className="text-caption">Project Screenshot</span>
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-apple-lg max-sm:p-5">
                      {/* Title */}
                      <h3 className="text-body-strong text-white leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-caption text-apple-ink-soft mt-2 leading-relaxed max-w-prose">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-apple-md">
                        {project.tags.map((tag) => (
                          <span key={tag} className="chip-project">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary-pill mt-apple-lg inline-block"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls row: arrows + dots ── */}
          <div className="flex items-center justify-between mt-apple-lg">
            {/* Left arrow */}
            <button
              onClick={goPrev}
              className="carousel-arrow"
              aria-label="Previous project"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={goNext}
              className="carousel-arrow"
              aria-label="Next project"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
