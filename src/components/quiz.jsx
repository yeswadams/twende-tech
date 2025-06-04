// Quiz.jsx
import React, { useState } from "react";
import Result from "../components/result";

const questions = [
  {
    question: "When you were a kid, what kind of toys or activities did you enjoy most?",
    options: [
      { text: "Building things (Legos, puzzles)", value: "developer" },
      { text: "Drawing, coloring, storytelling", value: "designer" },
      { text: "Playing games or exploring new gadgets", value: "tester" },
      { text: "Talking to people, helping friends", value: "support" },
      { text: "Making lists, organizing stuff", value: "product" },
      { text: "Trying new apps or websites", value: "marketing" },
    ],
  },
  {
    question: "You’re given a new smartphone. What’s the first thing you’d do?",
    options: [
      { text: "Customize the look and layout", value: "designer" },
      { text: "Explore all the settings and test stuff", value: "tester" },
      { text: "Download and try out useful apps", value: "developer" },
      { text: "Call or message people to test it", value: "support" },
      { text: "Take notes about what’s cool or annoying", value: "product" },
      { text: "Think of ways to improve it", value: "marketing" },
    ],
  },
  {
    question: "Which school subject did you enjoy most?",
    options: [
      { text: "Art / Music / Literature", value: "designer" },
      { text: "Math / Physics", value: "developer" },
      { text: "Business / Social Studies", value: "marketing" },
      { text: "English / Languages", value: "support" },
      { text: "Computer studies (even if optional)", value: "developer" },
      { text: "I didn’t enjoy school much 😅", value: "tester" },
    ],
  },
  {
    question: "If your friend is launching a small business, what would you naturally offer to help with?",
    options: [
      { text: "Design a cool logo or flyer", value: "designer" },
      { text: "Help set up a website or social media", value: "developer" },
      { text: "Write captions or product descriptions", value: "marketing" },
      { text: "Help them talk to customers", value: "support" },
      { text: "Organize their plans or files", value: "product" },
      { text: "Research competitors or tools", value: "data" },
    ],
  },
  {
    question: "How do you solve a problem you don’t understand?",
    options: [
      { text: "Watch a YouTube tutorial", value: "support" },
      { text: "Break it down and try step-by-step", value: "developer" },
      { text: "Ask someone to explain it", value: "support" },
      { text: "Try to Google and experiment", value: "tester" },
      { text: "Avoid it unless I really need to", value: "designer" },
      { text: "Think about it while doing something else", value: "product" },
    ],
  },
  {
    question: "What makes you feel most satisfied after a task?",
    options: [
      { text: "Seeing something look beautiful and complete", value: "designer" },
      { text: "Knowing I built or fixed something", value: "developer" },
      { text: "Helping someone and seeing them smile", value: "support" },
      { text: "Organizing and checking off all items", value: "product" },
      { text: "Sharing or teaching others", value: "support" },
      { text: "Getting compliments or feedback", value: "marketing" },
    ],
  },
  {
    question: "Which quote resonates with you the most?",
    options: [
      { text: "Design is intelligence made visible.", value: "designer" },
      { text: "Code is like poetry it has to be clean.", value: "developer" },
      { text: "People don’t buy products, they buy stories.", value: "marketing" },
      { text: "I love it when a plan comes together.", value: "product" },
      { text: "Numbers don’t lie.", value: "data" },
      { text: "The best way to predict the future is to create it.", value: "developer" },
    ],
  },
  {
    question: "What role do you naturally take in a group project?",
    options: [
      { text: "The creative – brings ideas and visual flavor", value: "designer" },
      { text: "The builder – puts things together and makes it work", value: "developer" },
      { text: "The explainer – talks to clients, simplifies things", value: "support" },
      { text: "The organizer – sets the structure and timelines", value: "product" },
      { text: "The researcher – gathers facts, data, and insights", value: "data" },
      { text: "The supporter – keeps the energy and people up", value: "support" },
    ],
  },
  {
    question: "How comfortable are you with learning new tools or platforms?",
    options: [
      { text: "I love it – I explore every button", value: "developer" },
      { text: "I’m curious but need guidance", value: "support" },
      { text: "I follow tutorials or need help from friends", value: "tester" },
      { text: "I prefer if someone sets it up for me", value: "designer" },
      { text: "I get frustrated but try anyway", value: "product" },
      { text: "I avoid it until I must", value: "marketing" },
    ],
  },
  {
    question: "Imagine a dream work day — what does it look like?",
    options: [
      { text: "Creating visuals or brainstorming ideas", value: "designer" },
      { text: "Solving logic puzzles or writing scripts", value: "developer" },
      { text: "Interacting with people or helping customers", value: "support" },
      { text: "Managing a project or team tasks", value: "product" },
      { text: "Analyzing patterns, spreadsheets, or graphs", value: "data" },
      { text: "Testing things and giving feedback", value: "tester" },
    ],
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    setAnswers([...answers, value]);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) return <Result answers={answers} />;

  return (
    <div className="max-w-xl mx-auto mt-40 py-10 px-4 items-center justify-center">
      <h2 className="text-2xl font-semibold mb-6">{questions[current].question}</h2>
      <ul className="space-y-4">
        {questions[current].options.map((option, idx) => (
          <li key={idx}>
            <button
              className="w-full bg-white border border-gray-300 hover:bg-gray-100 p-4 rounded-lg text-left"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;

