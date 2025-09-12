"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level8() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level7Completed, setLevel7Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel7Completed(localStorage.getItem("level7Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Processes and Jobs",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Processes and Jobs</h4>
          <p>
            Processes are running programs; jobs are processes managed by the shell.
          </p>
          <p className="mt-2">
            <b>🔹 Processes</b><br />
            Every command you run starts a process with a unique PID (Process ID).
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Display current shell's PID\necho $$`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Jobs</b><br />
            Jobs are processes started by the shell, often run in the background.
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Run a command as a job\nsleep 100 &`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Jobs</b><br />
            View jobs managed by the shell:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`jobs`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to check processes or jobs (e.g., echo $$, jobs, sleep 100 &).',
      check: (code) => {
        const result = /\b(echo\s+\$\$|jobs|\w+\s+.*&)\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a command like echo $$, jobs, or sleep 100 &.',
      success: '✅ Great! You explored processes and jobs.'
    },
    {
      title: "Monitoring Processes with ps, top, htop",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Monitoring Processes with ps, top, htop</h4>
          <p>
            Use tools to monitor running processes.
          </p>
          <p className="mt-2">
            <b>🔹 List Processes (ps)</b><br />
            Display process information:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ps\n# Show all processes\nps aux`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Real-Time Monitoring (top)</b><br />
            View processes interactively:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`top`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Enhanced Monitoring (htop)</b><br />
            Use a more user-friendly interface (requires installation):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`htop`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using ps, top, or htop (e.g., ps aux, top).',
      check: (code) => {
        const result = /\b(ps(\s+aux)?|top|htop)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use ps, top, or htop (e.g., ps aux, top).',
      success: '✅ Great! You monitored processes with ps, top, or htop.'
    },
    {
      title: "Controlling Processes with kill, pkill, jobs, fg, bg",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Controlling Processes with kill, pkill, jobs, fg, bg</h4>
          <p>
            Manage processes and jobs with control commands.
          </p>
          <p className="mt-2">
            <b>🔹 Terminate by PID (kill)</b><br />
            Stop a process using its PID:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`kill 1234\n# Force kill\nkill -9 1234`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Terminate by Name (pkill)</b><br />
            Kill processes by name:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`pkill firefox`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Manage Jobs (fg, bg)</b><br />
            Move jobs to foreground or background:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# List jobs\njobs\n# Bring job to foreground\nfg %1\n# Move to background\nbg %1`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using kill, pkill, jobs, fg, or bg (e.g., kill 1234, fg %1).',
      check: (code) => {
        const result = /\b(kill(\s+-9)?\s+\d+|pkill\s+\w+|jobs|fg\s+%\d+|bg\s+%\d+)\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use kill, pkill, jobs, fg, or bg (e.g., kill 1234, fg %1).',
      success: '✅ Great! You controlled processes or jobs.'
    },
    {
      title: "Background and Foreground Job Execution",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Background and Foreground Job Execution</h4>
          <p>
            Run and manage jobs in the background or foreground.
          </p>
          <p className="mt-2">
            <b>🔹 Run in Background</b><br />
            Start a command in the background:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sleep 100 &\n# Check job status\njobs`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Move to Foreground</b><br />
            Bring a background job to the foreground:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sleep 100 &\nfg %1`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Suspend and Resume</b><br />
            Suspend a foreground job and resume in background:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Press Ctrl+Z to suspend\nsleep 100\n# Resume in background\nbg %1`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to run or manage a job in background/foreground (e.g., sleep 100 &, fg %1).',
      check: (code) => {
        const result = /\b(\w+\s+.*&|fg\s+%\d+|bg\s+%\d+|jobs)\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a background job (e.g., sleep 100 &), fg, bg, or jobs.',
      success: '✅ Great! You managed background and foreground jobs.'
    },
    {
      title: "Automating Tasks with nohup and cron",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Automating Tasks with nohup and cron</h4>
          <p>
            Run tasks without interruption and schedule recurring tasks.
          </p>
          <p className="mt-2">
            <b>🔹 Run Without Hangup (nohup)</b><br />
            Run a command immune to terminal disconnection:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`nohup ./script.sh &`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Schedule with cron</b><br />
            Schedule a task with crontab:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Edit crontab\ncrontab -e\n# Run script every minute\n* * * * * /path/to/script.sh`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine nohup and cron</b><br />
            Schedule a persistent task:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# In crontab\n0 * * * * nohup /path/to/script.sh &`}
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
                  <td className="border border-green-400 p-2">nohup</td>
                  <td className="border border-green-400 p-2">Run command immune to hangups</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">cron</td>
                  <td className="border border-green-400 p-2">Schedule recurring tasks</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">jobs</td>
                  <td className="border border-green-400 p-2">List shell jobs</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">kill</td>
                  <td className="border border-green-400 p-2">Terminate processes</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command using nohup or cron (e.g., nohup script.sh &, crontab -e).',
      check: (code) => {
        const result = /\b(nohup\s+.*&|crontab\s+-e|\d+\s+\*+\s+\*+\s+\*+\s+\*+\s+\S+)/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use nohup (e.g., nohup script.sh &) or cron (e.g., crontab -e, * * * * * script.sh).',
      success: '✅ Great! You automated tasks with nohup or cron.'
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
          console.log("Completing Level 8");
          localStorage.setItem("level8Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Process and Job Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 8, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level7Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Process and Job Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 7 First</h3>
          <p>
            You need to complete Level 7 before accessing Level 8. Go back and finish the Advanced Scripting lessons!
          </p>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 7
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Process and Job Management</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 8</h2>
          <Link href="/level9" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to level 9 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}