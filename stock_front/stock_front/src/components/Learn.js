import React, { useState } from "react";
import "../style/Learn.css";

const Learn = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      question: "What is Bitcoin?",
      options: ["A stock", "A cryptocurrency", "A bank", "A bond"],
      answer: "A cryptocurrency",
    },
    {
      question: "What does NFT stand for?",
      options: [
        "Non-Fungible Token",
        "New Financial Trend",
        "National Fund Trust",
        "Non-Formal Trade",
      ],
      answer: "Non-Fungible Token",
    },
    {
      question: "What is the primary function of a stock exchange?",
      options: [
        "Issuing loans",
        "Facilitating stock trading",
        "Printing money",
        "Managing banks",
      ],
      answer: "Facilitating stock trading",
    },
    {
      question: "Which of these is a well-known cryptocurrency?",
      options: ["Ethereum", "Dollar", "Euro", "Yen"],
      answer: "Ethereum",
    },
    {
      question: "What does IPO stand for?",
      options: [
        "Initial Public Offering",
        "International Payment Option",
        "Internal Profit Order",
        "Investment Portfolio Offering",
      ],
      answer: "Initial Public Offering",
    },
    {
      question: "Which company is known for electric vehicles and is publicly traded?",
      options: ["Tesla", "Coca-Cola", "Amazon", "McDonald's"],
      answer: "Tesla",
    },
    {
      question: "What is a dividend?",
      options: [
        "A type of bond",
        "A company's profit shared with shareholders",
        "A loan from the government",
        "An investment strategy",
      ],
      answer: "A company's profit shared with shareholders",
    },
    {
      question: "What is diversification in investing?",
      options: [
        "Investing in multiple assets to reduce risk",
        "Selling all stocks",
        "Buying only one type of stock",
        "Avoiding investments",
      ],
      answer: "Investing in multiple assets to reduce risk",
    },
    {
      question: "Which organization regulates stock markets in the USA?",
      options: ["SEC", "IMF", "WHO", "NASA"],
      answer: "SEC",
    },
    {
      question: "What is market capitalization?",
      options: [
        "Total value of a company's shares",
        "A government fund",
        "An investment strategy",
        "A type of stock",
      ],
      answer: "Total value of a company's shares",
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setQuizIndex((prevIndex) => (prevIndex + 1) % questions.length); // Loop back to the first question
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Learn</h1>
      <p className="text-lg">
        Learn about the latest trends in cryptocurrency and stock markets.
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
        <ul>
          <li>Understanding Stock Market Basics</li>
          <li>How Cryptocurrency Works</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Top Videos</h2>
        <div className="flex space-x-4">
          <a
            href="https://youtube.com/shorts/5cBNPJw4cW4?si=cUZmwosg8UgX6F-I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Top cryptos to hold in 2025
          </a>
          <a
            href="https://youtu.be/W0vEdn2jwyI?si=UjiG8lfQngx1-_Dt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Most Humble Crypto Billionaire
          </a>
          <a
            href="https://youtu.be/tmryHfunyQ4?si=s2SWgAW615zrZ7yr"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to invest in stocks
          </a>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Quiz</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-lg">
            Question {quizIndex + 1}/{questions.length}:{" "}
            {questions[quizIndex].question}
          </p>
          <ul>
            {questions[quizIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer p-2 hover:bg-gray-200 rounded ${
                  selectedOption === option
                    ? option === questions[quizIndex].answer
                      ? "bg-green-200"
                      : "bg-red-200"
                    : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          {showFeedback && (
            <div className="mt-4">
              {selectedOption === questions[quizIndex].answer ? (
                <p className="text-green-600 font-semibold">Correct!</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Incorrect! The correct answer is "
                  {questions[quizIndex].answer}".
                </p>
              )}
              <button
                onClick={handleNextQuestion}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Learn;
