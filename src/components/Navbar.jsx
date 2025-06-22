import { useState, useEffect } from "react";

const navLinks = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#skills", label: "Skills" },
  { path: "#service", label: "Service" },
  { path: "#portfolio", label: "Portfolio" },
  { path: "#contact", label: "Contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Listen to scroll and update active nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // Offset for sticky navbar
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
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#home" className="text-6xl font-bold text-red-800">
          𝔸𝕂
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-semibold text-white bg-black">
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