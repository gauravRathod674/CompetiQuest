// components/home/AboutUsSection.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

// --- Word Component for revealing text letter by letter ---
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

// --- Main About Us Section Component ---
export default function AboutUsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.07 });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  
  const text = "At CompetiQuest, we believe success should be accessible to everyone. Our mission is to provide a modern, intelligent, and engaging platform that equips learners with the skills, knowledge, and confidence they need to excel. We set out to change the stressful and scattered nature of traditional prep by building a centralized hub where aspirants can practice, learn, and improve — guided by AI-powered tools and real-time performance tracking.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative bg-background py-32 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Title and CTA */}
        <div className="max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Fueled by Passion, Driven by Purpose.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Our Full Story
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Animated Storytelling Text */}
        <div className="text-2xl leading-relaxed text-foreground font-medium">
          <p className="flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
