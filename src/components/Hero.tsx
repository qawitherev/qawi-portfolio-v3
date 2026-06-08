export function Hero() {
  return (
    <section className="bg-apple-tile-1 w-full flex justify-center">
      <div className="max-w-apple-text w-full px-6 py-apple-section sm:py-apple-section max-sm:py-12 text-center">
        {/* Headline */}
        <h1 className="text-hero-display text-white">
          I Build Software That Ships
        </h1>

        {/* Tagline */}
        <p className="text-lead text-white mt-apple-lg max-w-2xl mx-auto">
          Backend, infrastructure, CI/CD — I handle everything between idea and
          production.
        </p>

        {/* What I do / What I don't do */}
        <div className="mt-apple-xl grid grid-cols-1 sm:grid-cols-2 gap-apple-lg max-w-xl mx-auto text-left">
          <div>
            <span className="text-caption-strong text-apple-ink-soft uppercase tracking-wide">
              What I do
            </span>
            <p className="text-body-strong text-white mt-apple-xs">
              Web development (backend-focused), CI/CD pipelines, cloud
              infrastructure, and a bit of everything. I&rsquo;m a generalist
              who ships.
            </p>
          </div>
          <div>
            <span className="text-caption-strong text-apple-ink-soft uppercase tracking-wide">
              What I don&rsquo;t do
            </span>
            <p className="text-body-strong text-white mt-apple-xs">
              UI/UX design, system analysis, formal testing. I just like to
              build.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-apple-xl">
          <a href="mailto:qawitherev@gmail.com" className="btn-primary-pill">
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
