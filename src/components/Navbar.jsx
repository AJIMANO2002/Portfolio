import { useState, useEffect } from "react";

const navLinks = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#skills", label: "Skills" },
  { path: "#portfolio", label: "Portfolio" },
  { path: "#contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "#home";
      navLinks.forEach(({ path }) => {
        const section = document.querySelector(path);
        if (section && section.offsetTop <= scrollPos) {
          current = path;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-[9999]">
      <div className="max-w-6xl w-full mx-auto px-4 py-3 flex flex-wrap justify-between items-center text-white">
        <a href="#home" className="text-6xl font-bold text-red-800">
          𝔸𝕂
        </a>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          {navLinks.map(({ path, label }) => (
            <div key={path} className="relative group">
              <a
                href={path}
                className={`px-1 hover:text-red-800 transition-colors duration-200 ${
                  active === path ? "text-red-800" : ""
                }`}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full px-4 pb-4 space-y-3 font-semibold text-white bg-black z-[9998] md:hidden">
          {navLinks.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={handleClick}
              className={`block hover:text-red-800 transition-colors duration-200 ${
                active === path ? "text-red-800" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
