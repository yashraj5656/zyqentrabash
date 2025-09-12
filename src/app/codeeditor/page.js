"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { loader } from "@monaco-editor/react";

// Load Monaco Editor only on the client (no SSR)
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function BashEditor() {
  // ✅ Tasks list
  const tasks = [
    "Print 'Hello World'",
    "Declare a variable",
    "Create a function to add two numbers",
    "Loop through numbers 1 to 5",
    "Use an array and print elements",
    "Write an associative array with name and age",
    "Check if a number is even or odd",
    "Use a for loop with break and continue",
    "Read a file and display content",
    "Write a script using functions and return values",
    "Redirect output to a file",
    "Use grep to search text in a file",
    "Use awk to process data",
    "Use sed to replace text in a file",
    "Schedule a task with cron",
    "Use ssh to connect to a remote server",
    "Handle errors using exit codes",
    "Loop through files in a directory",
    "Write a script with getopts for arguments",
    "Automate a task using a Bash script",
  ];

  const [currentTask, setCurrentTask] = useState(0);

  // ✅ Starter code snippets for Bash
  const starterCodes = useMemo(
    () => [
      `echo "Hello World"`,
      `myVar=42\necho $myVar`,
      `add() {\n  echo $(($1 + $2))\n}\nadd 2 3`,
      `for i in {1..5}; do\n  echo $i\ndone`,
      `arr=(1 2 3 4 5)\nfor n in "\${arr[@]}"; do echo $n; done`,
      `declare -A person=(["name"]="Alex" ["age"]=25)\necho "\${person[name]}, \${person[age]}"`,
      `num=7\nif [ $((num % 2)) -eq 0 ]; then echo "Even"; else echo "Odd"; fi`,
      `for i in {1..10}; do\n  if [ $i -eq 5 ]; then continue; fi\n  echo $i\ndone`,
      `cat myfile.txt`,
      `myFunc() {\n  echo "Hello from function"\n  return 0\n}\nmyFunc`,
      `echo "Output redirected" > output.txt`,
      `grep "searchText" file.txt`,
      `awk '{print $1}' file.txt`,
      `sed 's/old/new/g' file.txt`,
      `# crontab -e\n# * * * * * /path/to/script.sh`,
      `# ssh user@remotehost`,
      `command || echo "Error occurred"`,
      `for f in *; do echo $f; done`,
      `while getopts "a:b:" opt; do echo $opt; done`,
      `#!/bin/bash\n# automate tasks here`,
    ],
    []
  );

  const [code, setCode] = useState(starterCodes[0]);
  const [output, setOutput] = useState("");

  // 🔄 Update editor code when task changes
  useEffect(() => {
    setCode(starterCodes[currentTask]);
  }, [currentTask, starterCodes]);

  // ✅ Setup custom theme only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      loader.init().then((monaco) => {
        monaco.editor.defineTheme("neon-night", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "6a9955" },
            { token: "keyword", foreground: "00f2ea", fontStyle: "bold" },
            { token: "identifier", foreground: "ffffff" },
            { token: "string", foreground: "a855f7" },
            { token: "number", foreground: "ffb86c" },
            { token: "delimiter", foreground: "00cba9" },
          ],
          colors: {
            "editor.background": "#0f0f0f",
            "editor.foreground": "#e0e0e0",
            "editor.lineHighlightBackground": "#111111",
            "editor.selectionBackground": "#00cba955",
            "editorCursor.foreground": "#00f2ea",
            "editorCursor.background": "#000000",
            "editor.selectionHighlightBackground": "#00f2ea33",
            "editorIndentGuide.background": "#333333",
            "editorLineNumber.foreground": "#555555",
            "editorLineNumber.activeForeground": "#00f2ea",
            "editorWhitespace.foreground": "#222222",
          },
        });
      });
    }
  }, []);

  // 🔹 Simulated Bash execution
  const handleRun = () => {
    // For demonstration purposes, we'll just simulate Bash outputs
    let simulatedOutput = code
      .replace(/echo "(.*)"/g, "$1") // show echo strings
      .replace(/\$\{[^}]+\}/g, "<value>"); // placeholder for variables
    setOutput(simulatedOutput || "✅ Code looks valid! (Simulated Bash output)");
  };

  return (
    <div className="glitch-form-wrapper">
      <div className="glitch-car">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">
            <span>💻 Bash Editor</span>
          </div>
          <div className="card-dots"><span></span><span></span><span></span></div>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Task Row */}
          <div className="task-row">
            <p className="task-text">
              Task {currentTask + 1}: {tasks[currentTask]}
            </p>
            <button
              onClick={() => setCurrentTask((prev) => (prev + 1) % tasks.length)}
              className="task-button"
              data-text="Next"
            >
              Next ➝
            </button>
          </div>

          {/* Editor */}
          <Editor
            height="400px"
            theme="neon-night"
            defaultLanguage="shell"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 15,
              fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              cursorSmoothCaretAnimation: "on",
              cursorBlinking: "phase",
              renderLineHighlight: "all",
              smoothScrolling: true,
            }}
          />

          {/* Output Section */}
          <div className="card-body">
            <div className="card-header">
              <div className="card-title"><span> Output</span></div>
              <button onClick={handleRun} className="task-button" data-text="Run_Code">
                ▶ Run Code
              </button>
            </div>
            <div className="card-body">
              <pre className="output-text">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
