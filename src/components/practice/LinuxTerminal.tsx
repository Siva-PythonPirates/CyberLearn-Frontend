import React, { useState } from "react";
import "./LinuxTerminal.css";

interface FileSystem {
  [key: string]: string[];
}

const initialFileSystem: FileSystem = {
  "/": ["file1.txt", "file2.txt", "dir1", "dir2"],
  "/dir1": ["nestedfile.txt"],
  "/dir2": ["anotherfile.txt"],
};

const LinuxTerminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<{ command: string; output: string }[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [path, setPath] = useState<string>("/");
  const [fileSystem, setFileSystem] = useState<FileSystem>(initialFileSystem);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const availableCommands = [
    { command: "pwd", description: "Display current directory path" },
    { command: "ls", description: "List contents of current directory" },
    { command: "cd <dir>", description: "Change to specified directory" },
    { command: "cd ..", description: "Go back to the previous directory" },
    { command: "mkdir <dir>", description: "Create a new directory" },
    { command: "touch <file>", description: "Create a new file" },
    { command: "rm <file>", description: "Remove a file" },
    { command: "clear", description: "Clear the terminal screen" },
  ];

  const executeCommand = (command: string) => {
    let output = "";
    const args = command.split(" ");
    const cmd = args[0];

    switch (cmd) {
      case "pwd":
        output = path;
        break;

      case "ls":
        output = fileSystem[path]?.join("\n") || "No such directory";
        break;

      case "cd":
        if (args[1] === "..") {
          const pathSegments = path.split("/").filter(Boolean);
          if (pathSegments.length > 0) {
            pathSegments.pop();
            const newPath = `/${pathSegments.join("/")}`;
            setPath(newPath || "/");
          }
        } else if (args[1]) {
          const newPath = path === "/" ? `/${args[1]}` : `${path}/${args[1]}`;
          if (fileSystem[newPath]) {
            setPath(newPath);
          } else {
            output = `cd: no such directory: ${args[1]}`;
          }
        } else {
          output = "cd: missing operand";
        }
        break;

      case "mkdir":
        if (args[1]) {
          const newDir = args[1];
          const newDirPath = path === "/" ? `/${newDir}` : `${path}/${newDir}`;
          if (!fileSystem[newDirPath]) {
            setFileSystem((prev) => ({
              ...prev,
              [newDirPath]: [],
              [path]: [...(prev[path] || []), newDir],
            }));
            output = `Directory '${args[1]}' created`;
          } else {
            output = `mkdir: cannot create directory '${args[1]}': File exists`;
          }
        } else {
          output = "mkdir: missing operand";
        }
        break;

      case "touch":
        if (args[1]) {
          setFileSystem((prev) => {
            const updatedDir = [...prev[path], args[1]];
            return {
              ...prev,
              [path]: updatedDir,
            };
          });
          output = `File '${args[1]}' created`;
        } else {
          output = "touch: missing file operand";
        }
        break;

      case "rm":
        if (args[1]) {
          const fileExists = fileSystem[path]?.includes(args[1]);
          if (fileExists) {
            setFileSystem((prev) => {
              const updatedDir = prev[path].filter((file) => file !== args[1]);
              return {
                ...prev,
                [path]: updatedDir,
              };
            });
            output = `File '${args[1]}' removed`;
          } else {
            output = `rm: cannot remove '${args[1]}': No such file`;
          }
        } else {
          output = "rm: missing file operand";
        }
        break;

      case "clear":
        setCommandHistory([]);
        return;

      default:
        output = `${cmd}: command not found`;
        break;
    }

    setCommandHistory([...commandHistory, { command, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      executeCommand(currentCommand.trim());
      setHistoryIndex(commandHistory.length);
    }
    setCurrentCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCurrentCommand(commandHistory[historyIndex - 1].command);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < commandHistory.length) {
        setHistoryIndex(historyIndex + 1);
        setCurrentCommand(commandHistory[historyIndex].command);
      } else {
        setCurrentCommand("");
      }
    }
  };

  return (
    <div>
      <div className="commands-practice">
        <span>Commands to Practice:</span>
        {availableCommands.map((cmd, index) => (
          <span key={index} className="command-hint">
            <code>{cmd.command}</code>
            {index < availableCommands.length - 1 && " | "}
          </span>
        ))}
      </div>

      <div className="terminal-container">
        <div className="terminal-output">
          {commandHistory.map((entry, index) => (
            <div key={index}>
              <div className="command-line">
                <span className="prompt">user@linux:{path} $</span> {entry.command}
              </div>
              {entry.output && <div className="command-output">{entry.output}</div>}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="terminal-form">
          <span className="terminal-prompt">user@linux:{path} $</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="terminal-input"
            autoFocus
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
};

export default LinuxTerminal;
