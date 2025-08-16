// page.js
"use client";
import Squares from "@/components/home/Squares";
import { useState } from "react";
import LoginPage from "@/components/login/LoginPage";
import SignupPage from "@/components/login/SignupPage";

export default function Login() {
  const [themeColors, setThemeColors] = useState({
    border: "oklch(0.15 0 0 / 0.1)",
    hover: "#222",
  });

  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle the flip state
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden p-4">
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100">
        <Squares
          speed={0.3}
          squareSize={75}
          direction="diagonal"
          borderColor={themeColors.border || "#999"}
          hoverFillColor={themeColors.hover || "#222"}
        />
      </div>

      <div className="absolute inset-0 -z-10" style={{ perspective: "1000px" }}>
        <div
          className="absolute bottom-0 left-0 right-0 h-[150%] origin-bottom"
          style={{
            transform: "rotateX(55deg)",
            maskImage: "linear-gradient(to top, black 30%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 30%, transparent 80%)",
          }}
        >
          <Squares
            speed={0.4}
            squareSize={50}
            direction="diagonal"
            borderColor={themeColors.border}
            hoverFillColor={themeColors.hover}
          />
        </div>
      </div>
      <div
        className="relative z-10 w-full max-w-sm h-100 transform-gpu transition-transform duration-700 "
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <LoginPage onFlip={handleFlip} />
        <SignupPage onFlip={handleFlip} />
      </div>
    </div>
  );
}
