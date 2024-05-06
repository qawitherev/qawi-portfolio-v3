import { Link } from "react-scroll";
import { DownloadResume } from "../utils/DownloadResume";

interface NavItem {
  label: string;
  href?: string;
  onNavItemClicked?: () => void;
}

export function NavBar() {
  const navItems: NavItem[] = [
    {
      label: "Summary",
      href: 'summary',
    },
    {
      label: "Tech-Stacks",
      href: 'techStacks',
    },
    {
      label: "Resume",
      onNavItemClicked() {
        DownloadResume()
      },
    },
  ];

  return (
    <div className="flex md:flex-row text-white pt-6">
      <div className="flex w-fit font-bold text-xl md:text-2xl">
        Quest For Quality
      </div>
      <ul className="md:flex md:flex-row md:flex-grow md:justify-end md:space-x-4 text-lg hidden cursor-pointer">
        {navItems.map((item) => (
          <li key={item.label}>
            <div onClick={item.onNavItemClicked}>
              {item.href && (<Link
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block transition-all duration-500 hover:scale-125"
              >
                {item.label}
              </Link>)}
              {item.onNavItemClicked && (
                <p key={item.label} className="inline-block transition-all duration-500 hover:scale-125">{item.label}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
