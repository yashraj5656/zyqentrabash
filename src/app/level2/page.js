"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level2() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level1Completed, setLevel1Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel1Completed(localStorage.getItem("level1Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "if, elif, else Statements",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">if, elif, else Statements</h4>
          <p>
            Use <code>if</code>, <code>elif</code>, and <code>else</code> to make decisions in Bash.
          </p>
          <p className="mt-2">
            <b>🔹 Basic if Statement</b><br />
            Check a condition:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nnum=10\nif [ $num -gt 5 ]; then\n    echo "Number is greater than 5"\nfi`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 if-else Statement</b><br />
            Handle alternative conditions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nnum=3\nif [ $num -gt 5 ]; then\n    echo "Greater than 5"\nelse\n    echo "Not greater than 5"\nfi`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 if-elif-else Statement</b><br />
            Check multiple conditions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nnum=5\nif [ $num -gt 10 ]; then\n    echo "Greater than 10"\nelif [ $num -eq 5 ]; then\n    echo "Equal to 5"\nelse\n    echo "Less than 5"\nfi`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using if, elif, or else (e.g., if [ condition ]; then).',
      check: (code) => {
        const result = /if\s+\[.*\]\s*;\s*then|elif\s+\[.*\]\s*;\s*then|else\s*fi/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use if [ condition ]; then, elif, or else in your script.',
      success: '✅ Great! You used if, elif, or else statements.'
    },
    {
      title: "case Statements",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">case Statements</h4>
          <p>
            Use <code>case</code> to handle multiple conditions based on a variable’s value.
          </p>
          <p className="mt-2">
            <b>🔹 Basic case Statement</b><br />
            Match a value:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nday="Monday"\ncase $day in\n    Monday)\n        echo "Start of the week"\n        ;;\n    Friday)\n        echo "End of the week"\n        ;;\n    *)\n        echo "Midweek"\n        ;;\nesac`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Patterns</b><br />
            Match multiple values:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfruit="apple"\ncase $fruit in\n    apple|orange)\n        echo "Citrus fruit"\n        ;;\n    banana)\n        echo "Tropical fruit"\n        ;;\n    *)\n        echo "Unknown fruit"\n        ;;\nesac`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using case with Input</b><br />
            Process user input:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nread -p "Enter a color: " color\ncase $color in\n    red)\n        echo "Bright color"\n        ;;\n    blue|green)\n        echo "Cool color"\n        ;;\n    *)\n        echo "Unknown color"\n        ;;\nesac`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using a case statement (e.g., case $var in).',
      check: (code) => {
        const result = /case\s+.*\s+in.*\)\n.*;;\n.*esac/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a case statement with `case $var in`, patterns, `;;`, and `esac`.',
      success: '✅ Great! You used a case statement.'
    },
    {
      title: "for and while Loops",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">for and while Loops</h4>
          <p>
            Use <code>for</code> and <code>while</code> loops to iterate over data or repeat tasks.
          </p>
          <p className="mt-2">
            <b>🔹 for Loop</b><br />
            Iterate over a list:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfor i in 1 2 3; do\n    echo "Number: $i"\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 for Loop with Files</b><br />
            Process files in a directory:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfor file in *.txt; do\n    echo "Found file: $file"\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 while Loop</b><br />
            Repeat while a condition is true:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncount=1\nwhile [ $count -le 5 ]; do\n    echo "Count: $count"\n    ((count++))\ndone`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using a for or while loop (e.g., for i in or while [ condition ]).',
      check: (code) => {
        const result = /(for\s+\w+\s+in.*do|while\s+\[.*\]\s*;\s*do)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a for loop (e.g., for i in ...; do) or while loop (e.g., while [ condition ]; do).',
      success: '✅ Great! You used a for or while loop.'
    },
    {
      title: "until Loops, break, and continue",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">until Loops, break, and continue</h4>
          <p>
            Use <code>until</code> loops to repeat until a condition is true, and <code>break</code> or <code>continue</code> to control loop flow.
          </p>
          <p className="mt-2">
            <b>🔹 until Loop</b><br />
            Repeat until a condition is true:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncount=1\nuntil [ $count -gt 5 ]; do\n    echo "Count: $count"\n    ((count++))\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using break</b><br />
            Exit a loop early:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfor i in {1..10}; do\n    if [ $i -eq 5 ]; then\n        break\n    fi\n    echo "Number: $i"\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using continue</b><br />
            Skip to the next iteration:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfor i in {1..5}; do\n    if [ $i -eq 3 ]; then\n        continue\n    fi\n    echo "Number: $i"\ndone`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using until, break, or continue (e.g., until [ condition ] or break/continue).',
      check: (code) => {
        const result = /(until\s+\[.*\]\s*;\s*do|\b(break|continue)\b)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use an until loop (e.g., until [ condition ]; do) or break/continue.',
      success: '✅ Great! You used until, break, or continue.'
    },
    {
      title: "Writing Small Automation Scripts",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Writing Small Automation Scripts</h4>
          <p>
            Combine conditionals and loops to write automation scripts.
          </p>
          <p className="mt-2">
            <b>🔹 File Backup Script</b><br />
            Create backups of files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfor file in *.txt; do\n    if [ -f "$file" ]; then\n        cp "$file" "$file.bak"\n        echo "Backed up $file"\n    fi\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 User Input Script</b><br />
            Process user input with case:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nread -p "Enter action (start/stop): " action\ncase $action in\n    start)\n        echo "Starting service"\n        ;;\n    stop)\n        echo "Stopping service"\n        ;;\n    *)\n        echo "Invalid action"\n        ;;\nesac`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Monitor Disk Space</b><br />
            Check disk usage with a loop:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nwhile true; do\n    usage=$(df -h / | tail -1 | awk '{print $5}' | tr -d '%')\n    if [ $usage -gt 80 ]; then\n        echo "Warning: Disk usage at $usage%"\n        break\n    fi\n    sleep 5\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Constructs</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Construct</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">if</td>
                  <td className="border border-green-400 p-2">Conditional execution</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">case</td>
                  <td className="border border-green-400 p-2">Pattern matching</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">for/while/until</td>
                  <td className="border border-green-400 p-2">Iterate over lists or conditions</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">break/continue</td>
                  <td className="border border-green-400 p-2">Control loop flow</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write an automation script using conditionals and loops (e.g., if with for or case with while).',
      check: (code) => {
        const result = /((if\s+\[.*\]\s*;\s*then|case\s+.*\s+in)(.*(for\s+\w+\s+in|while\s+\[.*\]\s*;\s*do|until\s+\[.*\]\s*;\s*do)))/ms.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Combine conditionals (if/case) with loops (for/while/until) in your script.',
      success: '✅ Great! You wrote an automation script with conditionals and loops.'
    }
  ];

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      console.log(`Navigating to next lesson: ${currentLesson + 1}`);
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) {
      console.log(`Navigating to previous lesson: ${currentLesson - 1}`);
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
    }
  };

  const checkCode = () => {
    console.log(`Checking code for lesson ${currentLesson}: "${code}"`);
    try {
      if (!code.trim()) {
        setMessage("❌ Please enter some code to check.");
        return;
      }
      if (lessons[currentLesson].check(code)) {
        setMessage(lessons[currentLesson].success);
        if (currentLesson < lessons.length - 1) {
          console.log(`Advancing to lesson ${currentLesson + 1}`);
          setTimeout(() => {
            setCurrentLesson(currentLesson + 1);
            setCode("");
            setMessage("");
          }, 1000);
        } else {
          console.log("Completing Level 2");
          localStorage.setItem("level2Completed", "true");
          setTimeout(() => {
            setCurrentLesson(lessons.length);
            setCode("");
            setMessage("");
          }, 1000);
        }
      } else {
        setMessage(lessons[currentLesson].error);
      }
    } catch (error) {
      console.error(`Error in checkCode: ${error.message}`);
      setMessage("❌ An error occurred while checking your code. Please try again.");
    }
  };

  if (!subscribed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Conditional Statements and Loops</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 2, you need a subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level1Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Conditional Statements and Loops</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 1 First</h3>
          <p>
            You need to complete Level 1 before accessing Level 2. Go back and finish the Bash Basics lessons!
          </p>
          <Link href="/level1" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Conditional Statements and Loops</h2>

      {currentLesson < lessons.length ? (
        <div>
          <div className="nav-buttons flex justify-between mb-6">
            <button
              onClick={handlePrev}
              disabled={currentLesson === 0}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              ⬅ Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentLesson === lessons.length - 1}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              Next ➡️
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-4">{lessons[currentLesson].title}</h3>
          <div className="lesson-description text-gray-700 mb-4">{lessons[currentLesson].description}</div>
          <p className="task font-semibold mb-4">
            <b>Task:</b> {lessons[currentLesson].task}
          </p>

          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              console.log(`Code input updated: "${e.target.value}"`);
            }}
            placeholder="💻 Type your Bash code here..."
            className="code-input"
            style={{
              width: "100%",
              height: "120px",
              background: "#111",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          />
          <div className="action-buttons mt-4">
            <button
              onClick={checkCode}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Check Code
            </button>
          </div>
          <p
            className={`mt-4 ${message.includes("❌") ? "error-message text-red-500" : "success-message text-green-500"}`}
          >
            {message}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 2</h2>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}