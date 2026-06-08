const stacks = [
  {
    category: "Backend",
    tools: [
      { name: ".NET", logo: null },
      { name: "C#", logo: null },
      { name: "OutSystems", logo: null },
    ],
  },
  {
    category: "Infrastructure",
    tools: [
      { name: "Docker", logo: null },
      { name: "Terraform", logo: null },
      { name: "AWS", logo: null },
    ],
  },
  {
    category: "CI/CD",
    tools: [{ name: "GitHub Actions", logo: null }],
  },
];

export function TechStacks() {
  return (
    <section className="bg-apple-parchment w-full flex justify-center">
      <div className="max-w-apple-text w-full px-6 py-apple-section max-sm:py-12">
        <h2 className="text-display-md text-apple-ink text-center">
          What I Work With
        </h2>

        <div className="mt-apple-xxl grid grid-cols-1 sm:grid-cols-3 gap-apple-lg">
          {stacks.map((stack) => (
            <div key={stack.category} className="card-utility">
              {/* Category label */}
              <span className="text-caption-strong text-apple-ink-soft uppercase tracking-wide">
                {stack.category}
              </span>

              {/* Tool chips */}
              <div className="mt-apple-md flex flex-wrap gap-2">
                {stack.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="chip-tool"
                  >
                    {/* Logo placeholder — replace tool.logo with an <img> */}
                    <div className="w-6 h-6 rounded-apple-xs bg-apple-parchment flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] text-apple-ink-soft font-semibold">
                        {tool.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-body-strong text-apple-ink">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
