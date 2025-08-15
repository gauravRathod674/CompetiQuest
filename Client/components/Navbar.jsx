"use client";
import { useState, useEffect } from "react";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiHome,
  FiUser,
  FiLogIn,
  FiBarChart2,
  FiCpu,
  FiType,
  FiGlobe,
  FiCode,
} from "react-icons/fi";
import Image from "next/image";

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

const NavLink = ({ children, href }) => (
  <a
    href={href}
    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </a>
);

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Aptitude",
    "Reasoning",
    "English",
    "General Knowledge",
    "Programming",
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group flex items-center gap-1 pb-1">
        <span>Category</span>
        <FiChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <span className="absolute -bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </button>
      {isOpen && (
        <div className="absolute top-full pt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-lg py-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {cat}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarDropdown = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2.5 px-4 text-left hover:bg-accent/10 hover:text-accent rounded-md transition-colors duration-200 group"
      >
        <span className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </span>
        <FiChevronDown
          size={16}
          className={`transition-transform duration-300 text-muted-foreground group-hover:text-accent ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="pl-12 space-y-1 mt-1">{children}</div>}
    </div>
  );
};

const Sidebar = ({ isOpen, closeSidebar }) => {
  const categories = {
    Aptitude: {
      icon: <FiBarChart2 />,
      subItems: ["Time and Work", "Profit and Loss", "Percentages"],
    },
    Reasoning: {
      icon: <FiCpu />,
      subItems: ["Puzzles", "Seating Arrangement", "Coding-Decoding"],
    },
    English: {
      icon: <FiType />,
      subItems: ["Reading Comprehension", "Grammar", "Vocabulary"],
    },
    "General Knowledge": {
      icon: <FiGlobe />,
      subItems: ["Current Affairs", "History", "Geography"],
    },
    Programming: {
      icon: <FiCode />,
      subItems: ["Data Structures", "Algorithms", "System Design"],
    },
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-background/80 backdrop-blur-xl border-r border-border/50 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/default_profile_photo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-foreground">gauravRathod674</p>
              </div>
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200"
            >
              <FiX />
            </button>
          </div>

          <div className="p-4">
            <div className="relative">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-accent/10 border border-transparent text-foreground placeholder:text-muted-foreground rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <nav className="flex-grow px-4 space-y-1.5 overflow-y-auto">
            <a
              href="#"
              className="flex items-center gap-3 py-2.5 px-4 hover:bg-accent/10 hover:text-accent rounded-md transition-colors duration-200"
            >
              <FiHome /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2.5 px-4 hover:bg-accent/10 hover:text-accent rounded-md transition-colors duration-200"
            >
              <FiUser /> User Profile
            </a>
            {Object.entries(categories).map(([title, { icon, subItems }]) => (
              <SidebarDropdown key={title} title={title} icon={icon}>
                {subItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-1.5 px-4 text-sm text-muted-foreground hover:text-accent rounded-md hover:bg-accent/10"
                  >
                    {item}
                  </a>
                ))}
              </SidebarDropdown>
            ))}
          </nav>

          <div className="p-4 border-t border-border/50">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg font-semibold transition-colors">
              <FiLogIn />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleDarkMode = (event) => {
    const isDark = document.documentElement.classList.contains("dark");

    // Check for View Transitions API support
    if (!document.startViewTransition) {
      // Fallback for unsupported browsers
      setDarkMode(!isDark);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", !isDark ? "dark" : "light");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start the view transition
    const transition = document.startViewTransition(() => {
      setDarkMode(!isDark);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", !isDark ? "dark" : "light");
    });

    // Animate the circular reveal
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: !isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: !isDark
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
        }
      );
    });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-muted/10 backdrop-blur-lg border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 -ml-2 text-foreground cursor-pointer"
              >
                <FiMenu size={24} />
              </button>
              <a href="#" className="flex items-center gap-2">
                <Image
                  src={darkMode ? "/Dark_Logo.png" : "/Light_Logo.png"}
                  alt="Logo"
                  width={35}
                  height={35}
                />
                <span className="text-2xl font-bold hidden sm:inline">
                  <span className="text-foreground">Competi</span>
                  <span className="text-accent">Quest</span>
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#">Home</NavLink>
              <CategoryDropdown />
              <NavLink href="#">Mental Maths</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="relative p-2.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200"
              >
                <FiSun
                  className={`transition-all duration-300 transform ${
                    darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                  size={18}
                />
                <FiMoon
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 transform ${
                    darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                  size={18}
                />
              </button>
              <a
                href="#"
                className="hidden sm:block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </header>
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />
    </>
  );
}
