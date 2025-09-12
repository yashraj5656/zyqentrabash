"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level4() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level3Completed, setLevel3Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel3Completed(localStorage.getItem("level3Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Navigating Directories with cd, pwd, ls",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Navigating Directories with cd, pwd, ls</h4>
          <p>
            Navigate and inspect directories using essential Bash commands.
          </p>
          <p className="mt-2">
            <b>🔹 Change Directory (cd)</b><br />
            Move to a directory:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Go to home directory\ncd ~\n# Go to parent directory\ncd ..`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Print Working Directory (pwd)</b><br />
            Show current directory:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`pwd`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Directory Contents (ls)</b><br />
            Display files and directories:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# List files\nls\n# List with details\nls -l\n# List hidden files\nls -a`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using cd, pwd, or ls (e.g., cd dir, pwd, ls -l).',
      check: (code) => {
        const result = /\b(cd\s+.*|pwd|ls(\s+-[la])?)\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use cd (e.g., cd dir), pwd, or ls (e.g., ls -l).',
      success: '✅ Great! You navigated directories with cd, pwd, or ls.'
    },
    {
      title: "Managing Files with touch, cp, mv, rm",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Managing Files with touch, cp, mv, rm</h4>
          <p>
            Create, copy, move, and delete files using Bash commands.
          </p>
          <p className="mt-2">
            <b>🔹 Create Files (touch)</b><br />
            Create or update file timestamps:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`touch myfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Copy Files (cp)</b><br />
            Copy files to a destination:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`cp myfile.txt myfile_copy.txt\n# Copy directory recursively\ncp -r mydir newdir`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Move/Rename Files (mv)</b><br />
            Move or rename files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`mv myfile.txt newfile.txt\n# Move to directory\nmv file.txt mydir/`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove Files (rm)</b><br />
            Delete files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`rm myfile.txt\n# Remove directory recursively\nrm -r mydir`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using touch, cp, mv, or rm (e.g., touch file.txt, cp file1 file2).',
      check: (code) => {
        const result = /\b(touch|cp|mv|rm)(\s+(-r)?\s+.*)?\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use touch, cp, mv, or rm (e.g., touch file.txt, cp file1 file2).',
      success: '✅ Great! You managed files with touch, cp, mv, or rm.'
    },
    {
      title: "Working with Directories: mkdir, rmdir, tree",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with Directories: mkdir, rmdir, tree</h4>
          <p>
            Create, remove, and visualize directory structures.
          </p>
          <p className="mt-2">
            <b>🔹 Create Directories (mkdir)</b><br />
            Create single or nested directories:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`mkdir mydir\n# Create nested directories\nmkdir -p parent/child`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove Directories (rmdir)</b><br />
            Remove empty directories:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`rmdir mydir`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Visualize Directory Structure (tree)</b><br />
            Display directory tree (requires `tree` package):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`tree mydir\n# Show files and directories\ntree -a`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using mkdir, rmdir, or tree (e.g., mkdir dir, tree -a).',
      check: (code) => {
        const result = /\b(mkdir(\s+-p)?|rmdir|tree(\s+-a)?)\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use mkdir, rmdir, or tree (e.g., mkdir dir, tree -a).',
      success: '✅ Great! You worked with directories using mkdir, rmdir, or tree.'
    },
    {
      title: "Reading and Writing Files with cat, less, head, tail",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Reading and Writing Files with cat, less, head, tail</h4>
          <p>
            Read and manipulate file contents with Bash commands.
          </p>
          <p className="mt-2">
            <b>🔹 Read/Write with cat</b><br />
            Display or create files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Display file\ncat myfile.txt\n# Create file with content\ncat > myfile.txt << EOF\nHello, World!\nEOF`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Paginate with less</b><br />
            View large files interactively:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`less myfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 View File Portions (head/tail)</b><br />
            Display start or end of files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# First 5 lines\nhead -n 5 myfile.txt\n# Last 3 lines\ntail -n 3 myfile.txt\n# Follow file changes\ntail -f logfile.txt`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using cat, less, head, or tail (e.g., cat file.txt, head -n 5 file).',
      check: (code) => {
        const result = /\b(cat|less|head|tail)(\s+(-[nf]\s+\d+)?\s+.*)?\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use cat, less, head, or tail (e.g., cat file.txt, head -n 5 file).',
      success: '✅ Great! You read or wrote files with cat, less, head, or tail.'
    },
    {
      title: "Handling Permissions with chmod and chown",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Handling Permissions with chmod and chown</h4>
          <p>
            Manage file and directory permissions and ownership.
          </p>
          <p className="mt-2">
            <b>🔹 Change Permissions (chmod)</b><br />
            Modify access permissions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Make file executable\nchmod +x script.sh\n# Set specific permissions (read/write for owner, read for others)\nchmod 644 myfile.txt`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Change Ownership (chown)</b><br />
            Change file owner or group:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Change owner\nchown user1 myfile.txt\n# Change owner and group\nchown user1:group1 mydir`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Recursive Permissions</b><br />
            Apply permissions to directories:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Recursive chmod\nchmod -R 755 mydir\n# Recursive chown\nchown -R user1 mydir`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Permission Basics</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Command</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">chmod 755</td>
                  <td className="border border-green-400 p-2">Owner: rwx, Others: r-x</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">chmod +x</td>
                  <td className="border border-green-400 p-2">Add execute permission</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">chown user</td>
                  <td className="border border-green-400 p-2">Change file owner</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command using chmod or chown (e.g., chmod 755 file, chown user file).',
      check: (code) => {
        const result = /\b(chmod|chown)(\s+(-R)?\s+([0-7]{3}|\+x|\w+(:(\w+)?)?)\s+.*)?\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use chmod (e.g., chmod 755 file) or chown (e.g., chown user file).',
      success: '✅ Great! You managed permissions with chmod or chown.'
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
          console.log("Completing Level 4");
          localStorage.setItem("level4Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: File and Directory Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 4, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level3Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: File and Directory Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 3 First</h3>
          <p>
            You need to complete Level 3 before accessing Level 4. Go back and finish the Functions and Script Organization lessons!
          </p>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: File and Directory Management</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 4</h2>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}