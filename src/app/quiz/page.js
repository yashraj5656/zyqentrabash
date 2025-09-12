"use client";
import React, { useState } from 'react';
import Link from "next/link";

const questions = [
  {
    question: "Which command prints text to the terminal?",
    options: ["print", "echo", "printf", "write"],
    correctAnswer: "echo",
    explanation: "`echo` prints text or variables to the terminal. `printf` is also used for formatted output."
  },
  {
    question: "How do you declare a variable in Bash?",
    options: ["var x=5", "let x=5", "x=5", "declare x=5"],
    correctAnswer: "x=5",
    explanation: "Variables in Bash are declared without keywords, e.g., `x=5`. You can also use `declare` or `typeset` for advanced usage."
  },
  {
    question: "How do you create a function in Bash?",
    options: ["function myFunc() { }", "myFunc() { }", "def myFunc() { }", "Both 1 and 2"],
    correctAnswer: "Both 1 and 2",
    explanation: "In Bash, functions can be declared with `myFunc() { }` or `function myFunc() { }`."
  },
  {
    question: "Which loop iterates over a sequence of numbers in Bash?",
    options: ["for i in {1..5}; do ... done", "while i < 5; do ... done", "for i = 1 to 5", "loop 1..5"],
    correctAnswer: "for i in {1..5}; do ... done",
    explanation: "Bash uses `for i in {start..end}; do ... done` for numeric loops."
  },
  {
    question: "How do you check if a file exists?",
    options: ["if [ -f filename ]; then ... fi", "if exists(filename); then ... fi", "test file filename", "file? filename"],
    correctAnswer: "if [ -f filename ]; then ... fi",
    explanation: "`[ -f filename ]` checks if a regular file exists."
  },
  {
    question: "How do you append output to a file?",
    options: ["> file.txt", ">> file.txt", "< file.txt", "| file.txt"],
    correctAnswer: ">> file.txt",
    explanation: "`>>` appends output to a file, whereas `>` overwrites it."
  },
  {
    question: "How do you make a Bash script executable?",
    options: ["chmod +x script.sh", "execute script.sh", "bash script.sh", "run script.sh"],
    correctAnswer: "chmod +x script.sh",
    explanation: "`chmod +x script.sh` gives execute permissions so you can run it with `./script.sh`."
  },
  {
    question: "How do you read user input into a variable?",
    options: ["read var", "input var", "get var", "scan var"],
    correctAnswer: "read var",
    explanation: "`read var` reads a line of input from the user into the variable `var`."
  },
  {
    question: "Which symbol is used for comments in Bash?",
    options: ["//", "#", "/* */", "<!-- -->"],
    correctAnswer: "#",
    explanation: "Bash uses `#` for single-line comments."
  },
  {
    question: "How do you test if a number is even in Bash?",
    options: ["if [ $n % 2 -eq 0 ]; then ... fi", "if (( $n % 2 == 0 )); then ... fi", "if $n is even", "test $n even"],
    correctAnswer: "if (( $n % 2 == 0 )); then ... fi",
    explanation: "Arithmetic expressions in Bash can be evaluated using `(( ))`. `%` is the modulo operator."
  },
  {
    question: "How do you create an array in Bash?",
    options: ["arr=(1 2 3)", "arr=[1,2,3]", "array 1 2 3", "let arr=(1 2 3)"],
    correctAnswer: "arr=(1 2 3)",
    explanation: "Arrays in Bash are declared using parentheses: `arr=(val1 val2 val3)`."
  },
  {
    question: "Which command lists files in a directory?",
    options: ["dir", "ls", "list", "show"],
    correctAnswer: "ls",
    explanation: "`ls` lists files and directories. `dir` may work on some systems but `ls` is standard."
  },
  {
    question: "How do you check if a variable is empty?",
    options: ["if [ -z $var ]; then ... fi", "if empty($var); then ... fi", "if $var == ''; then ... fi", "if test $var null"],
    correctAnswer: "if [ -z $var ]; then ... fi",
    explanation: "`[ -z $var ]` returns true if the variable is empty."
  },
  {
    question: "How do you run a script in the background?",
    options: ["./script.sh &", "bg script.sh", "run script.sh &", "script.sh background"],
    correctAnswer: "./script.sh &",
    explanation: "Appending `&` runs the command in the background."
  },
  {
    question: "How do you pass arguments to a Bash script?",
    options: ["$1, $2, ...", "args[0], args[1]", "param(1), param(2)", "input[1], input[2]"],
    correctAnswer: "$1, $2, ...",
    explanation: "Command-line arguments in Bash are accessed using `$1`, `$2`, etc."
  },
  {
    question: "Which command shows the current working directory?",
    options: ["pwd", "cwd", "dir", "whereami"],
    correctAnswer: "pwd",
    explanation: "`pwd` prints the current working directory."
  }
];

const BashQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); // End of quiz
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  return (
    <div className="card-body">
      <h1 className="quiz-title">🎮 Bash Basics Quiz</h1>
      <p className="quiz-description">
        Test your knowledge of Bash scripting fundamentals with this interactive quiz! Answer questions on variables, loops, functions, and more. Get instant feedback and learn as you go!
      </p>

      {currentQuestion === -1 ? (
        <div className="quiz-result">
          <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
          <p className="quiz-description">
            Your score: <span className="font-bold">{score}</span> out of {questions.length}
          </p>
          <p className="quiz-description">
            {score === questions.length
              ? "Perfect score! You're a Bash pro!"
              : score >= questions.length / 2
              ? "Great job! You're getting the hang of Bash basics."
              : "Keep practicing! Try again to improve your score."}
          </p>
          <button className="quiz-button" onClick={handleRestart}>
            Restart Quiz
          </button>
          <a
            href="https://your-store.com/bash-guide"
            className="quiz-buy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More with Bash Guide
          </a>
        </div>
      ) : (
        <div className="quiz-question">
          <h2 className="quiz-title text-2xl">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="quiz-description font-medium">{questions[currentQuestion].question}</p>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option-button ${
                  showFeedback && selectedOption === option
                    ? isCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </p>
              <p className="quiz-description">{questions[currentQuestion].explanation}</p>
              <button className="quiz-button" onClick={handleNext}>
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
          <p className="quiz-score">Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default BashQuiz;
