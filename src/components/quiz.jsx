import React, { useState } from "react";
import Result from "../components/result";

const Quiz = () => {
  const questions = [
    {
      question: "What excites you the most?",
      options: [
        "Building apps",
        "Understanding how machines work",
        "Solving problems",
        "Helping others",
        "Making things look good",
      ],
    },
    {
      question: "How would your friends describe you?",
      options: ["Creative", "Analytical", "Empathetic", "Curious", "Organized"],
    },
    {
      question: "Which activity sounds more appealing?",
      options: [
        "Designing a cool poster",
        "Fixing a broken device",
        "Teaching someone new skills",
        "Writing a blog post",
        "Automating boring tasks",
      ],
    },
    {
      question: "How comfortable are you with numbers?",
      options: [
        "Love them",
        "Neutral",
        "Hate them",
        "Scared of them",
        "Okay-ish",
      ],
    },
    {
      question: "What’s your dream work environment?",
      options: [
        "Fast-paced startup",
        "Quiet office",
        "Remote work",
        "Collaborative team",
        "Freelance freedom",
      ],
    },
    {
      question: "Pick a hobby you enjoy or would like to try",
      options: [
        "Drawing/Art",
        "Playing with gadgets",
        "Public speaking",
        "Gaming",
        "Organizing events",
      ],
    },
    {
      question: "How do you learn best?",
      options: [
        "Hands-on practice",
        "Watching videos",
        "Reading books",
        "Explaining to others",
        "Following tutorials",
      ],
    },
    {
      question: "Which of these would you prefer to create?",
      options: [
        "A mobile app",
        "An AI chatbot",
        "An online course",
        "A blog site",
        "A business dashboard",
      ],
    },
    {
      question: "What frustrates you most?",
      options: [
        "Ugly websites",
        "Things that don’t work",
        "Not being heard",
        "Too much theory",
        "Repetitive tasks",
      ],
    },
    {
      question: "What kind of problems do you enjoy solving?",
      options: [
        "Visual design problems",
        "Technical errors",
        "Communication challenges",
        "Learning difficulties",
        "Workflow issues",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const progressPercent = (currentQuestion / questions.length) * 100;

  if (showResult) {
    return <Result answers={answers} />;
  }

  if (showIntro) {
    return (
      <section className="h-screen flex flex-row items-center justify-center ">
        <div className="max-w-xl mx-auto p-6 text-center bg-white shadow-md rounded-md mt-10 items- justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to the Tech Path Quiz
          </h2>
          <p className="mb-4 text-gray-700">
            This short quiz is designed for beginners who are curious about
            tech. We'll ask you 10 easy and personal questions. Based on your
            answers, we’ll suggest tech areas you’re naturally aligned with.
          </p>
          <div className="flex items-center justify-center mb-4">
            <input
              type="checkbox"
              id="agree"
              className="mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="agree" className="text-gray-600">
              I understand and agree to participate.
            </label>
          </div>
          <button
            onClick={() => agreed && setShowIntro(false)}
            disabled={!agreed}
            className={`px-6 py-2 font-semibold text-white rounded-md ${
              agreed
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Start Quiz
          </button>
        </div>

        <div>
          <img src="/scr/assets/child.png" alt="" />
        </div>
      </section>
    );
  }

  return (
    <section className= "bg-black flex h-screen items-center justify center" >
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg shadow-white-800 shadow-opacity-50 rounded-md mt-10 w-1/2">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
        <div
          className="h-3 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold mb-4">
        {questions[currentQuestion].question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="form-checkbox text-green-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmitAnswer}
        disabled={selectedOption === null}
        className={`mt-6 px-6 py-2 rounded-md font-semibold text-white ${
          selectedOption
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {currentQuestion + 1 === questions.length
          ? "Finish"
          : "Submit & Continue"}
      </button>
    </div>
    </section>
  );
};

export default Quiz;
