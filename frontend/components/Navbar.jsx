"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Logo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-foreground"
  >
    <path
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9999 21.3333C17.7777 21.3333 16.2221 21.3333 14 21.3333C10.5333 21.3333 8.66663 19.4667 8.66663 16C8.66663 12.5333 10.5333 10.6667 14 10.6667C16.2221 10.6667 17.7777 10.6667 19.9999 10.6667"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "About", href: "#" },
    { name: "Competitions", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-2">
            <Logo />
            <span className="text-2xl font-bold text-foreground">CompetiQuest</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="#"
              className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg shadow-lg hover:bg-accent/90 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors mr-2"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm text-foreground px-4 pt-2 pb-4 space-y-2 border-t border-border">
           {navItems.map((item, idx) => (
              <a key={idx} href={item.href} className="block py-2 font-medium hover:text-accent">
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-4">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
               Login
              </a>
            </div>
        </div>
      )}
    </header>
  );
}