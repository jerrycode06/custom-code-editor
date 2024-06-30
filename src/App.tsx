// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { highlight, languages } from "prismjs";

const App: React.FC = () => {
  const [code, setCode] = useState<string>(
    `function helloWorld() {
  console.log("Hello, world!");
}`
  );

  return (
    <div className="App">
      <h1>Jerry's code editor</h1>
      <CodeEditor
        value={code}
        onValueChange={setCode}
        highlight={(code) =>
          highlight(code, languages.javascript, "javascript")
        }
        padding={10}
      />
    </div>
  );
};

export default App;
