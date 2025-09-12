"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level3() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level2Completed, setLevel2Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel2Completed(localStorage.getItem("level2Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Defining and Calling Functions",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Defining and Calling Functions</h4>
          <p>
            Functions in Bash allow you to group commands for reuse.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Function</b><br />
            Define and call a simple function:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nhello() {\n    echo "Hello, World!"\n}\nhello`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Function with Parameters</b><br />
            Pass arguments to a function:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ngreet() {\n    echo "Hello, $1!"\n}\ngreet "Alice"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Parameters</b><br />
            Handle multiple arguments:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nadd() {\n    echo $(($1 + $2))\n}\nadd 5 3`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script defining and calling a function (e.g., function_name() { ... }).',
      check: (code) => {
        const result = /(\w+\s*\(\)\s*{.*}|\bfunction\s+\w+\s*{.*})/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a function with `name() { ... }` or `function name { ... }` and call it.',
      success: '✅ Great! You defined and called a Bash function.'
    },
    {
      title: "Local vs Global Variables",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Local vs Global Variables</h4>
          <p>
            Variables can be global (accessible everywhere) or local (scoped to a function).
          </p>
          <p className="mt-2">
            <b>🔹 Global Variables</b><br />
            Defined outside functions, accessible everywhere:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nglobal_var="I'm global"\nmy_func() {\n    echo $global_var\n}\nmy_func`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Local Variables</b><br />
            Use <code>local</code> to restrict scope to a function:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nglobal_var="I'm global"\nmy_func() {\n    local local_var="I'm local"\n    echo $local_var\n}\nmy_func\necho $local_var  # Empty outside function`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Variable Scope Example</b><br />
            Compare global and local variables:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nvar="Global"\nmy_func() {\n    local var="Local"\n    echo "Inside: $var"\n}\nmy_func\necho "Outside: $var"`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using local or global variables in a function (e.g., local var="value").',
      check: (code) => {
        const result = /(\blocal\s+[a-zA-Z_][a-zA-Z0-9_]*=.*|\$[a-zA-Z_][a-zA-Z0-9_]*.*\(\)\s*{)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a local variable (e.g., local var="value") or a global variable in a function.',
      success: '✅ Great! You used local or global variables in a function.'
    },
    {
      title: "Return Values and Exit Codes",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Return Values and Exit Codes</h4>
          <p>
            Functions can return values or exit codes to indicate success or failure.
          </p>
          <p className="mt-2">
            <b>🔹 Return Values</b><br />
            Use <code>return</code> to send a numeric status:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncheck_number() {\n    if [ $1 -gt 0 ]; then\n        return 0\n    else\n        return 1\n    fi\n}\ncheck_number 5\necho $?`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Exit Codes</b><br />
            Use <code>exit</code> to terminate a script:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncheck_file() {\n    if [ -f "$1" ]; then\n        echo "File exists"\n        exit 0\n    else\n        echo "File not found"\n        exit 1\n    fi\n}\ncheck_file "test.txt"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Capturing Output</b><br />
            Capture function output as a return value:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nget_name() {\n    echo "Alice"\n}\nname=$(get_name)\necho "Name is $name"`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Bash script using return, exit, or capturing function output (e.g., return 0 or name=$(func)).',
      check: (code) => {
        const result = /(\breturn\s+\d+|\bexit\s+\d+|\$\(\w+\s*\))/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use return (e.g., return 0), exit (e.g., exit 1), or capture output (e.g., var=$(func)).',
      success: '✅ Great! You used return values or exit codes.'
    },
    {
      title: "Modular Scripting and Reusable Functions",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Modular Scripting and Reusable Functions</h4>
          <p>
            Organize scripts with reusable functions for modularity.
          </p>
          <p className="mt-2">
            <b>🔹 Reusable Function</b><br />
            Create a function for repeated tasks:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\nlog_message() {\n    echo "[INFO] $1"\n}\nlog_message "Starting script"\nlog_message "Processing data"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Modular Script</b><br />
            Combine functions for a task:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ncheck_space() {\n    usage=$(df -h / | tail -1 | awk '{print $5}' | tr -d '%')\n    return $usage\n}\nalert() {\n    if [ $1 -gt 80 ]; then\n        echo "Warning: Disk usage at $1%"\n    fi\n}\ncheck_space\nalert $?`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Sourcing Functions</b><br />
            Import functions from another file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# utils.sh\nlog() {\n    echo "[LOG] $1"\n}\n\n# main.sh\n#!/bin/bash\nsource ./utils.sh\nlog "Script started"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Techniques</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Technique</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">function</td>
                  <td className="border border-green-400 p-2">Define reusable code</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">local</td>
                  <td className="border border-green-400 p-2">Restrict variable scope</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">source</td>
                  <td className="border border-green-400 p-2">Import functions from files</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a Bash script with reusable or modular functions (e.g., multiple function calls or source a file).',
      check: (code) => {
        const result = /(\w+\s*\(\)\s*{.*}\n.*\1\s|\bfunction\s+\w+\s*{.*}\n.*\w+\s|\bsource\s+.*\.sh)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use multiple function calls (e.g., func_name twice) or source a file (e.g., source utils.sh).',
      success: '✅ Great! You created a modular script with reusable functions.'
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
          console.log("Completing Level 3");
          localStorage.setItem("level3Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Functions and Script Organization</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 3, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level2Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Functions and Script Organization</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 2 First</h3>
          <p>
            You need to complete Level 2 before accessing Level 3. Go back and finish the Conditional Statements and Loops lessons!
          </p>
          <Link href="/level2" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 2
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Functions and Script Organization</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 3</h2>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}