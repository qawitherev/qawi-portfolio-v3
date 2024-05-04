interface NavItem {
  label: string;
  href?: string;
  onNavItemClicked?: () => void;
}

export function NavBar() {
  const navItems: NavItem[] = [
    { label: "Summary", onNavItemClicked() {
      clickNavItemSummary()
    } },
    { label: "Tech-Stacks", onNavItemClicked() {
      clickTechStacksSummary()
    } },
    {
      label: "Resume",
      onNavItemClicked() {
        clickNavItemResume();
      },
    },
  ];

  function clickNavItemSummary() {
    console.info("click navitem summary");
  }

  function clickTechStacksSummary() {
    console.info("click navitem techStacks");
  }
  function clickNavItemResume() {
    window.open(
      "https://raw.githubusercontent.com/qawitherev/qawi-portfolio/master/public/AbdulQawi_Resume_Dec2023.pdf",
      "_blank"
    );
  }

  return (
    <div className="flex md:flex-row text-white pt-6">
      <div className="flex w-fit font-bold text-2xl">Quest For Quality</div>
      <ul className="flex md:flex-row md:flex-grow md:justify-end md:space-x-4 text-lg">
        {navItems.map((item) => (
          <li key={item.label}>
            <div onClick={item.onNavItemClicked}>
              <a
                key={item.label}
                className="inline-block transition-all duration-500 hover:scale-125"
                href={item.href}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
