interface Company {
  name: string;
  role: string; // placeholder — will be replaced
  description: string; // placeholder — will be replaced
  link: string | null; // placeholder — will be replaced
  note?: string;
}

const companies: Company[] = [
  {
    name: "AvePoint Inc",
    role: "Software Engineer",
    description:
      "Building scalable data governance solutions used by enterprises worldwide. Working across the full stack with a focus on backend systems and cloud infrastructure.",
    link: null,
    note: "current",
  },
  {
    name: "FPT Software",
    role: "Senior Developer",
    description:
      "Delivered mission-critical applications for global clients across automotive, healthcare, and finance sectors. Led technical initiatives and mentored junior developers.",
    link: null,
    note: "ex company",
  },
  {
    name: "PETRONAS",
    role: "Backend Developer",
    description:
      "Developed and maintained internal tools and systems supporting downstream operations. Worked closely with cross-functional teams to deliver reliable software.",
    link: null,
  },
  {
    name: "DIALOG",
    role: "Software Developer",
    description:
      "Contributed to engineering software solutions for the oil and gas industry. Focused on building robust backend services and improving deployment pipelines.",
    link: null,
  },
  {
    name: "Bank Syariah Indonesia",
    role: "Developer",
    description:
      "Supported digital banking initiatives by developing and integrating backend services. Ensured reliability and compliance in a highly regulated environment.",
    link: null,
  },
];

export function Experience() {
  return (
    <section className="bg-apple-canvas w-full flex justify-center">
      <div className="max-w-apple-text w-full px-6 py-apple-section max-sm:py-12">
        {/* ── Section heading ── */}
        <h2 className="text-display-md text-apple-ink text-center">
          Where I&rsquo;ve Worked
        </h2>

        {/* ── 2-column grid (1 column on mobile) ── */}
        <div className="mt-apple-xxl grid grid-cols-1 sm:grid-cols-2 gap-apple-lg">
          {companies.map((company, i) => (
            <div
              key={company.name}
              className="card-utility text-left group/card flex gap-apple-lg max-sm:gap-apple-md"
            >
              {/* Logo placeholder */}
              <div className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-apple-md bg-apple-parchment border border-apple-hairline flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] text-apple-ink-soft font-semibold tracking-wide">
                  {company.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)
                    .toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex flex-col">
                {/* Name + note */}
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-body-strong text-apple-ink">
                    {company.name}
                  </h3>
                  {company.note && (
                    <span className="text-[11px] text-apple-ink-soft bg-apple-parchment px-2 py-0.5 rounded-apple-pill font-medium">
                      {company.note}
                    </span>
                  )}
                </div>

                {/* Role */}
                <p className="text-caption-strong text-apple-ink-soft mt-0.5">
                  {company.role}
                </p>

                {/* Description */}
                <p className="text-caption text-apple-ink-soft mt-2 leading-relaxed">
                  {company.description}
                </p>

                {/* CTA placeholder */}
                <div className="mt-apple-md">
                  {company.link ? (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption-strong text-apple-blue hover:text-apple-blue-focus transition-colors"
                    >
                      Learn more →
                    </a>
                  ) : (
                    <span className="text-caption text-apple-ink-soft italic">
                      More details soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
