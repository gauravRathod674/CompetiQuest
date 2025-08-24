
"use client";

import React, { useState } from "react";
import { FiEdit2, FiChevronDown, FiChevronUp, FiCalendar } from "react-icons/fi";
import { useTheme } from "../../app/context/ThemeContext";
import Link from 'next/link'; 


let MotionDiv;
let MotionSpan;
let MotionButton;
let MotionCircle;

try {
  const motion = require('framer-motion');
  MotionDiv = motion.motion.div;
  MotionSpan = motion.motion.span;
  MotionButton = motion.motion.button;
  MotionCircle = motion.motion.circle;
} catch (error) {
 
  MotionDiv = ({ children, ...props }) => <div {...props}>{children}</div>;
  MotionSpan = ({ children, ...props }) => <span {...props}>{children}</span>;
  MotionButton = ({ children, ...props }) => <button {...props}>{children}</button>;
  MotionCircle = (props) => <circle {...props} />;
}

export default function UserProfile() {
  const [openCategory, setOpenCategory] = useState(null);
  const { darkMode } = useTheme();
  
  const primaryColor = "oklch(0.536 0.17 21.3)";
  
  const profile = {
    username: "Kavyaa11",
    solved: 413,
    total: 3656,
    attempting: 7,
    streak: 16,
    maxStreak: 42,
    easy: { solved: 168, total: 890 },
    medium: { solved: 212, total: 1904 },
    hard: { solved: 33, total: 862 },
    topics: [
      { 
        name: "Aptitude", 
        solved: 85, 
        total: 120, 
        percentage: 71, 
        color: primaryColor,
        subcategories: [
          { name: "Time and Work", solved: 15, total: 20, percentage: 75 },
          { name: "Probability", solved: 12, total: 18, percentage: 67 },
          { name: "Percentages", solved: 18, total: 22, percentage: 82 },
          { name: "Ratio and Proportion", solved: 22, total: 30, percentage: 73 },
          { name: "Ages", solved: 18, total: 30, percentage: 60 }
        ]
      },
      { 
        name: "Reasoning", 
        solved: 92, 
        total: 150, 
        percentage: 61, 
        color: primaryColor,
        subcategories: [
          { name: "Logical Deduction", solved: 25, total: 35, percentage: 71 },
          { name: "Pattern Recognition", solved: 20, total: 40, percentage: 50 },
          { name: "Spatial Reasoning", solved: 18, total: 25, percentage: 72 },
          { name: "Verbal Reasoning", solved: 29, total: 50, percentage: 58 }
        ]
      },
      { 
        name: "English", 
        solved: 78, 
        total: 100, 
        percentage: 78, 
        color: primaryColor,
        subcategories: [
          { name: "Grammar", solved: 30, total: 35, percentage: 86 },
          { name: "Vocabulary", solved: 25, total: 30, percentage: 83 },
          { name: "Comprehension", solved: 23, total: 35, percentage: 66 }
        ]
      },
      { 
        name: "GK", 
        solved: 45, 
        total: 80, 
        percentage: 56, 
        color: primaryColor,
        subcategories: [
          { name: "History", solved: 15, total: 20, percentage: 75 },
          { name: "Geography", solved: 12, total: 25, percentage: 48 },
          { name: "Science", solved: 10, total: 20, percentage: 50 },
          { name: "Current Affairs", solved: 8, total: 15, percentage: 53 }
        ]
      },
      { 
        name: "Programming", 
        solved: 107, 
        total: 200, 
        percentage: 54, 
        color: primaryColor,
        subcategories: [
          { name: "Data Structures", solved: 35, total: 60, percentage: 58 },
          { name: "Algorithms", solved: 28, total: 50, percentage: 56 },
          { name: "Databases", solved: 20, total: 40, percentage: 50 },
          { name: "System Design", solved: 24, total: 50, percentage: 48 }
        ]
      }
    ],
  
    calendarData: generateCalendarData()
  };

  
  function generateCalendarData() {
    const months = [];
    const today = new Date();
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 11); 
    
    for (let m = new Date(twelveMonthsAgo); m <= today; m.setMonth(m.getMonth() + 1)) {
      const monthName = m.toLocaleString('default', { month: 'short' });
      const year = m.getFullYear();
      const daysInMonth = new Date(year, m.getMonth() + 1, 0).getDate();
      
      const days = [];
      for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(m.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        // Random number of problems solved (0-5)
        const count = Math.floor(Math.random() * 6);
        days.push({ date: dateStr, day: d, count });
      }
      
      months.push({ name: monthName, year, days });
    }
    
    return months;
  }

  // Function to get color intensity based on count using primary color
  function getColorIntensity(count) {
    if (count === 0) return darkMode ? "bg-gray-700" : "bg-gray-100";
    if (count === 1) return "bg-[oklch(0.536_0.17_21.3/0.3)]";
    if (count === 2) return "bg-[oklch(0.536_0.17_21.3/0.5)]";
    if (count === 3) return "bg-[oklch(0.536_0.17_21.3/0.7)]";
    if (count === 4) return "bg-[oklch(0.536_0.17_21.3/0.8)]";
    return "bg-[oklch(0.536_0.17_21.3)]";
  }

  // Toggle category dropdown
  const toggleCategory = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-10 bg-secondary/35">
 
  <div className="flex flex-col lg:flex-row gap-6 w-full mb-6">
    
    
    <div className={`${darkMode ? "bg-secondary/35" : "bg-white"} rounded-2xl shadow-md p-4 md:p-6 flex items-center border border-border/50 w-full lg:w-1/2`}>
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-accent/20">
        <span className="text-2xl md:text-3xl text-accent">👤</span>
      </div>
      <div className="ml-4 md:ml-6">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">{profile.username}</h2>
        <Link href="/profile/edit">
          <button className="mt-2 flex items-center gap-2 px-4 md:px-6 py-2 bg-accent/20 text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-sm md:text-base">
            <FiEdit2 size={14} />
            Edit Profile
          </button>
        </Link>
      </div>
    </div>


    <div className={`${darkMode ? "bg-secondary/35" : "bg-white"} rounded-xl shadow-sm p-6 pl-19 pr-19 flex items-center justify-between border border-border/40 w-full lg:w-1/2`}>
      {/* Circular Progress - Left side */}
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0 ml-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-accent transition-all duration-700 ease-out"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 - (profile.solved / profile.total) * 2 * Math.PI * 45}
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-base md:text-lg font-bold text-foreground dark:text-white">
            {profile.solved}/{profile.total}
          </p>
          <p className="text-xs text-accent font-medium">✓ Solved</p>
          <p className="text-[10px] text-muted-foreground dark:text-gray-400 mt-0.5">
            {profile.attempting} Attempting
          </p>
        </div>
      </div>
      
      
      <div className="flex-1 ml-6">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="text-right">
            <div className="mb-1">
              <span className="text-sm md:text-base font-medium text-accent dark:text-accent">Easy</span>
            </div>
            <span className="text-xs md:text-sm font-normal text-muted-foreground dark:text-gray-400">
              {profile.easy.solved}/{profile.easy.total}
            </span>
          </div>

          <div className="text-right">
            <div className="mb-1">
              <span className="text-sm md:text-base font-medium text-accent dark:text-accent">Medium</span>
            </div>
            <span className="text-xs md:text-sm font-normal text-muted-foreground dark:text-gray-400">
              {profile.medium.solved}/{profile.medium.total}
            </span>
          </div>

          <div className="text-right">
            <div className="mb-1">
              <span className="text-sm md:text-base font-medium text-accent dark:text-accent">Hard</span>
            </div>
            <span className="text-xs md:text-sm font-normal text-muted-foreground dark:text-gray-400">
              {profile.hard.solved}/{profile.hard.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

 
 
  

      {/* Calendar Section */}
      <div className={`mt-6 w-full  ${darkMode ? "bg-secondary/35" : "bg-white"} rounded-2xl shadow-md p-6 border border-border/50`}>
        <div className="flex items-center mb-4">
          <FiCalendar className="mr-2 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Problem Solving Calendar</h3>
        </div>

        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{profile.streak}</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{profile.maxStreak}</p>
            <p className="text-sm text-muted-foreground">Max Streak</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{profile.solved}</p>
            <p className="text-sm text-muted-foreground">Total Solved</p>
          </div>
        </div>

        <div className="pb-2 overflow-hidden">
          <div className="flex flex-wrap gap-4">
            {profile.calendarData.map((month, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs font-medium mb-2 text-foreground">
                  {month.name}
                </div>

               
                <div className="grid grid-cols-4 gap-1">
                  {month.days.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-4 h-4 rounded-sm flex items-center justify-center text-[10px] ${getColorIntensity(day.count)}
                        ${day.count > 0 ? 'cursor-pointer hover:opacity-80' : ''} ${darkMode && day.count === 0 ? 'text-muted-foreground' : 'text-foreground'}`}
                      title={`${day.date}: ${day.count} problems solved`}
                    >
                      {day.count > 0 ? day.count : ''}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Coverage Section */}
      <div className="mt-6 w-full ">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Topic Coverage</h3>
        <div className="space-y-4">
          {profile.topics.map((topic, index) => (
            <div key={index} className={`${darkMode ? "bg-secondary/35" : "bg-white"} rounded-2xl shadow-md overflow-hidden border border-border/50`}>
              <button 
                className="w-full p-4 flex justify-between items-center text-left hover:bg-accent/5 transition-colors duration-200"
                onClick={() => toggleCategory(index)}
                style={{ backgroundColor: openCategory === index ? `${primaryColor}20` : 'transparent' }}
              >
                <div className="flex items-center">
                  <div className="relative w-5 h-5 mr-3">
                    <svg className="w-5 h-5 transform -rotate-90">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="blue"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke={primaryColor}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 8}
                        strokeDashoffset={2 * Math.PI * 8 - (topic.percentage / 100) * 2 * Math.PI * 8}
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground">{topic.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold mr-3" style={{ color: primaryColor }}>
                    {topic.percentage}%
                  </span>
                  {openCategory === index ? <FiChevronUp className="text-muted-foreground" /> : <FiChevronDown className="text-muted-foreground" />}
                </div>
              </button>
              
              {openCategory === index && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4"
                >
                  {topic.subcategories.map((subtopic, subIndex) => (
                    <div key={subIndex} className={`${darkMode ? "bg-secondary/35" : "bg-white"} rounded-xl shadow-sm p-4 mb-3 hover:shadow-md transition-shadow duration-300 ml-4`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-muted-foreground">
                          {subtopic.name}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: primaryColor }}>
                          {subtopic.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-border/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            backgroundColor: primaryColor, 
                            width: `${subtopic.percentage}%` 
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{subtopic.solved} solved</span>
                        <span>{subtopic.total} total</span>
                      </div>
                    </div>
                  ))}
                </MotionDiv>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}