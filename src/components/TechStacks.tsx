import { useState } from "react";

interface Tool {
  name: string;
  description: string;
  logo: string | null; // placeholder — replace with actual image path
}

interface StackCategory {
  category: string;
  accent: string; // subtle top-bar accent per category
  tools: Tool[];
}

const stacks: StackCategory[] = [
  {
    category: "Backend",
    accent: "#8b8b9e", // muted slate — understated, not a bright rainbow
    tools: [
      {
        name: ".NET",
        description: "REST APIs, background workers, and enterprise services",
        logo: null,
      },
      {
        name: "C#",
        description: "My daily driver — clean, performant, expressive",
        logo: null,
      },
      {
        name: "OutSystems Developer Cloud",
        description: "Low-code acceleration for internal tooling and rapid delivery",
        logo: null,
      },
    ],
  },
  {
    category: "Infrastructure",
    accent: "#7d8c93", // muted steel
    tools: [
      {
        name: "Docker",
        description: "Containerised workloads from local dev to production",
        logo: null,
      },
      {
        name: "Terraform",
        description: "Infrastructure-as-code across AWS and on-prem",
        logo: null,
      },
      {
        name: "AWS",
        description: "EC2, S3, RDS, Lambda — the bits that keep things running",
        logo: null,
      },
    ],
  },
  {
    category: "CI/CD",
    accent: "#8c8c7a", // muted olive
    tools: [
      {
        name: "GitHub Actions",
        description: "Build, test, and deploy — every push, every branch",
        logo: null,
      },
    ],
  },
];

/**
 * LogoPlaceholder
 * Renders the actual logo <img> when `src` is provided,
 * otherwise shows a subtle placeholder ready for the image.
 */
function LogoPlaceholder({
  src,
  alt,
}: {
  src: string | null;
  alt: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (src) {
    return (
      <div className="w-11 h-11 rounded-apple-lg bg-apple-parchment flex items-center justify-center flex-shrink-0 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-apple-lg bg-apple-parchment flex items-center justify-center flex-shrink-0 border border-apple-hairline">
      {/* Subtle grid icon as placeholder */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-apple-ink-soft opacity-40"
      >
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function TechStacks() {
  return (
    <section className="bg-apple-parchment w-full flex justify-center">
      <div className="max-w-apple-text w-full px-6 py-apple-section max-sm:py-12">
        {/* ── Section heading ── */}
        <h2 className="text-display-md text-apple-ink text-center">
          What I Work With
        </h2>

        {/* ── Card grid ── */}
        <div className="mt-apple-xxl grid grid-cols-1 sm:grid-cols-3 gap-apple-lg">
          {stacks.map((stack, i) => (
            <div
              key={stack.category}
              className="card-utility text-left group/card overflow-hidden animate-card-reveal"
              style={{ animationDelay: `${200 + i * 120}ms` } as React.CSSProperties}
            >
              {/* Category label */}
              <span className="text-caption-strong text-apple-ink-soft uppercase tracking-wide">
                {stack.category}
              </span>

              {/* Tool list */}
              <ul className="mt-apple-md space-y-0">
                {stack.tools.map((tool, i) => (
                  <li key={tool.name}>
                    {/* Subtle divider between tools */}
                    {i > 0 && (
                      <div className="my-apple-md border-t border-apple-divider" />
                    )}

                    <div className="flex gap-apple-md">
                      {/* Logo / placeholder */}
                      <LogoPlaceholder
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                      />

                      {/* Name + description */}
                      <div className="min-w-0">
                        <p className="text-body-strong text-apple-ink leading-snug">
                          {tool.name}
                        </p>
                        <p className="text-caption text-apple-ink-soft mt-0.5 leading-snug">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
