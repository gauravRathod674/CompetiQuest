"use client";

export default function Footer() {
  return (
    <footer className="bg-[] dark:bg-darkPrimary text-darkText dark:text-gray-300 py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold text-accent">CompetiQuest</h3>
          <p className="mt-2 text-sm">
            Your one-stop destination for competitive exam preparation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-accent">Home</a></li>
            <li><a href="#" className="hover:text-accent">Categories</a></li>
            <li><a href="#" className="hover:text-accent">About</a></li>
            <li><a href="#" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent">🐦</a>
            <a href="#" className="hover:text-accent">📘</a>
            <a href="#" className="hover:text-accent">📸</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6">
        © {new Date().getFullYear()} CompetiQuest. All rights reserved.
      </div>
    </footer>
  );
}
