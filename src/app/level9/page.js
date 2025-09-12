"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level9() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level8Completed, setLevel8Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel8Completed(localStorage.getItem("level8Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Networking with ping, curl, wget",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Networking with ping, curl, wget</h4>
          <p>
            Use networking commands to test connectivity and fetch data.
          </p>
          <p className="mt-2">
            <b>🔹 Test Connectivity (ping)</b><br />
            Check if a host is reachable:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ping -c 4 google.com`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Fetch Data (curl)</b><br />
            Retrieve data from a URL:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`curl https://api.example.com/data`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Download Files (wget)</b><br />
            Download files from the web:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`wget https://example.com/file.zip`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using ping, curl, or wget (e.g., ping -c 4 host, curl URL).',
      check: (code) => {
        const result = /\b(ping\s+(-c\s+\d+)?\s+\S+|curl\s+\S+|wget\s+\S+)\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use ping, curl, or wget (e.g., ping -c 4 host, curl URL).',
      success: '✅ Great! You used networking commands.'
    },
    {
      title: "Secure File Transfer and Remote Access with scp, ssh",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Secure File Transfer and Remote Access with scp, ssh</h4>
          <p>
            Use <code>scp</code> for secure file transfer and <code>ssh</code> for remote access.
          </p>
          <p className="mt-2">
            <b>🔹 Copy Files (scp)</b><br />
            Transfer files between hosts:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`scp file.txt user@remote:/path/to/dest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remote Command Execution (ssh)</b><br />
            Run commands on a remote server:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ssh user@remote 'ls -l'`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Copy Directory (scp)</b><br />
            Transfer directories recursively:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`scp -r local_dir user@remote:/path`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using scp or ssh (e.g., scp file user@host:path, ssh user@host command).',
      check: (code) => {
        const result = /\b(scp(\s+-r)?\s+\S+\s+\S+|\bssh\s+\S+\s+['"]?\S+['"]?)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use scp or ssh (e.g., scp file user@host:path, ssh user@host ls).',
      success: '✅ Great! You used scp or ssh for secure file transfer or remote access.'
    },
    {
      title: "Automating System Tasks with Scripts",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Automating System Tasks with Scripts</h4>
          <p>
            Write scripts to automate repetitive system tasks.
          </p>
          <p className="mt-2">
            <b>🔹 Backup Script</b><br />
            Automate file backups:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ntar -czf backup_$(date +%F).tar.gz /data`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 System Check Script</b><br />
            Monitor disk usage:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ndf -h | grep "/dev" > disk_usage.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remote Backup</b><br />
            Combine with ssh/scp:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ntar -czf backup.tar.gz /data\nscp backup.tar.gz user@remote:/backups`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script to automate a system task (e.g., backup, disk usage check).',
      check: (code) => {
        const result = /\b(#!\/bin\/bash.*\n.*(tar\s+-|df\s+-|scp\s+|ssh\s+|\w+\s*>.*|grep\s+.*|date\s+\+))/ms.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a script with #!/bin/bash and a system task (e.g., tar, df, scp).',
      success: '✅ Great! You automated a system task with a script.'
    },
    {
      title: "Scheduling Tasks with cron and at",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Scheduling Tasks with cron and at</h4>
          <p>
            Schedule recurring or one-time tasks.
          </p>
          <p className="mt-2">
            <b>🔹 Recurring Tasks (cron)</b><br />
            Schedule a script to run periodically:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Edit crontab\ncrontab -e\n# Run every day at midnight\n0 0 * * * /path/to/script.sh`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 One-Time Tasks (at)</b><br />
            Schedule a one-time task:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "backup.sh" | at now + 1 hour`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Scheduled Tasks</b><br />
            Check scheduled at jobs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`atq`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to schedule a task with cron or at (e.g., crontab -e, echo "cmd" | at now).',
      check: (code) => {
        const result = /\b(crontab\s+-e|\d+\s+\d+\s+\*+\s+\*+\s+\*+\s+\S+|at\s+\S+|\b(echo\s+['"].*['"]\s+\|\s+at\s+\S+|atq))\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use cron (e.g., crontab -e, * * * * * script.sh) or at (e.g., echo "cmd" | at now).',
      success: '✅ Great! You scheduled tasks with cron or at.'
    },
    {
      title: "Handling Log Files and System Monitoring",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Handling Log Files and System Monitoring</h4>
          <p>
            Process logs and monitor system health.
          </p>
          <p className="mt-2">
            <b>🔹 Analyze Logs</b><br />
            Extract errors from logs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`grep "ERROR" /var/log/syslog | tee errors.log`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Monitor System</b><br />
            Check system resources:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`top -b -n 1 > system_stats.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Automate Monitoring</b><br />
            Script to log system stats:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`#!/bin/bash\ndate >> stats.log\ndf -h >> stats.log\ntop -b -n 1 >> stats.log`}
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
                  <td className="border border-green-400 p-2">Search logs</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">top</td>
                  <td className="border border-green-400 p-2">Monitor system resources</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">cron</td>
                  <td className="border border-green-400 p-2">Schedule monitoring tasks</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">tee</td>
                  <td className="border border-green-400 p-2">Save and display output</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command or script to handle logs or monitor the system (e.g., grep "ERROR" log, top > file).',
      check: (code) => {
        const result = /\b(grep\s+["']\w+["']\s+\S+|top\s+-b\s+-n\s+\d+\s*>|\b#!\/bin\/bash.*\n.*(grep\s+|top\s+|df\s+|tee\s+))/ms.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use grep, top, df, or tee to handle logs or monitor (e.g., grep "ERROR" log, top -b -n 1 > file).',
      success: '✅ Great! You handled log files or system monitoring.'
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
          console.log("Completing Level 9");
          localStorage.setItem("level9Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Networking and System Automation</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 9, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level8Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Networking and System Automation</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 8 First</h3>
          <p>
            You need to complete Level 8 before accessing Level 9. Go back and finish the Process and Job Management lessons!
          </p>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Networking and System Automation</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 9</h2>
          <Link href="/certificate" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Your Certificate ➡️
          </Link>
        </div>
      )}
    </div>
  );
}