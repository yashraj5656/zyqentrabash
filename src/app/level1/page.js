"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level1() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
 



  const lessons = [
    {
      title: "Installing and Setting Up Bash",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Installing and Setting Up Bash</h4>
          <p>
            Bash (Bourne Again Shell) is a command-line shell for interacting with the operating system.
          </p>
          <p className="mt-2">
            <b>🔹 Linux/macOS</b><br />
            Bash is pre-installed on Linux and macOS. Open a terminal and type:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`bash --version`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Windows</b><br />
            Install Bash via Windows Subsystem for Linux (WSL) or Git Bash:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# On WSL (Ubuntu)\nsudo apt update && sudo apt install bash\n# Check version\nbash --version`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Running Bash</b><br />
            Start a Bash session:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`bash`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to check the Bash version (e.g., bash --version).',
      check: (code) => {
        const result = /bash\s+(--version|-v)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use `bash --version` or `bash -v` to check the Bash version.',
      success: '✅ Great! You checked the Bash version.'
    },
    {
      title: "Shell Syntax and Basic Commands",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Shell Syntax and Basic Commands</h4>
          <p>
            Learn basic Bash commands and syntax to navigate and manage files.
          </p>
          <p className="mt-2">
            <b>🔹 Navigation Commands</b><br />
            Move around the filesystem:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# List directory contents\nls\n# Change directory\ncd Documents\n# Print current directory\npwd`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 File Operations</b><br />
            Manage files and directories:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Create a file\ntouch myfile.txt\n# Create a directory\nmkdir myfolder\n# Remove a file\nrm myfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Viewing Files</b><br />
            Display file contents:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# View file content\ncat myfile.txt\n# View file with pagination\nless myfile.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a basic Bash command (e.g., ls, cd, pwd, touch, mkdir, rm, cat).',
      check: (code) => {
        const result = /\b(ls|cd|pwd|touch|mkdir|rm|cat|less)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a command like ls, cd, pwd, touch, mkdir, rm, or cat.',
      success: '✅ Great! You used a basic Bash command.'
    },
    {
      title: "Variables and Environment Variables",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Variables and Environment Variables</h4>
          <p>
            Variables store data, and environment variables are accessible to processes.
          </p>
          <p className="mt-2">
            <b>🔹 Defining Variables</b><br />
            Create and use variables:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`name="Alice"\necho "Hello, $name!"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Environment Variables</b><br />
            Set and export environment variables:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`export MY_VAR="test"\necho $MY_VAR\n# View all environment variables\nenv`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Common Environment Variables</b><br />
            Use built-in variables:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo $HOME  # Home directory\necho $PATH  # Executable search path`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code to define or use a variable (e.g., name="value" or echo $var).',
      check: (code) => {
        const result = /([a-zA-Z_][a-zA-Z0-9_]*=.*|\$[a-zA-Z_][a-zA-Z0-9_]*|export\s+[a-zA-Z_][a-zA-Z0-9_]*)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a variable (e.g., name="value") or use one (e.g., echo $name).',
      success: '✅ Great! You worked with variables or environment variables.'
    },
    {
      title: "Basic Operators (Arithmetic, Comparison, Logical)",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Basic Operators (Arithmetic, Comparison, Logical)</h4>
          <p>
            Bash supports operators for arithmetic, comparison, and logical operations.
          </p>
          <p className="mt-2">
            <b>🔹 Arithmetic Operators</b><br />
            Perform calculations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`a=5\nb=3\necho $((a + b))  # Addition\necho $((a * b))  # Multiplication`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Comparison Operators</b><br />
            Compare values:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`a=5\nb=3\nif [ $a -gt $b ]; then\n    echo "a is greater than b"\nfi`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Logical Operators</b><br />
            Combine conditions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`a=5\nb=3\nif [ $a -gt 2 ] && [ $b -lt 4 ]; then\n    echo "Both conditions true"\nfi`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Common Operators</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Operator</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">$(( ))</td>
                  <td className="border border-green-400 p-2">Arithmetic expansion</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">-eq, -gt, -lt</td>
                  <td className="border border-green-400 p-2">Comparison (equal, greater, less)</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">&&, ||</td>
                  <td className="border border-green-400 p-2">Logical AND, OR</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code using operators (e.g., $(( )) for arithmetic, -gt for comparison, or && for logical).',
      check: (code) => {
        const result = /(\$\(\(.+\)\)|-\w+\s+\$?\w+|&&|\|\|)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use arithmetic ($(( ))), comparison (-gt, -eq), or logical (&&, ||) operators.',
      success: '✅ Great! You used Bash operators.'
    },
    {
      title: "Simple Bash Scripts with echo, read, and printf",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Simple Bash Scripts with echo, read, and printf</h4>
          <p>
            Write Bash scripts to interact with users and format output.
          </p>
          <p className="mt-2">
            <b>🔹 Using echo</b><br />
            Display text:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\necho "Hello, World!"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using read</b><br />
            Capture user input:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nread -p "Enter your name: " name\necho "Hello, $name!"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using printf</b><br />
            Format output:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nname="Alice"\nprintf "Hello, %s! You have %d messages.\\n" "$name" 5`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using echo, read, or printf.',
      check: (code) => {
        const result = /\b(echo|read|printf)\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use echo, read, or printf in a Bash script.',
      success: '✅ Great! You wrote a Bash script with echo, read, or printf.'
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
          console.log("Completing Level 1");
          localStorage.setItem("level1Completed", "true");
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



  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 1: Bash Basics</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 1</h2>
          <Link href="/level2" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 2 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}