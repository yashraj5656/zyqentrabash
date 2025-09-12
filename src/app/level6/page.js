"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level6() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level5Completed, setLevel5Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel5Completed(localStorage.getItem("level5Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Redirecting Output with > and >>",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Redirecting Output with &gt; and &gt;&gt;</h4>
          <p>
            Redirect command output to files using <code>&gt;</code> (overwrite) and <code>&gt;&gt;</code> (append).
          </p>
          <p className="mt-2">
            <b>🔹 Overwrite Output (&gt;)</b><br />
            Write output to a file, overwriting existing content:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "Hello" > output.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Append Output (&gt;&gt;)</b><br />
            Append output to a file without overwriting:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "World" >> output.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Redirect Multiple Commands</b><br />
            Combine commands with redirection:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls -l > dir_list.txt\necho "Done" >> dir_list.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using > or >> to redirect output (e.g., echo "text" > file).',
      check: (code) => {
        const result = /\b\w+\b.*(>|>>)\s*\w+\.\w+/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use > or >> to redirect output (e.g., echo "text" > file or ls >> file).',
      success: '✅ Great! You redirected output with > or >>.'
    },
    {
      title: "Redirecting Input with < and Error Output with 2>",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Redirecting Input with &lt; and Error Output with 2&gt;</h4>
          <p>
            Use <code>&lt;</code> for input redirection and <code>2&gt;</code> for error redirection.
          </p>
          <p className="mt-2">
            <b>🔹 Input Redirection (&lt;)</b><br />
            Read input from a file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sort < names.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Error Redirection (2&gt;)</b><br />
            Redirect error messages to a file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls /bad_dir 2> errors.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combined Output and Error</b><br />
            Redirect both stdout and stderr:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls /bad_dir > output.txt 2> errors.txt\n# Redirect both to same file\nls /bad_dir &> log.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using < or 2> for input or error redirection (e.g., sort < file, ls 2> file).',
      check: (code) => {
        const result = /\b\w+\b.*(<|2>)\s*\w+\.\w+/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use < or 2> for input or error redirection (e.g., sort < file, ls 2> file).',
      success: '✅ Great! You redirected input with < or errors with 2>.'
    },
    {
      title: "Using Pipes to Combine Commands",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using Pipes to Combine Commands</h4>
          <p>
            Use <code>|</code> to pipe the output of one command as input to another.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Pipe</b><br />
            Combine commands to process data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls | grep ".txt"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Pipes</b><br />
            Chain multiple commands:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cat logfile.txt | grep "ERROR" | wc -l`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Sorting with Pipes</b><br />
            Pipe output to sort:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls -l | sort -k 5 -n`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using | to pipe output (e.g., ls | grep ".txt").',
      check: (code) => {
        const result = /\b\w+\b.*\|\s*\w+\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use | to pipe output to another command (e.g., ls | grep ".txt").',
      success: '✅ Great! You used pipes to combine commands.'
    },
    {
      title: "Using tee and Chaining Commands for Automation",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using tee and Chaining Commands for Automation</h4>
          <p>
            Use <code>tee</code> to duplicate output and chain commands for automation.
          </p>
          <p className="mt-2">
            <b>🔹 Using tee</b><br />
            Write output to a file and display it:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ls | tee output.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Append with tee</b><br />
            Append to a file with <code>-a</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "Log entry" | tee -a log.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Chaining Commands</b><br />
            Combine pipes and redirection for automation:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cat logfile.txt | grep "ERROR" | tee errors.txt | wc -l > count.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Techniques</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Technique</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2"></td>
                  <td className="border border-green-400 p-2">Overwrite output to file</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2"> </td>
                  <td className="border border-green-400 p-2">Append output to file</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">|</td>
                  <td className="border border-green-400 p-2">Pipe output to another command</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">tee</td>
                  <td className="border border-green-400 p-2">Duplicate output to file and stdout</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command using tee or chaining multiple commands (e.g., ls | tee file, grep | tee | wc).',
      check: (code) => {
        const result = /\btee\b.*|\b\w+\b.*\|\s*\w+\b.*\|\s*\w+\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use tee (e.g., ls | tee file) or chain multiple commands (e.g., grep | tee | wc).',
      success: '✅ Great! You used tee or chained commands for automation.'
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
          console.log("Completing Level 6");
          localStorage.setItem("level6Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Input/Output and Redirection</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 6, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level5Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Input/Output and Redirection</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 5 First</h3>
          <p>
            You need to complete Level 5 before accessing Level 6. Go back and finish the Text Processing Tools lessons!
          </p>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Input/Output and Redirection</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 6</h2>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 7 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}