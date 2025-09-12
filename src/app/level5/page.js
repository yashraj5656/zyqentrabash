"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level5() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level4Completed, setLevel4Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel4Completed(localStorage.getItem("level4Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Using grep for Text Search",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using grep for Text Search</h4>
          <p>
            Use <code>grep</code> to search for patterns in files.
          </p>
          <p className="mt-2">
            <b>🔹 Basic grep</b><br />
            Search for a string in a file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "error" logfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Case-Insensitive Search</b><br />
            Ignore case with <code>-i</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep -i "error" logfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Recursive Search</b><br />
            Search in directories with <code>-r</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep -r "error" /logs`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Line Numbers</b><br />
            Show line numbers with <code>-n</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep -n "error" logfile.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using grep (e.g., grep "pattern" file).',
      check: (code) => {
        const result = /\bgrep(\s+-[inr])?\s+.*\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use grep (e.g., grep "pattern" file or grep -i "pattern" file).',
      success: '✅ Great! You used grep for text search.'
    },
    {
      title: "Text Manipulation with sed and awk",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Text Manipulation with sed and awk</h4>
          <p>
            Use <code>sed</code> for stream editing and <code>awk</code> for pattern-based processing.
          </p>
          <p className="mt-2">
            <b>🔹 Replace Text with sed</b><br />
            Substitute text in a file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sed 's/old/new/g' file.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 In-Place Editing with sed</b><br />
            Modify file directly with <code>-i</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sed -i 's/error/warning/g' logfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Extract Fields with awk</b><br />
            Print specific columns:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`awk '{print $1, $3}' data.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Filter with awk</b><br />
            Process lines matching a condition:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`awk '$2 > 10 {print $0}' data.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using sed or awk (e.g., sed "s/old/new/g" file, awk "{print $1}" file).',
      check: (code) => {
        const result = /\b(sed\s+(-i)?\s*['"].*['"]|awk\s+['"].*['"])\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use sed (e.g., sed "s/old/new/g" file) or awk (e.g., awk "{print $1}" file).',
      success: '✅ Great! You manipulated text with sed or awk.'
    },
    {
      title: "Data Processing with cut, sort, uniq, wc",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Data Processing with cut, sort, uniq, wc</h4>
          <p>
            Process and analyze text data with specialized tools.
          </p>
          <p className="mt-2">
            <b>🔹 Extract Fields with cut</b><br />
            Extract specific columns or characters:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cut -d',' -f1 data.csv\n# Extract characters 1-5\ncut -c1-5 file.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Sort Lines with sort</b><br />
            Sort text alphabetically or numerically:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sort file.txt\n# Sort numerically\nsort -n numbers.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove Duplicates with uniq</b><br />
            Filter out duplicate lines:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sort file.txt | uniq`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Count with wc</b><br />
            Count lines, words, or characters:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`wc -l file.txt  # Line count\nwc -w file.txt  # Word count`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using cut, sort, uniq, or wc (e.g., cut -d, -f1 file, wc -l file).',
      check: (code) => {
        const result = /\b(cut\s+-[dc].*|sort(\s+-n)?|uniq|wc\s+-[lwc])\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use cut, sort, uniq, or wc (e.g., cut -d, -f1 file, wc -l file).',
      success: '✅ Great! You processed data with cut, sort, uniq, or wc.'
    },
    {
      title: "Understanding Regular Expression Basics",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Regular Expression Basics</h4>
          <p>
            Regular expressions (regex) help match patterns in text.
          </p>
          <p className="mt-2">
            <b>🔹 Match Words with grep</b><br />
            Use regex to find patterns:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "[0-9]+" file.txt  # Match numbers\ngrep "[a-zA-Z]+" file.txt  # Match words`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Anchors</b><br />
            Match start (^) or end ($) of a line:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "^ERROR" logfile.txt  # Lines starting with ERROR\ngrep "failed$" logfile.txt  # Lines ending with failed`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Wildcards and Quantifiers</b><br />
            Use wildcards (.) and quantifiers (*, +):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "er.*r" file.txt  # Match error, errr, etc.\ngrep "[0-9]{2}" file.txt  # Match two digits`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Regex with sed</b><br />
            Use regex for substitutions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sed 's/[0-9]\+/NUMBER/g' file.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using regex with grep or sed (e.g., grep "[0-9]+" file, sed "s/[a-z]+/WORD/g" file).',
      check: (code) => {
        const result = /\b(grep|sed)\s+['"].*[[\.^$+*].*['"].*\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use regex with grep or sed (e.g., grep "[0-9]+" file, sed "s/[a-z]+/WORD/g" file).',
      success: '✅ Great! You used regular expressions with grep or sed.'
    },
    {
      title: "Extracting Data from Log or Text Files",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Extracting Data from Log or Text Files</h4>
          <p>
            Combine text processing tools to extract useful data from files.
          </p>
          <p className="mt-2">
            <b>🔹 Find Errors in Logs</b><br />
            Extract error lines:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "ERROR" logfile.txt | wc -l`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Extract Fields from CSV</b><br />
            Process CSV data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cut -d',' -f2,3 data.csv | sort | uniq`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Summarize Logs with awk</b><br />
            Count occurrences by field:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`awk '/ERROR/ {count++} END {print "Errors:", count}' logfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Tools</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Tool</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">grep</td>
                  <td className="border border-green-400 p-2">Search for patterns</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">sed</td>
                  <td className="border border-green-400 p-2">Stream editing</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">awk</td>
                  <td className="border border-green-400 p-2">Pattern-based processing</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">cut</td>
                  <td className="border border-green-400 p-2">Extract fields</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a script to extract data from a log or text file using at least two tools (e.g., grep | wc, awk | sort).',
      check: (code) => {
        const result = /\b(grep|sed|awk|cut|sort|uniq|wc)\b.*\|\s*\b(grep|sed|awk|cut|sort|uniq|wc)\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use at least two tools (e.g., grep "pattern" file | wc -l, awk "{print $1}" file | sort).',
      success: '✅ Great! You extracted data using multiple text processing tools.'
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
          console.log("Completing Level 5");
          localStorage.setItem("level5Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Text Processing Tools</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 5, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level4Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Text Processing Tools</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 4 First</h3>
          <p>
            You need to complete Level 4 before accessing Level 5. Go back and finish the File and Directory Management lessons!
          </p>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Text Processing Tools</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 5</h2>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}