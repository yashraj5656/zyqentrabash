"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level7() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level6Completed, setLevel6Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel6Completed(localStorage.getItem("level6Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Arrays and Associative Arrays",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Arrays and Associative Arrays</h4>
          <p>
            Use arrays to store lists and associative arrays for key-value pairs in Bash.
          </p>
          <p className="mt-2">
            <b>🔹 Indexed Arrays</b><br />
            Declare and access elements in a list:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Declare array\nfruits=("apple" "banana" "orange")\n# Access elements\necho \${fruits[0]}\n# All elements\necho \${fruits[@]}`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Associative Arrays</b><br />
            Use key-value pairs (Bash 4.0+):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`declare -A colors\ncolors["red"]="#FF0000"\ncolors["blue"]="#0000FF"\necho \${colors["red"]}`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Loop Through Arrays</b><br />
            Iterate over array elements:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`fruits=("apple" "banana" "orange")\nfor fruit in "\${fruits[@]}"; do\n    echo "Fruit: $fruit"\ndone`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script using an indexed or associative array (e.g., array=(a b c) or declare -A).',
      check: (code) => {
        const result = /\b(\w+\s*=\(\s*.*\s*\)|\bdeclare\s+-A\s+\w+)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use an indexed array (e.g., arr=(a b c)) or associative array (e.g., declare -A arr).',
      success: '✅ Great! You used arrays or associative arrays.'
    },
    {
      title: "Using getopts for Command-Line Arguments",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using getopts for Command-Line Arguments</h4>
          <p>
            Parse command-line options with <code>getopts</code>.
          </p>
          <p className="mt-2">
            <b>🔹 Basic getopts</b><br />
            Handle simple flags:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`while getopts "hv" opt; do\n    case $opt in\n        h) echo "Help";;\n        v) echo "Version 1.0";;\n    esac\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Options with Arguments</b><br />
            Process options with values:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`while getopts "n:" opt; do\n    case $opt in\n        n) echo "Name: $OPTARG";;\n    esac\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Error Handling</b><br />
            Handle invalid options:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`while getopts "hv" opt; do\n    case $opt in\n        h) echo "Help";;\n        v) echo "Version";;\n        ?) echo "Invalid option"; exit 1;;\n    esac\ndone`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script using getopts to parse command-line options (e.g., while getopts "hv" opt).',
      check: (code) => {
        const result = /\bwhile\s+getopts\s+["']\w+["']\s+\w+\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use getopts to parse options (e.g., while getopts "hv" opt).',
      success: '✅ Great! You parsed command-line arguments with getopts.'
    },
    {
      title: "Working with Here-Documents and Here-Strings",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with Here-Documents and Here-Strings</h4>
          <p>
            Use here-documents and here-strings for multi-line input and inline data.
          </p>
          <p className="mt-2">
            <b>🔹 Here-Document</b><br />
            Provide multi-line input to a command:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cat << EOF > file.txt\nLine 1\nLine 2\nEOF`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Here-Document without Expansion</b><br />
            Prevent variable expansion with quotes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cat << 'EOF'\n$HOME\nEOF`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Here-String</b><br />
            Pass a string as input:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`bc <<< "2 + 3"`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script using a here-document or here-string (e.g., cat << EOF, bc <<< "expr").',
      check: (code) => {
        const result = /\b\w+\b\s*<<<\s*["'].*["']|\b\w+\b\s*<<\s*['"]?\w+['"]?\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a here-document (e.g., cat << EOF) or here-string (e.g., bc <<< "expr").',
      success: '✅ Great! You used a here-document or here-string.'
    },
    {
      title: "Script Debugging with set -x and set -e",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Script Debugging with set -x and set -e</h4>
          <p>
            Debug and control script execution with <code>set</code> options.
          </p>
          <p className="mt-2">
            <b>🔹 Trace Execution (set -x)</b><br />
            Print commands as they execute:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nset -x\necho "Debugging"\nls -l`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Exit on Error (set -e)</b><br />
            Stop script on any error:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nset -e\nls /bad_dir\necho "This won't run"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine Options</b><br />
            Use multiple set options:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nset -ex\necho "Testing"\nfalse\necho "This won't run"`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script using set -x or set -e for debugging (e.g., set -x or set -e).',
      check: (code) => {
        const result = /\bset\s+-[xe]\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use set -x or set -e for debugging (e.g., set -x or set -e).',
      success: '✅ Great! You implemented debugging with set -x or set -e.'
    },
    {
      title: "Writing Flexible CLI Scripts",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Writing Flexible CLI Scripts</h4>
          <p>
            Combine advanced techniques to write robust CLI scripts.
          </p>
          <p className="mt-2">
            <b>🔹 CLI Script with getopts and Arrays</b><br />
            Parse options and use arrays:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nfiles=()\nwhile getopts "f:" opt; do\n    case $opt in\n        f) files+=("$OPTARG");;\n    esac\ndone\nfor file in "\${files[@]}"; do\n    echo "Processing: $file"\ndone`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 CLI with Debugging</b><br />
            Add debugging for reliability:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nset -e\nwhile getopts "v" opt; do\n    case $opt in\n        v) set -x;;\n    esac\ndone\necho "Running script"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 CLI with Here-Document</b><br />
            Generate formatted output:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncat << EOF\nUsage: $0 [-h]\nOptions:\n  -h  Show help\nEOF`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 CLI Techniques</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Technique</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">getopts</td>
                  <td className="border border-green-400 p-2">Parse command-line options</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">set -x</td>
                  <td className="border border-green-400 p-2">Debug script execution</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Arrays</td>
                  <td className="border border-green-400 p-2">Store and process lists</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Here-Documents</td>
                  <td className="border border-green-400 p-2">Format multi-line output</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a CLI script combining at least two techniques (e.g., getopts with arrays or set -x with here-documents).',
      check: (code) => {
        const result = /(\bwhile\s+getopts\b|\bset\s+-[xe]\b|\b\w+\s*=\(\s*.*\s*\)|\bdeclare\s+-A\b|\b\w+\b\s*<<\s*['"]?\w+['"]?\b).*\n.*(\bwhile\s+getopts\b|\bset\s+-[xe]\b|\b\w+\s*=\(\s*.*\s*\)|\bdeclare\s+-A\b|\b\w+\b\s*<<\s*['"]?\w+['"]?\b)/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Combine at least two techniques (e.g., getopts with arrays, set -x with here-documents).',
      success: '✅ Great! You wrote a flexible CLI script.'
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
          console.log("Completing Level 7");
          localStorage.setItem("level7Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Advanced Scripting</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 7, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level6Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Advanced Scripting</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 6 First</h3>
          <p>
            You need to complete Level 6 before accessing Level 7. Go back and finish the Input/Output and Redirection lessons!
          </p>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Advanced Scripting</h2>

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
            {/* <button
              onClick={handleNext}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Next ➡️
            </button> */}
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
          <div className="action-buttons">
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 7</h2>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}