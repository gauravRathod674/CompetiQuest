// app/[category]/[subcategory]/[pageNumber]/page.jsx
"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import Squares from "../../../../components/home/Squares";
import { allQuestions } from "../../../../lib/data";
import QuestionLayout, { Pagination } from "../../../../components/qna/QuestionLayout";

const formatText = (text) =>
  (text || "")
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter();

  const category = params.category;
  const subcategory = decodeURIComponent(params.subcategory || "");
  const pageNumber = parseInt(params.pageNumber, 10) || 1;

  const [themeColors, setThemeColors] = useState({
    border: "oklch(0.15 0 0 / 0.1)",
    hover: "#222",
  });

  const questionsPerPage = 5;
  const slugSub = subcategory.replace(/ /g, "-");
  const questions = allQuestions[category]?.[slugSub] || [];
  const totalQuestions = questions.length;

  const startIdx = (pageNumber - 1) * questionsPerPage;
  const paginatedQuestions = questions.slice(
    startIdx,
    startIdx + questionsPerPage
  );

  useEffect(() => {
    const get = (v) =>
      getComputedStyle(document.documentElement).getPropertyValue(v).trim();
    const fg = get("--color-foreground");
    const border = fg.replace(")", " / 0.1)");
    setThemeColors({ border, hover: fg });
  }, []);

  const handlePageChange = (newPage) => {
    // always push Next.js route for given page
    router.push(`/${category}/${slugSub}/${newPage}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Topic Header */}
      <header className="relative h-64 flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.3}
            squareSize={60}
            direction="diagonal"
            borderColor={themeColors.border}
            hoverFillColor={themeColors.hover}
          />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-accent/10 border border-accent/20 p-4 rounded-2xl"
          >
            <FiClock className="text-accent text-5xl" />
            <div>
              <p className="text-sm text-accent font-semibold">
                {formatText(category)}
              </p>
              <h1 className="text-4xl font-bold text-foreground">
                {formatText(subcategory)}
              </h1>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Questions + Pagination */}
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <QuestionLayout questions={paginatedQuestions} page={pageNumber} />

        <Pagination
          page={pageNumber}
          totalItems={totalQuestions}
          itemsPerPage={questionsPerPage}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
