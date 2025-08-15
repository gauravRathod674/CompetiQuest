"use client";
import { 
  FiSend, FiTwitter, FiInstagram, FiLinkedin, FiHome, 
  FiInfo, FiMail, FiCpu, FiBarChart2, FiType, FiGlobe, FiCode, FiZap
} from "react-icons/fi";

const Logo = () => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
      <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.9999 21.3333C17.7777 21.3333 16.2221 21.3333 14 21.3333C10.5333 21.3333 8.66663 19.4667 8.66663 16C8.66663 12.5333 10.5333 10.6667 14 10.6667C16.2221 10.6667 17.7777 10.6667 19.9999 10.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

const FooterLink = ({ icon, text, href }) => (
    <li>
        <a href={href} className="flex items-center gap-3 hover:text-accent transition-colors">
            {icon}
            <span>{text}</span>
        </a>
    </li>
);

export default function Footer() {
  const quickLinks = [
    { text: "Home", icon: <FiHome size={16} />, href: "#" },
    { text: "About", icon: <FiInfo size={16} />, href: "#" },
    { text: "Contact", icon: <FiMail size={16} />, href: "#" },
    { text: "Mental Maths", icon: <FiZap size={16} />, href: "#" },
  ];
  const categories = [
    { text: "Aptitude", icon: <FiBarChart2 size={16} />, href: "#" },
    { text: "Reasoning", icon: <FiCpu size={16} />, href: "#" },
    { text: "English", icon: <FiType size={16} />, href: "#" },
    { text: "General Knowledge", icon: <FiGlobe size={16} />, href: "#" },
    { text: "Programming", icon: <FiCode size={16} />, href: "#" },
  ];
  
  return (
    <footer className="bg-secondary text-muted-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Branding & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-2xl font-bold text-foreground">CompetiQuest</span>
            </a>
            <p className="text-sm max-w-xs">
              Your one-stop destination for AI-powered competitive exam preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <FooterLink key={link.text} {...link} />
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-3">
              {categories.map(cat => (
                <FooterLink key={cat.text} {...cat} />
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates and tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-background border border-border/70 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="bg-accent text-accent-foreground p-2.5 rounded-r-md hover:bg-accent/90 transition-colors">
                <FiSend />
              </button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CompetiQuest. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors"><FiTwitter /></a>
            <a href="#" className="hover:text-accent transition-colors"><FiInstagram /></a>
            <a href="#" className="hover:text-accent transition-colors"><FiLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
