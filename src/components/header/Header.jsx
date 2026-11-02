import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Project", "#project"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-5 py-3 text-[#707b8e] sm:px-8 lg:px-0">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl"
        >
          <i className="ri-code-s-slash-line rounded-xl bg-[#02172a] p-1 text-[#0891b3]"></i>
          <span>
            Suhail<span className="text-[#0891b3]">.dev</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 font-bold md:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} className="hover:text-[#2bd5ff]" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/suhailsalmanii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="ri-github-line text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/suhail-salmani-2149452b4/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-fill text-2xl"></i>
          </a>
          <a href="#contact" className="text-2xl">
            <i class="ri-phone-fill"></i>
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-2xl text-white hover:text-[#2bd5ff] md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 px-5 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                className="rounded-md px-3 py-2 font-semibold hover:bg-white/5 hover:text-[#2bd5ff]"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="flex gap-5 px-3 pt-2">
              <a
                href="https://github.com/suhailsalmanii"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="ri-github-line text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/suhail-salmani-2149452b4/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <a href="#contact" className="text-2xl">
                <i class="ri-phone-fill"></i>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
