const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/qawi",
    aria: "GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/qawi",
    aria: "LinkedIn profile",
  },
  {
    label: "Email",
    href: "mailto:qawitherev@gmail.com",
    aria: "Send an email",
  },
];

export function Footer() {
  return (
    <footer className="bg-apple-tile-1 w-full flex justify-center">
      <div className="max-w-apple-text w-full px-6 py-apple-section max-sm:py-12 text-center">
        {/* Divider */}
        <div className="border-t border-white/10 mb-apple-xxl max-sm:mb-apple-xl" />

        {/* Headline */}
        <h2 className="text-display-md text-white">Let&rsquo;s Connect</h2>

        {/* Subtext */}
        <p className="text-caption text-apple-ink-soft mt-apple-sm max-w-sm mx-auto leading-relaxed">
          My DM is always open — whether to ask a question or talk business.
        </p>

        {/* CTA */}
        <div className="mt-apple-xl">
          <a href="mailto:qawitherev@gmail.com" className="btn-primary-pill">
            Shoot a Message
          </a>
        </div>

        {/* Social links */}
        <nav
          aria-label="Social links"
          className="mt-apple-xxl max-sm:mt-apple-xl flex items-center justify-center gap-apple-lg max-sm:gap-apple-md"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.aria}
              className="text-caption-strong text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-caption text-white/30 mt-apple-xl max-sm:mt-apple-lg">
          &copy; {new Date().getFullYear()} Abdul Qawi Bin Kamran. Built with
          intention.
        </p>
      </div>
    </footer>
  );
}
