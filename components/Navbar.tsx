"use client";
import { FC, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLinks {
  name: string;
  href: string;
}

const navLinks: NavLinks[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Highlight active link on scroll
 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150;
    const windowBottom = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    navLinks.forEach((link, index) => {
      const section = document.querySelector(link.href);
      if (section) {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(link.href);
        }
        if (
          index === navLinks.length - 1 &&
          windowBottom >= documentHeight - 5
        ) {
          setActiveSection(link.href);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-yellow-400"
        >
          Durga Prasad
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 hover:text-yellow-500 ${
                activeSection === link.href
                  ? "text-yellow-500 font-semibold"
                  : "text-gray-800 dark:text-yellow-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-yellow-400"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md md:hidden transition-transform duration-300">
          <div className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 hover:text-yellow-500 ${
                  activeSection === link.href
                    ? "text-yellow-500 font-semibold"
                    : "text-gray-800 dark:text-yellow-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
